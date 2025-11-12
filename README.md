# Around The U.S. - Sprint 18 Authentication

Implementación del sistema de registro y autorización en el frontend para el proyecto React "Alrededor de los EE.UU.". Este proyecto implementa todas las funcionalidades requeridas para el Sprint 18, incluyendo rutas protegidas, componentes de autenticación y conexión con la API de TripleTen.

## Descripción del Proyecto

Este repositorio contiene la implementación completa del sistema de autenticación para usuarios, según los requerimientos del Sprint 18 de TripleTen. Se crearon nuevas rutas `/signup` y `/signin` para usuarios no autorizados, y se protegió la ruta principal `/` para usuarios autenticados únicamente.

## Funcionalidades Implementadas

### 1. Sistema de Rutas y Redirección
- **Ruta protegida `/`**: Accesible solo para usuarios autorizados
- **Ruta `/signup`**: Registro de nuevos usuarios
- **Ruta `/signin`**: Autorización de usuarios existentes
- **Redirección automática**: Usuarios no autorizados son dirigidos a `/signin`

### 2. Componentes de React Creados

#### Componentes de Autenticación
- **`Login`**: Formulario de autorización con variables de estado necesarias
- **`Register`**: Formulario de registro con variables de estado necesarias  
- **`ProtectedRoute`**: Componente que protege la ruta `/` de usuarios no autorizados
- **`InfoTooltip`**: Modal informativo para confirmar registro exitoso o fallido

#### Modificaciones al Header
- **Header diferenciado**: Muestra información distinta para usuarios autorizados y no autorizados
- **Usuarios autorizados**: Muestra email del usuario y botón de "Cerrar sesión"
- **Usuarios no autorizados**: Muestra enlaces a "Inicia sesión" y "Regístrate"

### 3. Integración con API de TripleTen

#### Configuración de Backend
- **URL base**: `https://se-register-api.en.tripleten-services.com/v1`
- **Archivo `auth.js`**: Contiene todos los métodos de autenticación en `/utils`

#### Endpoints Implementados

**Registro de Usuario (`/signup`)**
- Método: POST
- Headers: `"Content-Type": "application/json"`
- Body: `{ "email": "user@email.com", "password": "password" }`

**Autorización (`/signin`)**
- Método: POST  
- Headers: `"Content-Type": "application/json"`
- Body: `{ "email": "user@email.com", "password": "password" }`
- Respuesta: Token JWT para autenticación

**Verificación de Token (`/users/me`)**
- Método: GET
- Headers: `"Authorization": "Bearer {token}"`
- Funcionalidad: Verifica validez del token y obtiene email del usuario

### 4. Gestión de Tokens y LocalStorage

#### Almacenamiento Local
- **localStorage**: Implementado para almacenar y acceder al token JWT
- **Persistencia de sesión**: Usuarios no necesitan iniciar sesión en visitas repetidas
- **Verificación automática**: Comprobación de validez del token al cargar la aplicación

#### Manejo de Estados de Autenticación
- **Estado global**: Gestión centralizada del estado de autenticación en App.js
- **Flujo de autenticación**: Login → almacenar token → verificar validez → acceso a la aplicación
- **Logout**: Eliminación del token y redirección a página de login

## Estructura del Proyecto

```
src/
├── components/
│   ├── App/                 # Componente principal con gestión de rutas
│   ├── Header/              # Header con estados auth/no-auth
│   ├── Login/               # Formulario de inicio de sesión
│   ├── Register/            # Formulario de registro
│   ├── ProtectedRoute/      # Wrapper para rutas protegidas
│   ├── InfoTooltip/         # Modal de confirmación
│   └── Main/                # Aplicación principal (protegida)
├── utils/
│   ├── api.js              # API principal de la aplicación
│   └── auth.js             # Métodos de autenticación
└── contexts/
    └── CurrentUserContext.js # Contexto global de usuario
```

## Tecnologías Utilizadas

- **React 19**: Framework principal
- **React Router DOM**: Navegación y rutas protegidas
- **Vite**: Herramienta de build y desarrollo
- **Context API**: Gestión de estado global
- **localStorage**: Persistencia de tokens
- **Fetch API**: Comunicación con backend
- **BEM**: Metodología CSS

## Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Tiggreee/web_project_around_react.git
   cd web_project_around_react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Acceder a la aplicación**
   - URL: `http://localhost:3000`
   - Sin autenticación: Redirige automáticamente a `/signin`
   - Con autenticación: Acceso completo a la aplicación

## Flujo de Usuario

1. **Usuario nuevo**: Accede a `/signup` → Se registra → Redirigido a `/signin`
2. **Login**: Ingresa credenciales en `/signin` → Recibe token → Accede a `/`
3. **Usuario autenticado**: Token válido → Acceso directo a aplicación principal
4. **Logout**: Elimina token → Redirigido a `/signin`

## Notas de Seguridad

- Tokens JWT almacenados en localStorage
- Verificación automática de validez de tokens
- Rutas protegidas mediante componente ProtectedRoute
- Headers de autorización en todas las solicitudes API protegidas
