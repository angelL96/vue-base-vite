# Vue 3 Base Project

A production-ready Vue 3 base template built with modern tools and best practices. This project serves as a solid foundation for building scalable Vue applications.

## ✨ Features

- **Vue 3** - Latest version with Composition API and `<script setup>` syntax
- **TypeScript** - Full TypeScript support with type safety and better DX
- **Vite** - Fast build tool and development server
- **PrimeVue** - Comprehensive UI component library and design system
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Pinia** - Modern state management for Vue
- **Vue Router** - Official routing solution with pages-based structure
- **Axios** - HTTP client for API requests
- **File-based Routing** - Automatic route generation from pages directory
- **Docker Support** - Ready for containerized deployment
- **Modern Development** - ESLint, hot reload, and optimized builds

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Yarn or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd vue-base-vite

# Install dependencies
yarn install
# or
npm install

# Start development server
yarn dev
# or
npm run dev
```

## 📁 Project Structure

```
src/
├── components/          # Reusable Vue components
├── composables/         # Vue composition functions
├── layouts/            # Layout components
│   └── default.vue     # Default application layout
├── pages/              # File-based routing pages
├── router/             # Router configuration
│   └── index.ts        # Main router setup
├── stores/             # Pinia store modules
│   └── index.ts        # Store configuration
├── styles/             # Global styles and CSS
├── utils/              # Utility functions
│   └── axios.js        # Axios configuration
├── App.vue             # Root component
└── main.ts             # Application entry point
```

## 🛠 Technologies Used

### Core Framework
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Strongly typed programming language that builds on JavaScript
- **Vite** - Next generation frontend tooling

### UI & Styling
- **PrimeVue** - Rich set of open source UI components
- **Tailwind CSS** - Utility-first CSS framework for custom designs

### State Management
- **Pinia** - Intuitive, type safe, light and flexible Store for Vue

### Routing
- **Vue Router 4** - File-based routing system
- Routes are automatically generated from the `pages/` directory

### HTTP Client
- **Axios** - Promise-based HTTP client
- Pre-configured in `src/utils/axios.js`

### Deployment
- **Docker** - Containerization with nginx
- **Docker Compose** - Multi-container deployment

## 📄 Pages-Based Routing

This project uses a file-based routing system where:
- Pages are created in the `src/pages/` directory
- Routes are automatically generated based on file structure
- Nested routes are supported through folder organization

Example:
```
pages/
├── index.vue           # → /
├── about.vue           # → /about
├── users/
│   ├── index.vue       # → /users
│   └── [id].vue        # → /users/:id
└── dashboard/
    └── settings.vue    # → /dashboard/settings
```

## 🏪 State Management with Pinia

Stores are organized in the `src/stores/` directory:
- Each store module handles specific application state
- Supports composition API pattern
- Type-safe and DevTools integration

## 🌐 HTTP Requests with Axios

Axios is pre-configured with:
- Base URL configuration
- Request/response interceptors
- Error handling
- Authentication token management

## 🎨 UI Components & Styling

### PrimeVue Design System
This project uses PrimeVue as the primary UI component library:
- **50+ Components** - DataTable, Calendar, Charts, Forms, and more
- **Built-in Themes** - Multiple pre-designed themes available
- **Accessibility** - WCAG compliant components
- **TypeScript Support** - Full TypeScript definitions included
- **Customizable** - Easy theming and styling options

### Tailwind CSS Integration
Tailwind CSS provides utility-first styling:
- **Rapid Development** - Build designs quickly with utility classes
- **Responsive Design** - Mobile-first responsive utilities
- **Custom Configuration** - Tailored to work with PrimeVue components
- **Consistent Spacing** - Standardized spacing and sizing system
- **Dark Mode Support** - Built-in dark mode utilities

### Best Practices
- Use PrimeVue components for complex UI elements (tables, forms, dialogs)
- Use Tailwind utilities for layout, spacing, and custom styling
- Combine both for maximum flexibility and consistency

## 🐳 Docker Deployment

The project includes Docker configuration for production deployment:

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build Docker image manually
docker build -t vue-base-app .
docker run -p 80:80 vue-base-app
```

## 📦 Available Scripts

```bash
# Development
yarn dev              # Start development server
yarn build            # Build for production
yarn preview          # Preview production build locally

# Docker
docker-compose up     # Run with Docker Compose
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=My Vue App
```

### Axios Configuration
Modify `src/utils/axios.js` to configure API endpoints and interceptors.

### Router Configuration
Customize routing behavior in `src/router/index.ts`.

### TypeScript Configuration
The project includes comprehensive TypeScript support:
- **Type Safety** - Catch errors at compile time
- **Enhanced IDE Support** - Better autocompletion and refactoring
- **Multiple Config Files** - Separate configs for app, node, and build tools
- **Auto-imports** - Automatic type definitions for components and composables

## 🎯 Use as Base Template

This project is designed to be a starting point for production applications:

1. **Clone the repository**
2. **Update project details** (package.json, README)
3. **Configure environment variables**
4. **Add your components and pages**
5. **Customize styling and layout**
6. **Deploy using Docker or your preferred method**

## 📚 Learn More

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [PrimeVue Documentation](https://primevue.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Axios Documentation](https://axios-http.com/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
