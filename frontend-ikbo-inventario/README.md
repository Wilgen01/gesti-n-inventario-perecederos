### **Guía de Instalación en Local**

---

## **Requisitos Previos**
1. **Node.js y npm:** 
   - Asegúrate de tener Node.js instalado (20.9.0).
   - Verifica la instalación ejecutando:
   
     ```bash
     node -v
     npm -v
     ```

2. **Angular CLI:**
   - Instala Angular CLI globalmente:
     ```bash
     npm install -g @angular/cli
     ```
   - Verifica la instalación ejecutando:

     ```bash
     ng version
     ```

---

## **Pasos de Instalación**

### **1. Clonar el Proyecto**
   Clona el repositorio del proyecto en tu máquina y accede a la carpeta del proyecto frontend-ikbo-inventario:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

---

### **2. Instalar Dependencias**
   - Ejecuta el siguiente comando en la raíz del proyecto para instalar las dependencias:

     ```bash
     npm install
     ```

---

### **3. Configurar Variables de Entorno**
   - Modifica los archivos `environment.development.ts` y `environment.ts` con la url del backend de ser necesario.

     ```
     src/environments/environment.ts
     src/environments/environment.development.ts
     ```
     Ejemplo:
     ```typescript
     export const environment = {
       apiUrl: 'http://localhost:3000/api'
     };
     ```

---

### **4. Ejecutar el Servidor de Desarrollo**
   - Inicia el servidor Angular en modo desarrollo:

     ```bash
     ng serve
     ```
   - Por defecto, la aplicación estará disponible en:
     ```
     http://localhost:4200
     ```

---

## **Notas Importantes**
- Asegúrate de que el puerto `4200` esté libre en tu sistema. Si está ocupado, puedes especificar otro puerto:

  ```bash
  ng serve --port=4300
  ```
