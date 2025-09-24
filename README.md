# Around The U.S. - Versión React

Este es el paso número 13 de mi travesía en TripleTen.
El objetivo principal fue migrar completamente la aplicación "Around The U.S." desde JavaScript vanilla a React, aplicando conceptos modernos de desarrollo frontend con Vite como herramienta de construcción.

## Descripción

- Aplicación completamente funcional en React con componentes modulares y reutilizables.
- Permite editar el perfil de usuario (nombre y ocupación) mediante popups interactivos.
- Los usuarios pueden dar "like" a las imágenes de la galería con estado persistente.
- Sistema de popups unificado que maneja formularios y visualización de imágenes.
- Diseño responsive: se adapta a dispositivos móviles, tablets y escritorio.
- Efectos visuales sofisticados con gradientes futuristas y hover effects.
- Uso de React Hooks (useState) para el manejo del estado de la aplicación.

## Tecnologías utilizadas

- React 19.1.1
- Vite 7.1.7 (herramienta de desarrollo y construcción)
- HTML5 y JSX
- CSS3 (BEM, Flexbox, Grid, Media Queries, gradientes avanzados)
- JavaScript ES6+ (componentes funcionales, hooks, módulos)
- ESLint para control de calidad de código

## Arquitectura del proyecto

### Estructura de componentes
```
src/
├── components/
│   ├── Header/
│   │   └── Header.jsx          # Logo y sección de perfil con botones
│   ├── Main/
│   │   ├── Main.jsx            # Contenedor principal con lógica de estado
│   │   └── components/
│   │       ├── Card/
│   │       │   └── Card.jsx    # Tarjeta individual con funcionalidad like
│   │       ├── form/
│   │       │   ├── EditProfile/
│   │       │   ├── EditAvatar/
│   │       │   └── NewCard/    # Formularios especializados
│   │       └── Popup/
│   │           └── Popup.jsx   # Sistema de popups unificado
│   └── Footer/
│       └── Footer.jsx          # Información de copyright
├── images/                     # Assets del proyecto (logos, botones, avatares)
├── App.jsx                     # Componente raíz con gestión de popups
└── index.css                   # Estilos completos con metodología BEM
```

### Patrones de diseño implementados

- **Sistema de popups unificado**: Un componente Popup que acepta `title` y `children`, donde title=null indica popup de imagen
- **Gestión de estado centralizada**: App.jsx maneja todo el estado de popups con un objeto `{title, children}`
- **Componentes funcionales**: Uso exclusivo de function components con React Hooks
- **Props drilling controlado**: Paso de funciones de manejo de eventos a través de props

## Funcionalidades clave

### Sistema de tarjetas
- Renderizado dinámico desde array de datos mock
- Funcionalidad de "like" con estado visual activo/inactivo
- Click en imagen abre popup de visualización expandida
- Botón de eliminación (visual, sin funcionalidad backend aún)

### Sistema de popups
- **Popup de imagen**: Visualización expandida de tarjetas al hacer click
- **Formulario de perfil**: Edición de nombre y descripción de usuario
- **Formulario de tarjeta**: Creación de nuevas tarjetas (visual)
- **Formulario de avatar**: Cambio de foto de perfil (visual)
- **Manejo de teclado**: Cierre con tecla Escape
- **Click fuera**: Cierre al hacer click en overlay

### Diseño visual avanzado
- **Gradientes futuristas**: Fondos sofisticados con múltiples gradientes
- **Responsive design**: Breakpoints en 767px y 1279px
- **Efectos hover**: Transiciones suaves en botones e interacciones
- **Logo responsivo**: Aumenta de tamaño significativamente en desktop (500px)

## Cosas que aprendí y retos

### Migración de vanilla JS a React
- Cómo trasladar lógica de manipulación del DOM a componentes React
- Gestión de estado con useState en lugar de variables globales
- Patrón de comunicación entre componentes padre-hijo
- Importación y uso de assets en el ecosistema de React/Vite

### Arquitectura de componentes
- Separación clara de responsabilidades entre componentes
- Sistema de props para comunicación entre componentes
- Reutilización de componentes (Popup para múltiples usos)
- Organización modular de archivos y carpetas

### Herramientas modernas de desarrollo
- Configuración y uso de Vite como bundler y dev server
- Hot reload para desarrollo ágil
- ESLint para mantener calidad de código
- Importación de módulos ES6 con assets

## Comandos disponibles

```bash
npm run dev      # Inicia servidor de desarrollo en puerto 3000
npm run build    # Construye la aplicación para producción
npm run preview  # Vista previa de la construcción de producción
npm run lint     # Ejecuta análisis de código con ESLint
```

## Estructura de datos

Las tarjetas utilizan el siguiente modelo de datos:
```javascript
{
  _id: string,        // Identificador único
  name: string,       // Título de la tarjeta
  link: string,       // URL de la imagen
  isLiked: boolean,   // Estado del like
  owner: string,      // ID del propietario
  createdAt: string   // Fecha de creación
}
```

## Configuración del entorno

### Vite configurado para:
- Puerto 3000 por defecto
- Apertura automática del navegador
- Hot Module Replacement (HMR) para React
- Optimización de assets y imágenes

### ESLint configurado para:
- Estándares de React y JavaScript moderno
- Deshabilitación de warnings de prop-types para desarrollo ágil
- Reglas de formato y buenas prácticas

## Cosas por mejorar en futuras fases

- Integración con API backend real para persistencia de datos
- Validación robusta de formularios con bibliotecas como Formik
- Implementación de Context API o Redux para estado global
- Animaciones más sofisticadas con bibliotecas como Framer Motion
- Testing unitario con Jest y React Testing Library
- Lazy loading de componentes e imágenes
- Implementación de Service Workers para funcionalidad offline

## Migración completada

Esta versión React representa una migración completa y exitosa del proyecto original en JavaScript vanilla. Mantiene toda la funcionalidad visual y de interacción, pero con una arquitectura moderna, escalable y mantenible que cumple con los estándares de desarrollo frontend actual.

La experiencia de usuario es idéntica al proyecto original, pero el código es significativamente más organizado, reutilizable y preparado para futuras ampliaciones y colaboraciones en equipo.

Este proyecto ha sido parte de mi aprendizaje en el bootcamp de TripleTen LATAM, así que cualquier feedback es bienvenido. ¡Gracias por visitar mi trabajo! Y por ser un duro crítico, generalmente constructivo.

**Repositorio del proyecto original:** [web_project_around](https://github.com/Tiggreee/web_project_around)
