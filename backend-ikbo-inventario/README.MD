### **Instalación de la App con y sin Docker**

---

## **1. Instalación usando Docker (Recomendado)**

### **Requisitos Previos**
- Docker y Docker Compose instalados y ejecutándose en el sistema.

### **Pasos**

1. **Clona el repositorio del proyecto:**
    - Clona el repositorio del proyecto en tu máquina y accede a la carpeta del proyecto backend-ikbo-inventario.
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. **Configura las variables de entorno:**
   - Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
     ```env
     DB_HOST=db
     DB_USER=root
     DB_PASSWORD=123456
     DB_NAME=inventory
     DB_PORT=3306
     ```

3. **Edita el archivo `docker-compose.yml`:**
   - De ser necesario modifica los puertos de la base de datos en el archivo `docker-compose.yml`.
   - El servidor debe quedar en `localhost` y preferiblemente el puerto `3000` si se realiza cambio de puerto se debe modificar el archivo `environment.development.ts` en el proyecto de Angular.

4. **Construye y levanta los servicios:**
   Ejecuta el siguiente comando:
   ```bash
   docker-compose up --build
   ```

5. **Verifica la aplicación:**
   - Accede a la aplicación en tu navegador:
     ```
     http://localhost:3000
     ```
   - La base de datos estará accesible en el puerto `3306`.

---

## **2. Instalación sin Docker**

### **Requisitos Previos**
- Node.js instalado (preferiblemente la última LTS).
- MySQL Server instalado y configurado.

### **Pasos**

1. **Clona el repositorio del proyecto:**
    - Clona el repositorio del proyecto en tu máquina y accede a la carpeta del proyecto backend-ikbo-inventario.
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. **Configura la base de datos:**
   - Crea una base de datos llamada `inventory` en MySQL.
     ```sql
     CREATE DATABASE inventory;
     ```
   - Ejecuta el script de inicialización (init.sql) en tu base de datos:

3. **Configura las variables de entorno:**
   - Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido o modifique los valores de acuerdo a su configuración:
     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=123456
     DB_NAME=inventory
     DB_PORT=3306
     ```

4. **Instala las dependencias:**
   - Asegúrate de estar en la carpeta del proyecto y ejecuta:
     ```bash
     npm install
     ```

5. **Inicia la aplicación:**
   ```bash
   npm run dev
   ```

6. **Verifica la aplicación:**
   - Accede a la aplicación en tu navegador:
     ```
     http://localhost:3000
     ```

---

### **Notas Importantes**
- Si utilizas **Docker**, asegúrate de que los puertos necesarios no estén ocupados en tu máquina.
- Si instalas sin Docker, debes asegurarte de que el servidor MySQL esté activo y accesible.