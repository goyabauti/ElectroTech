ElectroTech - Backend POO

-Tecnologías y Herramientas
* Lenguaje TypeScript (Configurado como Módulo ECMAScript moderno).
* Testing Vitest.
* CI GitHub Actions.
* Control de Versiones Git & GitHub.

-Conceptos de POO Aplicados
El código central (`src/ElectroTech.ts`) está diseñado utilizando los siguientes paradigmas:

1. *Clases y Herencia; Uso de una superclase `ArticuloBase` de la cual heredan distintos componentes específicos (`Chips`, `Keys`, `Suscripcion`).
2. *Encapsulamiento: Protección de datos sensibles mediante modificadores de acceso (`private stock`, `protected precioBase`) y métodos validadores (`actualizarStock` para evitar stock negativo).
3. *Interfaces: Implementación del contrato `Cotizable` para garantizar que todos los artículos puedan ser procesados por el sistema de facturación.
4. *Polimorfismo: El método `calcularPrecioFinal()` toma distintas formas dependiendo de la clase (ej: los componentes físicos suman recargo por peso e IVA, mientras que las licencias digitales solo aplican un 10% de recargo).

-Test Unitarios y CI
El proyecto cuenta con tests unitarios que auditan la lógica de negocio. 

Además, cuenta con un flujo de Integración Continua (CI) mediante GitHub Actions. Cada vez que se realiza un `push` a la rama principal, un servidor en la nube levanta el entorno de Node.js y ejecuta los tests automáticamente para asegurar que no se haya introducido código roto.


-Cómo ejecutar este proyecto localmente

-Clonar el repositorio:
  ```bash
    1. git clone [https://github.com/goyabauti/ElectroTech]

    2. npm install 

    3. npm run test