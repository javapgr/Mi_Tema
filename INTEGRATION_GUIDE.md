# GUÍA DE INTEGRACIÓN: VS Code → GitHub → Shopify CLI

## 📋 Estado Actual del Proyecto

Tu proyecto **ISSLAM Theme** ya está estructurado para ser versionado en GitHub y sincronizado con Shopify CLI. 

### Estructura Actual:
```
Mi_tema/
├── .gitignore           ✅ Configurado
├── README.md            ✅ Documentado
├── main.js
├── assets/              (CSS y JS del tema)
├── config/              (settings_schema.json)
├── layout/              (theme.liquid - layout principal)
├── locales/             (idiomas - es.default.json)
├── sections/            (componentes reutilizables)
├── snippets/            (componentes pequeños)
└── templates/           (plantillas de páginas)
```

---

## 🔗 CONEXIÓN: VS CODE → GITHUB → SHOPIFY

### Opción 1: Flujo Completo (Recomendado)

```
VS CODE
   ↓ (git add/commit)
GITHUB (repositorio remoto)
   ↓ (pull cambios)
VS CODE
   ↓ (shopify theme dev)
SHOPIFY CLI
   ↓ (sincronización automática)
TIENDA SHOPIFY
```

### Opción 2: Directo a Shopify (Sin GitHub temporalmente)

```
VS CODE
   ↓ (shopify theme dev)
SHOPIFY CLI
   ↓ (sincronización automática)
TIENDA SHOPIFY
```

---

## 🚀 PASOS PARA CONECTAR

### Paso 1: Inicializar Git (si no está hecho)
```powershell
cd "c:\Users\HP\Documents\Mi_tema"
git init
git config user.email "tu@email.com"
git config user.name "Tu Nombre"
```

### Paso 2: Conectar a GitHub (Crear repositorio remoto)

1. Ve a https://github.com/new
2. Crea un repositorio llamado "isslam-theme"
3. NO inicialices con README (ya tienes uno)
4. Copia la URL HTTPS o SSH

En tu terminal:
```powershell
# Si usas HTTPS
git remote add origin https://github.com/TuUsuario/isslam-theme.git

# O si usas SSH
git remote add origin git@github.com:TuUsuario/isslam-theme.git

# Verifica la conexión
git remote -v
```

### Paso 3: Primer Commit y Push

```powershell
# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "Inicial: Tema ISSLAM con nuevas secciones personalizadas"

# Establecer rama principal
git branch -M main

# Hacer push a GitHub
git push -u origin main
```

### Paso 4: Conectar con Shopify CLI

```powershell
# Login en Shopify
shopify login --store tu-tienda.myshopify.com

# Ver temas disponibles
shopify theme list

# Conectar a tu tema de desarrollo
shopify theme dev --store tu-tienda.myshopify.com

# O sincronizar cambios locales con tu tienda
shopify theme push --theme "ID_DEL_TEMA" --store tu-tienda.myshopify.com
```

---

## 📦 NUEVAS SECCIONES CREADAS

### 1. **Secciones Personalizadas por Categoría**
- ✅ `collection-musica.liquid` - Colección de Música
- ✅ `collection-deportes.liquid` - Colección de Deportes
- ✅ `collection-anime.liquid` - Colección de Anime
- ✅ `collection-juegos.liquid` - Colección de Videojuegos
- ✅ `collection-peliculas-series.liquid` - Películas y Series
- ✅ `collection-promos.liquid` - Promos con contador regresivo

### 2. **Sección de Cinta Publicitaria Animada**
- ✅ `marquee-banner.liquid` - Banner tipo marquee animado

### Características de cada sección:
- ✨ **Headers personalizados** con badges y colores únicos
- 🎨 **Subcategorías visuales** (ej: Fútbol, Básquet, Tennis para deportes)
- 📊 **Carrito inteligente** con precios y ofertas
- 🎯 **CTAs personalizadas** (Call-to-Action)
- 📱 **Responsive Design** (adaptado a móviles)
- 🎬 **Animaciones suaves** (hover, transiciones, etc.)

### Configuración de Marquee Banner:
```json
{
  "text": "Tu texto a mostrar",
  "icon": "🔥 Tu emoji",
  "duration": "20 segundos de animación",
  "background_color": "Color inicio",
  "background_color_end": "Color fin (gradiente)",
  "text_color": "Color del texto",
  "accent_color": "Color de acento"
}
```

