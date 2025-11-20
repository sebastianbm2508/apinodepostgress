Trabajo realizado por Sebastian Bolivar Millan 

en este proyecto se desarrolla una API REST usando Node.js, Express y PostgreSQL. permite realizar operaciones crud: Crear, Leer, Actualizar y Eliminar estudiantes.

se debe importar para que funcione que esta en https://github.com/sebastianbm2508/apinodepostgres.git
Métodos HTTP implementados:

GET, POST, PUT, DELETE

El proyecto se conecta a una base de datos PostgreSQL y muestra la información en una tabla

REQUISITOS:

Antes de iniciar, se debe tener instalado:

Node.js

PostgreSQL

PgAdmin 

INSTALACIÓN DEL PROYECTO:

Crear una carpeta para el proyecto
Ejemplo: api-node-postgres que en este caso asi se llama mi carpeta

Abrir una terminal dentro de la carpeta
Puede ser CMD, PowerShell o terminal de VSCode 

Inicializar el proyecto Node.js
npm init -y

Instalar dependencias necesarias
npm install express cors pg

CONFIGURACIÓN DE LA BASE DE DATOS:

En PgAdmin o en psql ejecutar:

CREATE DATABASE api_estudiantes;

CREATE TABLE estudiantes (
id SERIAL PRIMARY KEY,
nombre VARCHAR(100),
edad INT
);

ESTRUCTURA DE MI PROYECTO QUEDO DE LA SIGUIENTE MANERA:

api-node-postgres/
├── index.js
├── db.js
├── package.json
└── public/
├── index.html
├── style.css
└── app.js

ARCHIVO db.js (CONEXIÓN A POSTGRESQL)

user: 'postgres',
host: 'localhost',
database: 'api_estudiantes',   asi es como se llama la base de datos creada para la api, donde se encontrara la tabla "usuarios" con sus respectivas colunmas (id, nombre y edad)
password: 'TU_CONTRASEÑA',
port: 5432,

EJECUCIÓN DEL PROYECTO: 

Abrir terminal dentro del proyecto

Ejecutar:
node index.js

Si todo está bien, aparecerá:
Servidor ejecutándose en http://localhost:3000

USO DEL PROYECTO

Para ver la API en formato JSON (GET):
http://localhost:3000/estudiantes

Para usar la interfaz CRUD abrir en navegador:
http://localhost:3000

Desde esta interfaz puedes:

Agregar estudiantes, Consultar estudiantes, Editar estudiantes, Eliminar estudiantes, ENDPOINTS DE LA API
