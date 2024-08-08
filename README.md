
# API de Gestión de Noticias

Este proyecto es una API desarrollada con Node.js y Express, diseñada para gestionar artículos y usuarios. La API leer registros de artículos y usuarios en una base de datos MongoDB, que se gestiona utilizando Mongoose como ORM.

## Características

- **Gestión de Artículos**: Permite a los usuarios crear, consultar, actualizar y eliminar artículos. Cada artículo contiene información como título, autor, descripción, y enlaces multimedia.
- **Gestión de Usuarios**: Permite la administración de usuarios registrados, incluyendo la creación, consulta, y eliminación de usuarios en la base de datos.
- **Conexión a MongoDB**: La base de datos utilizada es MongoDB, y la conexión es manejada a través de Mongoose, lo que facilita la interacción con la base de datos y la definición de esquemas de datos.
- **Documentación con Swagger**: La API está documentada utilizando Swagger, lo que facilita a los desarrolladores entender y utilizar los endpoints disponibles. La documentación puede ser accedida a través de la ruta `/api-docs`.

## Estructura del Proyecto

- **`backend/`**: Carpeta que contiene toda la lógica del servidor.
  - **`config/`**: Configuración de la base de datos y otros elementos esenciales.
  - **`controllers/`**: Controladores que manejan las solicitudes HTTP para diferentes rutas.
  - **`models/`**: Definiciones de los modelos de datos utilizando Mongoose.
  - **`operations/`**: Lógica que interactúa directamente con la base de datos.
  - **`routes/`**: Definición de rutas de la API, que direccionan a los controladores correspondientes.
  - **`src/`**: Contiene la configuración de la aplicación y el archivo principal para iniciar el servidor.
  
## Requisitos

- **Node.js** (v14 o superior)
- **MongoDB** (v4 o superior)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/nombre-del-repositorio.git
   cd nombre-del-repositorio
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura el archivo `.env` con las variables necesarias, como la conexión a MongoDB.

4. Inicia el servidor:
   ```bash
   nodemon i
   ```

5. Accede a la documentación Swagger en:
   ```
   http://localhost:3000/api-docs
   ```

## Uso

Puedes interactuar con la API utilizando herramientas como Postman o cURL. Consulta la documentación Swagger para más detalles sobre los endpoints disponibles y cómo utilizarlos.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue el flujo de trabajo Git estándar: haz un fork del repositorio, crea una rama para tu característica o corrección de error, realiza tus cambios, y abre un pull request para revisión.

