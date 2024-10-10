¡Perfecto! Las instrucciones para correr el proyecto se ven bien. Sin embargo, hay un par de detalles que podríamos mejorar para que sean más claras y completas:

**Instrucciones mejoradas**

```
Para correr el proyecto, sigue estos pasos:

1. Instala las dependencias:

   ```
   npm install
   ```

2. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:

   ```
   EXPRESS_PORT=3000
   EXPRESS_HOST="localhost"
   EXPRESS_EXPIRE=60000

   MONGODB_URI=mongodb://mongo:kJGuXAFhJHjUHnqJztfZzgZVPnvfBben@junction.proxy.rlwy.net:36804
   ```

3. Inicia el servidor de desarrollo:

   ```
   npm run dev:src
   ```
```

**Mejoras realizadas**

* **Claridad:** Se agregaron números a los pasos y se mejoró la redacción para que las instrucciones sean más fáciles de seguir.
* **`.env`:** Se especificó que el archivo `.env` debe crearse en la raíz del proyecto.
* **Explicación de las variables de entorno (opcional):** Podrías agregar una breve explicación de qué significan las variables de entorno en el archivo `.env`, especialmente `MONGODB_URI`.

**Ejemplo con explicación de `MONGODB_URI`**

```
Para correr el proyecto, sigue estos pasos:

1. Instala las dependencias:

   ```
   npm install
   ```

2. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:

   ```
   EXPRESS_PORT=3000     // Puerto en el que se ejecutará el servidor Express
   EXPRESS_HOST="localhost"  // Host del servidor Express
   EXPRESS_EXPIRE=60000    // Tiempo de expiración de las sesiones (en milisegundos)

   MONGODB_URI=mongodb://mongo:kJGuXAFhJHjUHnqJztfZzgZVPnvfBben@junction.proxy.rlwy.net:36804  // URI de conexión a MongoDB
   ```

3. Inicia el servidor de desarrollo:

   ```
   npm run dev:src
   ```
```

**Consideraciones adicionales**

* **Dependencias:** Si el proyecto tiene otras dependencias o pasos de configuración adicionales, asegúrate de incluirlos en las instrucciones.
* **Scripts:** Si tienes otros scripts npm que podrían ser útiles para los usuarios (por ejemplo, para ejecutar pruebas o construir la aplicación para producción), puedes mencionarlos también.
* **Documentación:** Si tienes documentación más detallada sobre el proyecto, puedes incluir un enlace a ella en las instrucciones.

¡Espero que estas mejoras te sean útiles! Si tienes alguna otra pregunta o necesitas más ayuda, no dudes en decirlo. 






**Instrucciones para acceder a la aplicación**

1. **Inicio:**
   - Al ingresar a la aplicación, por favor, espera unos instantes mientras se completa la animación de inicio.

2. **Acceso a la aplicación:**
   - Si aún no tienes una cuenta, regístrate seleccionando la opción que prefieras.
   - Si ya estás registrado, haz clic en "Iniciar sesión" y elige el método de acceso que desees.

3. **Acceso alternativo:**
   - En caso de que no puedas acceder mediante las opciones anteriores, puedes obtener una vista previa de la aplicación haciendo clic en el enlace "No te preocupes, echa un vistazo".

4. **Exploración de la aplicación:**
   - Una vez dentro de la aplicación, podrás explorar los productos que ofrecemos y simular una cuenta para verlos en detalle.

5. **Disponibilidad de productos:**
   - Ten en cuenta que, por el momento, la aplicación no está conectada a la base de datos. Por lo tanto, solo podrás acceder a una selección limitada de productos y algunas funcionalidades estarán deshabilitadas.

