# Around The U.S. - React

Aplicación social para compartir fotos de lugares, migrada a React con Vite. Los usuarios pueden ver tarjetas de fotos, editar su perfil y gestionar una colección de imágenes de lugares.

## Desarrollo

```bash
npm run dev      # Servidor de desarrollo (puerto 3000)
npm run build    # Build de producción  
npm run preview  # Vista previa del build
```

##  Estructura

```
src/
├── components/
│   ├── Header/          # Logo y perfil
│   ├── Main/            # Contenido principal
│   │   └── components/  # Card, Popup, formularios
│   └── Footer/          # Copyright
├── images/              # Recursos locales
└── index.css           # Estilos BEM
```

## Características

- **Popups dinámicos**: Sistema centralizado con validación
- **Validación en tiempo real**: Mensajes de error nativos
- **Responsive**: Mobile-first (767px, 1279px breakpoints)  
- **Gestión de estado**: React hooks para formularios y UI
- **Interactividad**: Like, delete, editar perfil, nuevas cards

## Componentes Clave

- `App.jsx`: Gestión de popups centralizada
- `Main.jsx`: Renderizado de cards y handlers  
- `Popup.jsx`: Container reutilizable con cierre ESC/overlay
- `Card.jsx`: Componente individual con like/delete
- Formularios: `EditProfile`, `NewCard`, `EditAvatar`

##  Funcionalidades

- Validación campos obligatorios (2-40 chars nombres, 2-200 descripciones)
- URLs válidas para imágenes
- Botones inactivos con estados de error
- Cierre de popups con ESC o clic en overlay  
- Efectos hover en botones y elementos interactivos
