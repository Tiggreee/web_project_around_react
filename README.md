# Around The U.S. - React

Aplicación social para compartir fotos de lugares, migrada a React con Vite. Los usuarios pueden ver tarjetas de fotos, dar likes, editar su perfil, cambiar avatar y gestionar una colección completa de imágenes conectada a una API real.

## Desarrollo

```bash
npm run dev      # Servidor de desarrollo (puerto 3000)
npm run build    # Build de producción  
npm run preview  # Vista previa del build
```

## Estructura

```
src/
├── components/
│   ├── Header/          # Logo y perfil de usuario
│   ├── Main/            # Contenido principal con tarjetas
│   │   └── components/  # Card, Popup, formularios
│   └── Footer/          # Copyright
├── contexts/            # CurrentUserContext para estado global
├── utils/               # API class con métodos de backend
├── images/              # Recursos locales
└── index.css           # Estilos BEM
```

## Características

- **API Integration**: Conexión completa con backend para datos reales
- **Context API**: Gestión de estado global del usuario
- **Popups dinámicos**: Sistema centralizado con validación en tiempo real
- **Validación de formularios**: Mensajes de error nativos
- **Responsive**: Mobile-first (767px, 1279px breakpoints)  
- **React Hooks**: useState, useEffect, useContext, useRef
- **Interactividad completa**: Like/unlike, delete, editar perfil, cambiar avatar, añadir cards

## Componentes Clave

- `App.jsx`: Gestión centralizada de estado (cards, user, popups)
- `Main.jsx`: Renderizado de cards con props desde App  
- `Popup.jsx`: Container reutilizable con cierre ESC/overlay
- `Card.jsx`: Componente individual con like/delete (solo owner)
- `CurrentUserContext.js`: Contexto global para usuario y funciones
- Formularios: `EditProfile` (controlled), `EditAvatar` (refs), `NewCard`

## Funcionalidades

### API y Backend
- Carga de tarjetas desde servidor al montar componente
- Carga de datos de usuario desde API
- Like/unlike con actualización en tiempo real
- Eliminación de tarjetas (solo el dueño)
- Edición de perfil (nombre y descripción)
- Cambio de avatar con validación de URL
- Añadir nuevas tarjetas que aparecen al inicio

### Validación
- Campos obligatorios (2-40 chars nombres, 2-200 descripciones)
- URLs válidas para imágenes y avatar
- Botones inactivos con estados de error
- Feedback visual en tiempo real

### UX/UI
- Cierre de popups con ESC o clic en overlay  
- Auto-cierre tras guardar cambios exitosos
- Efectos hover en botones y elementos interactivos
- Actualización automática de UI tras cambios (paradigma declarativo)

## Tecnologías

- React 19
- Vite
- Context API
- Fetch API
- BEM Methodology

## Bilingual Strategy / Estrategia Bilingüe

This project follows a **bilingual development approach** to reflect real-world workflow:

**English (Internal/Development):**
- Code (variables, functions, methods)
- Git commits & branch names
- Technical documentation
- Console logs & error handling
- Comments (when needed)

**Spanish (User-Facing/UI):**
- User interface text & placeholders
- Form labels & validation messages
- Button text & popup titles
- Alt text & accessibility labels
- User error messages

**Transition Plan:** Gradually migrating all UI text to English for international scalability while maintaining Spanish as a base for local users.

---

*Este proyecto sigue un enfoque de desarrollo bilingüe para reflejar flujos de trabajo reales, con código e infraestructura en inglés y experiencia de usuario en español.*
