# Consultor Edgar Moya Web

Plataforma web profesional para servicios de consultoría jurídica premium.

## Descripción

Sitio web corporativo del Abogado Edgar J. Moya Millán, despacho jurídico premium en Caracas, Venezuela. Presencia digital moderna y funcional con 39 años de trayectoria en Derecho Energético, Marítimo, Corporativo y Litigio de Alta Jerarquía.

## Características

- Diseño responsive y moderno (dark luxury theme)
- SEO optimizado (Open Graph, Twitter Cards, Schema.org)
- Animaciones suaves con Framer Motion
- Botón flotante de WhatsApp
- Formulario de contacto con validación
- Accesibilidad (ARIA, skip-to-content, focus visible)
- Compatibilidad con `prefers-reduced-motion`

## Tecnologías

- React 19
- Vite 6
- TypeScript 5.8
- Tailwind CSS v4
- Lucide React (iconos)
- Framer Motion (animaciones)

## Instalación

### Prerrequisitos

- Node.js 18.0 o superior
- npm

### Pasos

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abrir http://localhost:3000 en el navegador.

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo (Vite) |
| `npm run build` | Build de producción |
| `npm run preview` | Previsualizar build de producción |
| `npm run lint` | Verificar tipos TypeScript |

## Estructura del Proyecto

```
├── public/                 # Archivos estáticos (imágenes, favicon, sitemap)
│   ├── portrait.jpg        # Retrato profesional
│   ├── hero-bg.jpg         # Fondo del hero
│   ├── map.jpg             # Mapa de ubicación
│   ├── favicon.svg         # Favicon SVG
│   ├── robots.txt          # Directivas para crawlers
│   └── sitemap.xml         # Mapa del sitio
├── src/
│   ├── components/         # Componentes React
│   │   ├── Header.tsx      # Navegación sticky con menú móvil
│   │   ├── Hero.tsx        # Sección principal con retrato
│   │   ├── About.tsx       # Perfil profesional y estadísticas
│   │   ├── Services.tsx    # 14 áreas de práctica jurídica
│   │   ├── Pilares.tsx     # 5 pilares de valores
│   │   ├── Process.tsx     # Proceso de trabajo en 4 pasos
│   │   ├── ContactForm.tsx # Formulario y canales de contacto
│   │   ├── MapSection.tsx  # Ubicación del despacho
│   │   ├── Footer.tsx      # Pie de página
│   │   └── WhatsAppButton.tsx # Botón flotante de WhatsApp
│   ├── App.tsx             # Componente raíz
│   ├── main.tsx            # Punto de entrada
│   ├── data.ts             # Datos de servicios, pilares y proceso
│   ├── types.ts            # Definiciones TypeScript
│   └── index.css           # Estilos globales y tema
├── index.html              # HTML principal con SEO y Schema.org
├── vite.config.ts          # Configuración de Vite
├── tsconfig.json           # Configuración TypeScript
└── package.json            # Dependencias y scripts
```

## Licencia

© 2026 Edgar J. Moya Millán. Todos los derechos reservados.
