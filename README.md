# Traductor JavaScript
Proyecto final desarrollado para el Bootcamp Fullstack Web Develop de CodeSpace décima edición.

## Instalación del proyecto

### Backend

Por defecto, el back escuchará a través del puerto 8000.
Para instalar todas las dependencias escribir el siguiente comando dentro del directorio back:
```javascript
npm install
```
Para que la aplicación backend funcione, debemos crear un archivo llamado .env en la raiz del proyecto backend y copiar en el lo siguiente:
```env
DATABASE_URL = mongodb://localhost:27017/Proyect
SECRET = Pegar aquí el token secreto de JWT
REFRESH_SECRET = Pegar aquí el token de refresco secreto de JWT
```


### Frontend

Para instalar el proyecto de front hay que utilizar el siguiente comando dentro del directorio front:
```javascript
npm install
```
Y una vez instaladas todas las dependencias ejecutar lo siguiente para arrancar la aplicación:
```javascript
npm run dev
```
La URL de la aplicación es:
```javascript
http://localhost:3000
```


# **Rutas**
Las peticiones se lanzan de la siguiente manera:

- INDEX
    - Ruta: `localhost:8000`
    - Método: `GET`
    
- CONTACT
    - Ruta: `localhost:8000/contact`
    - Método: `GET`

- LOGIN
    - Ruta: `localhost:8000/login`
    - Método: `GET`
    - Parámetro BODY:
        - `email *<string>*`
        - `password *<string>`

- REGISTER
    - Ruta: `localhost:8000/register
    - Método: `POST`
    - Parámetro BODY:
        - `userName *<string>*`
        - `email *<string>*`
        - `password *<string>`

- DASHBOARD
    - Ruta: `localhost:3000/dashboard/:id`
    - Método: `GET`
    - Parámetro URL: `userId`
    
- APP
    - Ruta: `localhost:8000/app-translate`
    - Método: `GET`
    
- APP NOTE
    - Ruta: `localhost:8000/notes/by_user/:id`
    - Método: `GET`

- CREATE NOTE
    - Ruta: `localhost:8000/notes/new-note`
    - Método: `POST`
    - Parámetro BODY:
        - `title *<string>*`
        - `description *<string>*`

- UPDATE NOTE
    - Ruta: `localhost:8000/notes/edit/:id`
    - Método: `PATCH`
    - Parámetro URL: `noteId`
    - Parámetro BODY:
        - `title *<string>*`
        - `description *<string>*`

- DELETE NOTE
    - Ruta: `localhost:8000/notes/:id`
    - Método: `DELETE`
    - Parámetro URL: `noteId`

