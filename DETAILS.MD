
## **Diseño del Sistema**

El diseño del sistema se basó en la separación clara de responsabilidades entre el **backend** y el **frontend**, aplicando principios de arquitectura que aseguran escalabilidad y mantenibilidad.

---

### **Backend**

#### **Tecnologías**
- **Node.js** con **Express**: Elegido por si dinamismo y rapidez de desarrollo.
- **Typescript**: Para disminuir el número de errores y mejorar la legibilidad del código.
- **Base de datos MySQL**: Se optó por una base relacional para manejar transacciones y relaciones entre entidades.

#### **Arquitectura**
- **Arquitectura Limpia (Clean Architecture):** 
  - Para tener una separacion clara de responsabilidades entre cada capa y mejorar la mantenibilidad del código.
  - Se estructuró en capas principales:
    - **Domain:** Contienen las reglas de negocio puras.
    - **Application:** Manejan la lógica de aplicación específica.
    - **Api:** Incluyen controladores y adaptadores para interactuar con el mundo externo.
    - **Infrastructure:** Gestiona la integración con frameworks, bases de datos y servicios externos.

---

### **Frontend**

#### **Tecnologías**
- **Angular:** Seleccionado por su robustez y herramientas que tiene como plataforma.
- **Angular material:** Seleccionado para agilizar el desarrollo de interfaces de usuario.

#### **Arquitectura**
- **Screaming Architecture:** 
  - El diseño de la estructura del proyecto refleja el dominio del negocio en lugar de los detalles técnicos.
  - Cada capa representa una funcionalidad específica del negocio.

#### **Decisiones Clave**
1. **Modularidad:** a pesar de usar standalone components, se trata de modularizar el código para facilitar la mantenimiento y escalar la aplicación.
2. **Lazy Loading:** Implementado para cargar módulos bajo demanda, mejorando el rendimiento.
3. **Componentes Reutilizables:** Se crean elementos reutilizables para facilitar la creación de interfaces de usuario.

---

## **¿Que habría hecho con mas tiempo?**

### **Backend**
1. **Validaciones mas robustas:**
    - validar que los productos existen en la base de datos.

2. **Pruebas unitarias:**
    - Implementar tests unitarios para cada endpoint.
    - Usar **Jest** para escribir tests unitarios.

3. **API Documentation:**
   - Utilizar **Swagger** para documentar las APIs y facilitar la integración con otros servicios.
   
---

### **Frontend**
1. **Estado Global:**
   - Implementar estado global para compartir datos y manejar estados complejos.

2. **Mejorar la UX:**
   -  Hacer la aplicación mas intuitiva, amigable y fácil de usar. 
   -  Implementar un sistema de notificaciones para mostrar mensajes de éxito y error.

3. **Componentes Reutilizables:**
    - Crear mas componentes reutilizables para facilitar la creación de interfaces de usuario.

---
