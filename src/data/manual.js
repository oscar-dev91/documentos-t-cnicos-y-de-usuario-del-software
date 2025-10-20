const manual = {
  evidence: "GA10-220501097-AA10-EV01",
  title: "Manual Técnico y de Usuario - Sistema Bancario Django REST + React",

  prerequisites: {
    title: "Prerrequisitos de instalación",
    items: [
      "Python >= 3.10",
      "Django >= 4.2",
      "Django REST Framework >= 3.14",
      "MySQL >= 8.0",
      "Node.js >= 20.x y npm >= 10.x",
      "Docker y Docker Compose (para despliegue automatizado)",
      "Git instalado para clonar los repositorios"
    ],
    notes:
      "Es recomendable ejecutar el sistema en un entorno Linux o WSL2 con Docker configurado correctamente. Los servicios utilizan los puertos 5173 (frontend), 8000 (backend) y 3306 (MySQL)."
  },

  frameworks: {
    title: "Frameworks y estándares utilizados",
    items: [
      "Backend: Django 4.2 + Django REST Framework",
      "Frontend: React 18 + Vite + Tailwind CSS 4.1.15",
      "Base de datos: MySQL 8.0",
      "Contenedores: Docker y Docker Compose",
      "Estándares de documentación: ISO/IEC 14724 (Mantenimiento de software)",
      "Control de versiones: GitHub"
    ]
  },

  useCases: {
    title: "Diagrama de Casos de Uso (Mermaid)",
    description:
      "El sistema permite a clientes y operadores realizar acciones bancarias comunes bajo autenticación.",
    diagram: `
      usecaseDiagram
      actor Cliente
      actor Operador
      actor Administrador

      Cliente --> (Iniciar sesión)
      Cliente --> (Consultar saldo)
      Cliente --> (Realizar transferencia)
      Cliente --> (Ver historial de transacciones)

      Operador --> (Registrar nueva cuenta)
      Operador --> (Realizar depósito)
      Operador --> (Realizar retiro)

      Administrador --> (Gestionar usuarios)
      Administrador --> (Auditar acciones)
      Administrador --> (Consultar logs)
    `
  },

  erModel: {
    title: "Modelo Entidad - Relación (Mermaid)",
    description:
      "El modelo relacional define las entidades Usuario, Cuenta, Transaccion y Log, con relaciones uno a muchos.",
    diagram: `
      erDiagram
        USUARIO ||--o{ CUENTA : posee
        USUARIO ||--o{ LOG : registra
        CUENTA ||--o{ TRANSACCION : realiza
        CUENTA ||--o{ TRANSACCION : recibe

        USUARIO {
          int ID_Usuario PK
          string Nombre
          string Correo_Electronico
          string Telefono
          string Tipo
          datetime Fecha_Registro
        }

        CUENTA {
          int ID_Cuenta PK
          string Numero_Cuenta
          string Tipo
          decimal Saldo
          string Estado
          int ID_Usuario FK
        }

        TRANSACCION {
          int ID_Transaccion PK
          string Tipo
          decimal Cantidad
          datetime Fecha
          string Estado
          int ID_Cuenta FK
          int ID_Cuenta_Destino FK
          int ID_Operador FK
        }

        LOG {
          int ID_Log PK
          int ID_Usuario FK
          string Accion
          text Descripcion
          datetime Fecha
        }
    `
  },

  dataDictionary: {
    title: "Diccionario de Datos del Sistema",
    fields: [
      {
        name: "usuario.id_usuario",
        type: "INT PK",
        description: "Identificador único de cada usuario del sistema."
      },
      {
        name: "usuario.correo_electronico",
        type: "VARCHAR(100)",
        description: "Correo electrónico único usado como credencial de acceso."
      },
      {
        name: "cuenta.numero_cuenta",
        type: "VARCHAR(20)",
        description: "Número único asignado a la cuenta bancaria."
      },
      {
        name: "cuenta.tipo",
        type: "VARCHAR(9)",
        description: "Tipo de cuenta (Ahorros o Corriente)."
      },
      {
        name: "cuenta.saldo",
        type: "DECIMAL(10,2)",
        description: "Saldo actual disponible en la cuenta."
      },
      {
        name: "transaccion.tipo",
        type: "VARCHAR(13)",
        description: "Tipo de transacción: depósito, retiro o transferencia."
      },
      {
        name: "transaccion.id_cuenta_destino",
        type: "INT FK",
        description: "Cuenta destino de la transferencia (si aplica)."
      },
      {
        name: "log.accion",
        type: "VARCHAR(255)",
        description: "Acción ejecutada por el usuario (creación, modificación, borrado)."
      },
      {
        name: "log.descripcion",
        type: "TEXT",
        description: "Descripción detallada del evento para auditoría."
      }
    ]
  },

  scripts: {
    title: "Scripts de Instalación y Despliegue",
    items: [
      {
        name: "Dockerfile",
        description:
          "Define la imagen base Ubuntu 22.04, instala Python, MySQL client y Node.js. Clona los repositorios del backend y frontend, instala dependencias y levanta ambos servicios.",
        code: `
# Imagen base Ubuntu
FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive
WORKDIR /opt

# --- Instalación de dependencias del sistema ---
RUN apt-get update && apt-get install -y \\
    python3 python3-pip python3-venv python3-dev \\
    git \\
    curl \\
    default-mysql-client \\
    libmysqlclient-dev pkg-config build-essential \\
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \\
    && apt-get install -y nodejs \\
    && apt-get clean

# --- Clonar repositorio Backend ---
RUN git clone https://github.com/oscar-dev91/BancoDemoREST.git
WORKDIR /opt/BancoDemoREST

RUN pip3 install --upgrade pip && pip3 install -r requirements.txt

# --- Variables de entorno Django ---
RUN echo "SECRET_KEY=django-insecure-d6*a@$3hhoe)romni8a5-gl84w4n^()3a@n5f25#%zxfz6agt5\\n
DEBUG=True\\n
DB_NAME=bancodemodb\\n
DB_USER=root\\n
DB_PASSWORD=1234\\n
DB_HOST=mysql_bancodemo\\n
DB_PORT=3306" > bancodemo/.env

# --- Clonar repositorio Frontend ---
WORKDIR /opt
RUN git clone https://github.com/oscar-dev91/BancoDemoFrontend.git
WORKDIR /opt/BancoDemoFrontend

# --- Instalar dependencias del Frontend ---
RUN npm install

# --- Exponer puertos ---
EXPOSE 8000 5173

# --- Script de inicio combinado (Backend + Frontend) ---
WORKDIR /opt/BancoDemoREST/bancodemo

CMD bash -c "\\
  echo 'Inicializando backend Django...' && \\
  python3 manage.py makemigrations core && \\
  python3 manage.py migrate && \\
  python3 manage.py runserver 0.0.0.0:8000 & \\
  echo 'Inicializando frontend Vite...' && \\
  cd /opt/BancoDemoFrontend && npm run dev -- --host 0.0.0.0 \\
"
`      
      },
      {
        name: "docker-compose.yml",
        description:
          "Orquesta tres servicios: MySQL, backend Django REST y frontend React. Configura red interna, dependencias, puertos y variables de entorno.",
          code: `
services:
  # --- Servicio MySQL ---
  mysql_bancodemo:
    image: mysql:8.0
    container_name: mysql_bancodemo
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 1234
      MYSQL_DATABASE: bancodemodb
    ports:
      - "3306:3306"
    volumes:
      - ./data/mysql:/var/lib/mysql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 5s
      retries: 10
    networks:
      - bancodemo_network

  # --- Servicio Backend Django ---
  bancodemo_backend:
    build: .
    container_name: bancodemo_backend
    depends_on:
      mysql_bancodemo:
        condition: service_healthy
    environment:
      DB_HOST: mysql_bancodemo
      DB_NAME: bancodemodb
      DB_USER: root
      DB_PASSWORD: 1234
      DB_PORT: 3306
    ports:
      - "8000:8000"
    networks:
      - bancodemo_network

  # --- Servicio Frontend ---
  bancodemo_frontend:
    build: .
    container_name: bancodemo_frontend
    working_dir: /opt/BancoDemoFrontend
    command: bash -c "npm install && npm run dev -- --host 0.0.0.0"
    ports:
      - "5173:5173"
    depends_on:
      - bancodemo_backend
    environment:
      - VITE_API_URL=http://bancodemo_backend:8000/api/
    networks:
      - bancodemo_network

networks:
  bancodemo_network:
    driver: bridge
`
      },
    ]
  },

  componentDiagram: {
    title: "Diagrama de Componentes (Mermaid)",
    description:
      "Representa la estructura modular del sistema bancario con sus principales componentes backend y frontend.",
    diagram: `
      C4Context
      title Sistema Bancario Django + React

      Person(cliente, "Cliente", "Usa la aplicación para realizar operaciones bancarias.")
      Person(operador, "Operador", "Gestiona cuentas y transacciones.")
      System_Boundary(bancodemo, "BancoDemo System") {
        Container(backend, "Django REST API", "Python/Django", "Gestiona lógica de negocio, seguridad y base de datos.")
        Container(frontend, "Frontend React", "JavaScript + Vite + Tailwind", "Interfaz gráfica del usuario.")
        ContainerDb(db, "MySQL Database", "MySQL 8.0", "Almacena usuarios, cuentas y transacciones.")
      }

      cliente --> frontend : "HTTP (Vite/React)"
      operador --> frontend
      frontend --> backend : "REST API (JSON)"
      backend --> db : "ORM Django"
      backend --> log : "Registra acciones en LOG"
    `
  }
};

export { manual };
