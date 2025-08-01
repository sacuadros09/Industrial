# Portafolio de Diseñador Industrial

Un portafolio moderno y responsive construido con Next.js 15, TypeScript y Tailwind CSS.

## 🚀 Tecnologías Utilizadas

- **Next.js 15** - Framework de React para producción
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS para estilos
- **Radix UI** - Componentes accesibles y sin estilo
- **Lucide React** - Iconos modernos
- **Embla Carousel** - Carouseles interactivos y táctiles

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/sacuadros09/Industrial.git
cd industrial-designer-portfolio
```

2. Instala las dependencias:

```bash
pnpm install
# o
npm install
# o
yarn install
```

3. Ejecuta el proyecto en modo desarrollo:

```bash
pnpm dev
# o
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 🛠️ Scripts Disponibles

- `pnpm dev` - Ejecuta el servidor de desarrollo
- `pnpm build` - Construye la aplicación para producción
- `pnpm start` - Ejecuta la aplicación en modo producción
- `pnpm lint` - Ejecuta el linter

## 🌐 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio con [Vercel](https://vercel.com)
2. Las variables de entorno se configuran automáticamente
3. Cada push a la rama principal despliega automáticamente

### Netlify

1. Conecta tu repositorio con [Netlify](https://netlify.com)
2. Configura el comando de build: `pnpm build`
3. Configura el directorio de salida: `out` (si usas export estático)

### Otros Proveedores

El proyecto puede desplegarse en cualquier plataforma que soporte Node.js:

- Railway
- Render
- DigitalOcean App Platform
- AWS Amplify

## 📂 Estructura del Proyecto

```
├── app/                    # App router de Next.js 15
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de UI (Radix + Tailwind)
│   └── theme-provider.tsx # Proveedor de tema
├── hooks/                # Custom hooks
├── lib/                  # Utilidades y configuraciones
├── public/               # Archivos estáticos
└── styles/               # Archivos de estilos adicionales
```

## ✨ Características

- ✅ Diseño responsive
- ✅ Modo oscuro/claro
- ✅ Componentes accesibles
- ✅ Optimizado para SEO
- ✅ Performance optimizada
- ✅ TypeScript para mejor desarrollo
- ✅ Carouseles interactivos para proyectos e imágenes

## 🎨 Personalización

1. **Colores**: Modifica `tailwind.config.ts` para cambiar la paleta de colores
2. **Tipografía**: Ajusta las fuentes en `app/layout.tsx`
3. **Componentes**: Personaliza los componentes en `components/ui/`

## 📸 Optimización de Imágenes

- Utiliza el componente `Image` de Next.js para optimización automática
- Formatos recomendados: WebP, AVIF
- Tamaños múltiples para diferentes dispositivos

## 🔧 Mantenimiento

- Mantén las dependencias actualizadas: `pnpm update`
- Ejecuta auditorías de seguridad: `pnpm audit`
- Revisa el lighthouse score regularmente

## 📧 Contacto

Para cualquier consulta sobre este proyecto, no dudes en contactarme.

---

Desarrollado con ❤️ usando Next.js y Tailwind CSS
