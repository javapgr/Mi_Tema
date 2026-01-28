# ⚡ QUICK START: Newsletter en 10 Minutos

## Para los Apurados 🔥

Si solo tienes 10 minutos, sigue ESTO:

---

## ✅ Paso 1: Crear Cuenta Brevo (2 min)
1. Ve a: **https://www.brevo.com/es/**
2. Haz clic en **"Prueba gratis"**
3. Usa tu email: `hola@isslam.com`
4. Selecciona "Comercio electrónico"
5. ✅ Activa tu email (revisa spam)

---

## ✅ Paso 2: Obtener API Key (3 min)
1. En Brevo: **Settings** → **INTEGRATIONS** → **API & Webhooks**
2. Tab **"v3 Keys"**
3. Haz clic en **"Create API key"**
4. Dale nombre: `ISSLAM_Website`
5. Copia la key (empieza con `xkeysib_...`)

### Guárdalo en un lugar seguro

---

## ✅ Paso 3: Crear Lista (2 min)
1. **Contacts** → **Lists**
2. Haz clic en **"Create a list"**
3. Nombre: `ISSLAM_Newsletter`
4. Descripción: "Suscriptores del newsletter"
5. Presiona **"Create"**
6. 📌 **Copia el número de ID** (ej: 50)

---

## ✅ Paso 4: Configurar en Shopify (3 min)

### Opción Fácil (Recomendada): App de Shopify
1. Shopify Admin → **Apps and sales channels**
2. Busca **"Brevo"**
3. Instala la app oficial
4. Conecta tu cuenta Brevo
5. Elige la lista `ISSLAM_Newsletter`
6. ✅ ¡Listo! Formulario agregado automáticamente

---

## ✅ O Personalizado: Integración Manual

Si quieres más control sobre el diseño:

### 4a. Editar Archivo en VS Code
1. Abre: `snippets/newsletter-brevo.liquid`
2. Busca línea ~52 donde dice:
```javascript
  const BREVO_API_KEY = '{{ section.settings.brevo_api_key }}';
  const BREVO_LIST_ID = {{ section.settings.list_id }};
```
3. Reemplaza con TUS datos:
```javascript
  const BREVO_API_KEY = 'xkeysib_TU_API_KEY_AQUI';
  const BREVO_LIST_ID = 50;  // Tu ID de lista
```

### 4b. Agregar a Tus Secciones
Abre cada uno de estos archivos y al final (antes de `{% schema %}`), agrega:
```liquid
{% include 'newsletter-brevo' %}
```

**Archivos a editar**:
- `sections/collection-musica.liquid`
- `sections/collection-deportes.liquid`
- `sections/collection-anime.liquid`
- `sections/collection-juegos.liquid`
- `sections/collection-peliculas-series.liquid`
- `sections/collection-promos.liquid`

---

## ✅ Paso 5: Probar (Opcional)
```bash
cd c:\Users\HP\Documents\Mi_tema
shopify theme dev --store tu-tienda.myshopify.com
```

Luego ve a `/collections/musica` y prueba suscribirte.

---

## 🎯 ¿Listo?

- ✅ API Key: **Obtenida** ✓
- ✅ Lista creada: **ISSLAM_Newsletter** ✓
- ✅ Formulario integrado: **Tu tienda** ✓
- 🚀 **¡Tu newsletter está corriendo!**

---

## 📚 Documentación Completa

Cuando tengas tiempo (no ahora), lee:
- [BREVO_SETUP_GUIA.md](./BREVO_SETUP_GUIA.md) ← Guía detallada paso a paso
- [KLAVIYO_VS_BREVO.md](./KLAVIYO_VS_BREVO.md) ← Comparativa y estrategia futura

---

## 🐛 Problemas Rápidos

### No recibo emails de prueba
→ Revisa tu carpeta de SPAM

### "Email inválido"
→ Usa un email real (no tutienda@example.com)

### "API Key inválida"
→ Copia sin espacios al inicio/final

### No veo el formulario en mi tienda
→ ¿Hiciste `git push`?
→ ¿Recargaste `shopify theme dev`?

---

## 🚀 Siguientes Pasos (Cuando Tengas Tiempo)

1. Crear email automático de bienvenida
2. Crear campaña semanal
3. Segmentar por categoría
4. Ofrecer descuento (10% en primer compra)

---

**¿Preguntas?** Lee la guía completa o contacta soporte de Brevo.

**¡Éxito!** 🎉
