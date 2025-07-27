# Chart-E Website

Sitio web oficial de Chart-E - Solución integral de gestión empresarial con inteligencia artificial.

## 🚀 Descripción

Chart-E es una plataforma innovadora que combina inteligencia artificial con gestión empresarial para optimizar procesos, mejorar la toma de decisiones y acelerar el crecimiento de las organizaciones.

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconografía moderna
- **Radix UI** - Componentes accesibles
- **Prisma** - ORM para base de datos
- **React Hook Form** - Manejo de formularios

## 📦 Instalación

### Prerrequisitos

- Node.js 18.0 o superior
- npm, yarn o pnpm

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/sgjuancarlos1/web_charte.git
   cd web_charte
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Editar `.env.local` con las configuraciones necesarias:
   ```env
   # Base de datos
   DATABASE_URL="your_database_url"
   
   # Email (opcional para formulario de contacto)
   SMTP_HOST="your_smtp_host"
   SMTP_PORT="587"
   SMTP_USER="your_email"
   SMTP_PASS="your_password"
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

5. **Abrir en el navegador**
   
   Visita [http://localhost:3000](http://localhost:3000) para ver el sitio web.

## 🏗️ Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter
- `npm run type-check` - Verifica los tipos de TypeScript

## 📁 Estructura del Proyecto

```
web_charte/
├── app/                    # App Router de Next.js
│   ├── api/               # API Routes
│   │   └── contact/       # Endpoint de contacto
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx          # Página principal
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI reutilizables
│   ├── hero-section.tsx  # Sección hero
│   ├── solution-section.tsx
│   ├── technology-section.tsx
│   ├── results-section.tsx
│   ├── management-section.tsx
│   ├── process-section.tsx
│   ├── contact-section.tsx
│   ├── navigation.tsx    # Navegación
│   └── footer.tsx        # Pie de página
├── lib/                  # Utilidades y configuraciones
├── public/               # Archivos estáticos
│   └── chart-e-logo.png # Logo oficial
├── prisma/               # Esquema de base de datos
└── hooks/                # Custom hooks
```

## 🎨 Características

### Secciones del Sitio Web

1. **Hero Section** - Presentación principal con llamada a la acción
2. **Nuestra Solución** - Descripción de los servicios de Chart-E
3. **Tecnología** - Stack tecnológico y capacidades
4. **Resultados** - Métricas y casos de éxito
5. **Para Gerencias** - Beneficios específicos para directivos
6. **Proceso de Trabajo** - Metodología y flujo de trabajo
7. **Contacto** - Formulario de contacto funcional

### Características Técnicas

- ✅ Diseño responsive y mobile-first
- ✅ Optimización SEO
- ✅ Animaciones suaves con Framer Motion
- ✅ Tema oscuro/claro
- ✅ Formulario de contacto funcional
- ✅ Componentes accesibles
- ✅ Tipado estático con TypeScript
- ✅ Optimización de imágenes
- ✅ Carga rápida y performance optimizada

## 🚀 Despliegue en Vercel

### Método Automático (Recomendado)

1. **Conectar repositorio a Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "New Project"
   - Importa este repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Next.js

2. **Configuración automática**
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Variables de entorno (opcional)**
   - Agrega las variables necesarias en la sección Environment Variables
   - `DATABASE_URL`, `SMTP_HOST`, etc.

4. **Dominio personalizado**
   - En el dashboard de Vercel, ve a Settings > Domains
   - Agrega `chart-e.com` y `www.chart-e.com`
   - Configura los DNS según las instrucciones de Vercel

### Configuración DNS para chart-e.com

Para conectar el dominio personalizado:

1. **Registros DNS necesarios:**
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

2. **Verificación:**
   - Vercel verificará automáticamente la configuración
   - El proceso puede tomar hasta 48 horas

### Método Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Configurar dominio
vercel domains add chart-e.com
```

## 🔧 Configuración Avanzada

### Base de Datos

Si necesitas configurar una base de datos:

```bash
# Generar cliente Prisma
npx prisma generate

# Ejecutar migraciones
npx prisma db push

# Ver base de datos (opcional)
npx prisma studio
```

### Variables de Entorno de Producción

```env
# Vercel automáticamente configura estas variables
VERCEL_URL="your-app.vercel.app"
VERCEL_ENV="production"

# Variables personalizadas
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_SITE_URL="https://chart-e.com"
```

## 📊 Performance

- **Lighthouse Score:** 95+ en todas las métricas
- **Core Web Vitals:** Optimizado
- **Bundle Size:** Minimizado con tree-shaking
- **Images:** Optimizadas con Next.js Image

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es propiedad de Chart-E. Todos los derechos reservados.

## 📞 Contacto

- **Sitio Web:** [chart-e.com](https://chart-e.com)
- **Email:** contacto@chart-e.com
- **Repositorio:** [github.com/sgjuancarlos1/web_charte](https://github.com/sgjuancarlos1/web_charte)

---

**Desarrollado con ❤️ para Chart-E**