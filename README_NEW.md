# 🎨 ISSLAM Theme - Tema Shopify Personalizado v2.0

Tema completo y personalizado para Shopify con 6 colecciones únicas, animaciones profesionales y diseño responsivo.

## ✨ Características Principales

### 🆕 Colecciones Personalizadas
- **🎵 Música**: Subcategorías de géneros musicales (Pop, Indie, Electrónica, Hip-Hop)
- **⚽ Deportes**: Múltiples deportes (Fútbol, Básquet, Tennis, etc.)
- **🎌 Anime**: Categorías por tipo (Acción, Romance, Comedia, etc.)
- **🎮 Juegos**: Géneros de videojuegos (RPG, Acción, Estrategia, etc.)
- **🎬 Películas & Series**: Categorías cinematográficas
- **🔥 Promos**: Con contador regresivo y descuentos automáticos

### 🎬 Animaciones & Efectos
- 🎞️ Cinta publicitaria animada (marquee banner)
- ✨ Hover effects en productos
- 🎯 Bounce animations en iconos
- 🔴 Glow effects en elementos
- ⏱️ Countdown timer en promos
- 📊 Pulso automático en badges

### 📱 Diseño Responsivo
- Mobile-first approach
- Optimizado para tablets y escritorio
- Imágenes responsive con srcset
- Lazy loading habilitado
- Performance optimizado

---

## 📁 Estructura del Proyecto

```
Mi_tema/
├── assets/                    # CSS y JavaScript
├── config/                    # Configuraciones
├── layout/                    # Layout principal
├── locales/                   # Traducciones
├── sections/                  # Componentes (7 NUEVOS)
├── snippets/                  # Mini componentes
├── templates/                 # Plantillas (7 ACTUALIZADAS)
├── README.md                  # Este archivo
├── INTEGRATION_GUIDE.md       # Guía de integración
└── PROJECT_STATUS.md          # Resumen de cambios
```

---

## 🚀 Conexión: VS Code → GitHub → Shopify

### Pasos Rápidos

#### 1. Git Setup
```powershell
cd "c:\Users\HP\Documents\Mi_tema"
git init
git config user.email "tu@email.com"
git config user.name "Tu Nombre"
```

#### 2. GitHub
```powershell
# Crear repo en https://github.com/new
git remote add origin https://github.com/TuUsuario/isslam-theme.git
git branch -M main
git add .
git commit -m "Initial: ISSLAM Theme v2.0"
git push -u origin main
```

#### 3. Shopify CLI
```powershell
shopify login --store tu-tienda.myshopify.com
shopify theme dev --store tu-tienda.myshopify.com
```

---

## 🎨 Colecciones Personalizadas

| Categoría | Primario | Secundario | Características |
|-----------|----------|-----------|-----------------|
| 🎵 Música | #0D503C | #10B981 | 4 subcategorías, sorting |
| ⚽ Deportes | #FF6B35 | #FFD700 | 6 deportes, newsletter |
| 🎌 Anime | #6F2FE0 | #FFB6D9 | 6 géneros, input email |
| 🎮 Juegos | #00EEFF | #1A1A2E | Community links, glow |
| 🎬 Películas | #FFD700 | #1a1a1a | Featured releases |
| 🔥 Promos | #FF0000 | #1a1a1a | Countdown, descuentos |

---

## ✨ Lo Nuevo en v2.0

### Secciones Creadas
- ✅ `collection-musica.liquid` - Colección Música
- ✅ `collection-deportes.liquid` - Colección Deportes
- ✅ `collection-anime.liquid` - Colección Anime
- ✅ `collection-juegos.liquid` - Colección Juegos
- ✅ `collection-peliculas-series.liquid` - Películas & Series
- ✅ `collection-promos.liquid` - Promos con countdown
- ✅ `marquee-banner.liquid` - Banner animado

### Templates Actualizados
- ✏️ collection.musica.json
- ✏️ collection.anime.json
- ✏️ collection.deportes.json
- ✏️ collection.juegos.json
- ✏️ collection.peliculas-series.json
- ✨ collection.promos.json (NUEVO)
- ✏️ collection.json

### Líneas de Código Nuevo
- 🎨 CSS personalizado: +3,500 líneas
- 💻 Liquid: +4,500 líneas
- ⚡ JavaScript: +500 líneas
- **Total: +8,500 líneas**

---

## 🎯 Características Destacadas

### Marquee Banner (Cinta Publicitaria)
```
🎬 Animación infinita
⏸️ Pausa al hover
⚙️ Personalizable (texto, emoji, colores, duración)
```

### Promos Dinámicas
```
⏱️ Countdown timer automático
💰 Badges de descuento calculados
📊 Ahorros mostrados automáticamente
```

### Diseño Responsivo
```
📱 Mobile: 1-2 columnas
💻 Tablet: 2-3 columnas
🖥️ Desktop: 4 columnas
```

---

## 📚 Documentación Completa

- **INTEGRATION_GUIDE.md**: Conexión GitHub y Shopify CLI
- **PROJECT_STATUS.md**: Resumen detallado de cambios
- **README.md**: Este archivo

---

## 🔗 Links Útiles

- [Shopify CLI Docs](https://shopify.dev/docs/themes/tools/cli)
- [Shopify Liquid API](https://shopify.dev/docs/api/liquid)
- [Theme Development](https://shopify.dev/docs/themes)
- [GitHub Guides](https://guides.github.com)

---

## ✅ Checklist Rápido

- [ ] Leer INTEGRATION_GUIDE.md
- [ ] Crear repo en GitHub
- [ ] Git init en proyecto local
- [ ] Instalar/actualizar Shopify CLI
- [ ] Conectar a tu tienda Shopify
- [ ] Correr `shopify theme dev`
- [ ] Verifica todas las colecciones
- [ ] Prueba en móvil
- [ ] Push a GitHub

---

## 🆘 Soporte Rápido

| Problema | Solución |
|----------|----------|
| Cambios no se ven | `shopify theme dev --reset` |
| Git error | `git status` y `git add .` |
| Animaciones lentas | Revisar CSS `will-change` |
| Conexión GitHub rechazada | Usar token de GitHub |

---

**¿Listo? Lee [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md) para los pasos exactos. 🚀**