---

## 📝 TEMPLATES ACTUALIZADOS

Todos los templates de colecciones han sido actualizados para incluir:

### Collection.musica.json
```
marquee (banner animado)
  ↓
carousel (carrusel de imágenes)
  ↓
hero-banner (banner grande)
  ↓
collection-musica (sección personalizada con grid de productos)
```

### Colecciones con templates personalizados:
- ✅ collection.musica.json
- ✅ collection.anime.json
- ✅ collection.deportes.json
- ✅ collection.juegos.json
- ✅ collection.peliculas-series.json
- ✅ collection.promos.json
- ✅ collection.json (genérica)

---

## 🎨 COLORES Y TEMAS POR CATEGORÍA

| Categoría | Color Principal | Color Secundario | Badge |
|-----------|-----------------|-----------------|-------|
| 🎵 Música | Verde (#0D503C) | Verde claro (#10B981) | 🎵 |
| ⚽ Deportes | Naranja (#FF6B35) | Oro (#FFD700) | ⚽ |
| 🎌 Anime | Púrpura (#6F2FE0) | Rosa (#FFB6D9) | 🎌 |
| 🎮 Juegos | Cian (#00EEFF) | Negro (#1A1A2E) | 🎮 |
| 🎬 Películas | Oro (#FFD700) | Negro (#1a1a1a) | 🎬 |
| 🔥 Promos | Rojo (#FF0000) | Negro (#1a1a1a) | 🔥 |

---

## 🔄 FLUJO DE TRABAJO RECOMENDADO

### Día a Día:

```powershell
# 1. Llegar y verificar cambios
git status

# 2. Hacer cambios en VS Code
# (Editar archivos .liquid, .css, .json)

# 3. Sincronizar localmente
git add .
git commit -m "Descripción clara del cambio"

# 4. Subir a GitHub
git push

# 5. Sincronizar con Shopify (automático con shopify theme dev)
shopify theme dev

# O si usas push manual:
shopify theme push
```

### Ramas para Nuevas Features (Opcional):

```powershell
# Crear rama para nueva feature
git checkout -b feature/nueva-seccion

# Hacer cambios...
git add .
git commit -m "feat: Nueva sección de testimonios"

# Subir rama
git push -u origin feature/nueva-seccion

# En GitHub: crear Pull Request
# Revisar cambios
# Mergear a main
# Eliminar rama

git checkout main
git pull
git branch -d feature/nueva-seccion
```

---

## 🐛 TROUBLESHOOTING

### Error: "git: 'remote' is not a git command"
→ Ejecuta: `git init` primero

### Error: "fatal: 'origin' does not appear to be a 'git' repository"
→ Ejecuta: `git remote add origin <URL>`

### Error: "could not read Username"
→ Usa SSH keys o proporciona token de GitHub

### Shopify CLI no reconoce cambios
→ Reinicia: `shopify theme dev --reset`

---

## 📊 ESTADÍSTICAS DEL PROYECTO

- **Secciones totales**: 14+
- **Colecciones personalizadas**: 6
- **Líneas de código Liquid**: ~3000+
- **Líneas de CSS personalizado**: ~2000+
- **Líneas de JavaScript**: ~500+
- **Temas de colores**: 6 paletas únicas

---

## 📚 RECURSOS ÚTILES

- [Documentación Shopify CLI](https://shopify.dev/docs/themes/tools/cli)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com)
- [Shopify Liquid Reference](https://shopify.dev/docs/api/liquid)
- [Shopify Theme Development](https://shopify.dev/docs/themes)

---

## ✅ PRÓXIMOS PASOS

1. **Git & GitHub**: 
   - [ ] Inicializar repositorio local
   - [ ] Crear repo en GitHub
   - [ ] Hacer push inicial

2. **Shopify CLI**:
   - [ ] Instalar/actualizar Shopify CLI
   - [ ] Login en tu tienda
   - [ ] Conectar tema

3. **Testing**:
   - [ ] Probar en desarrollo con `shopify theme dev`
   - [ ] Verificar renders en desktop y móvil
   - [ ] Probar todas las secciones

4. **Deploy**:
   - [ ] Hacer push final a GitHub
   - [ ] Sincronizar con Shopify
   - [ ] Publicar tema en tu tienda

---

**¿Necesitas ayuda con algún paso específico? Avísame cuál es tu siguiente paso.**
