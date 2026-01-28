# 📧 Guía Completa: Conectar Brevo a Tu Tema Shopify

## ¿Por qué Brevo?
- **Costo**: €20/mes (plan inicial) vs Klaviyo €20+ sin límite
- **Contactos**: Hasta 300,000 contactos
- **Email + SMS**: Incluido en el mismo plan
- **API gratuita**: Acceso completo
- **Fácil de usar**: Interfaz intuitiva
- **Soporte en español**: Atención al cliente en tu idioma

---

## 📋 PASO 1: Crear Cuenta en Brevo

### 1.1 Registrarse
1. Ve a: https://www.brevo.com/es/
2. Haz clic en **"Prueba gratis"**
3. Usa tu email de trabajo (ej: hola@isslam.com)
4. Crea una contraseña fuerte
5. Selecciona: "Comercio electrónico (E-commerce)" como tipo de cuenta
6. Completa con info de tu tienda ISSLAM

### 1.2 Verificar Email
- Recibirás un email de confirmación
- Haz clic en el enlace para activar tu cuenta
- ¡Listo! Ahora accede a tu dashboard

---

## 🔑 PASO 2: Obtener API Key

### 2.1 Ir a Settings
1. Dashboard de Brevo → **Settings** (engranaje arriba a la derecha)
2. En el menú izquierdo → **INTEGRATIONS** → **API & Webhooks**
3. Tab **"v3 Keys"**

### 2.2 Crear API Key
1. Haz clic en **"Create API key"** (botón azul)
2. Dale un nombre: `ISSLAM_Website`
3. Dale permiso de lectura y escritura
4. Haz clic en **"Create"**
5. **COPIA LA KEY** - la necesitarás (empieza con `xkeysib_...`)

⚠️ **IMPORTANTE**: Guarda esta key en un lugar seguro. NO la compartas ni la hagas pública.

---

## 📇 PASO 3: Crear una Lista de Contactos

### 3.1 Ir a Contactos
1. Dashboard Brevo → **Contacts** (en el menú principal)
2. Haz clic en **"Lists"**

### 3.2 Crear Nueva Lista
1. Haz clic en **"Create a list"** (botón azul)
2. **Nombre de lista**: `ISSLAM_Newsletter`
3. **Descripción**: "Suscriptores del newsletter de ISSLAM"
4. **Folder**: Crea una nueva carpeta si quieres (ej: "ISSLAM")
5. Haz clic en **"Create"**

### 3.3 Copiar ID de Lista
1. Ve a **Contacts** → **Lists**
2. Encuentra tu lista creada
3. **Copia el número de ID** (lo necesitarás en Shopify)
   - Ejemplo: `50` o `123`

---

## 🎨 PASO 4: Configurar Atributos Personalizados

### 4.1 Crear Atributos
Los atributos almacenan info extra de tus clientes (ej: categoría de interés).

1. **Contacts** → **All Contacts**
2. Botón **"Attributes"** (arriba a la derecha)
3. Haz clic en **"Create an attribute"**

### 4.2 Atributos Recomendados Para ISSLAM
Crea estos 4 atributos:

```
1. CATEGORY
   - Type: Dropdown list
   - Values: Música, Deportes, Anime, Juegos, Películas-Series, Promos
   
2. SIGNUP_SOURCE
   - Type: Text
   - Values: website, email, social, manual
   
3. SIGNUP_DATE
   - Type: Date
   - Format: YYYY-MM-DD
   
4. STORE
   - Type: Text
   - Default: "ISSLAM"
```

---

## 🛍️ PASO 5: Configurar en Tu Tema Shopify

### 5.1 Localizar el Archivo
En tu proyecto de VS Code:
```
snippets/newsletter-brevo.liquid  ← Este es el archivo
```

### 5.2 Actualizar Configuración
Abre el archivo y busca la sección JavaScript (línea ~50):

**REEMPLAZA ESTO:**
```javascript
  const BREVO_API_KEY = '{{ section.settings.brevo_api_key }}';
  const BREVO_LIST_ID = {{ section.settings.list_id }};
```

**CON TUS DATOS:**
```javascript
  const BREVO_API_KEY = 'xkeysib_TUESTAAQUITUKEY123456789';
  const BREVO_LIST_ID = 50;  // O el ID que obtuviste en Brevo
```

⚠️ **SEGURIDAD**: Hay 2 formas:
- **Opción A** (Menos segura): Hardcodear la key en el código
- **Opción B** (Mejor): Usar variables de tema (recomendado)

---

## 🔐 PASO 5B: Forma Segura con Variables de Tema

### Mejor Práctica: Usar Theme Settings
1. En VS Code, abre: `config/settings_schema.json`
2. Agrega esta sección al final (antes del cierre):

```json
{
  "name": "Newsletter",
  "settings": [
    {
      "type": "text",
      "id": "brevo_api_key",
      "label": "Brevo API Key",
      "placeholder": "xkeysib_..."
    },
    {
      "type": "number",
      "id": "brevo_list_id",
      "label": "Brevo List ID"
    }
  ]
}
```

3. Luego, en Shopify Admin:
   - Ve a **Online Store** → **Customize theme**
   - Busca "Newsletter" en los settings
   - Pega tu API Key y List ID
   - Guarda cambios

✅ **Ventajas**: 
- La key se almacena en Shopify (más segura)
- Puedes cambiarla sin editar código
- No queda expuesta en GitHub

---

## 📧 PASO 6: Agregar Newsletter a Tus Secciones

### 6.1 Incluir en collection-musica.liquid
Abre: `sections/collection-musica.liquid`

Busca el final de la sección (antes del `{% schema %}`)

Agrega:
```liquid
{% include 'newsletter-brevo' %}
```

### 6.2 Repetir para Otras Secciones
Agrega la misma línea al final de:
- `sections/collection-deportes.liquid`
- `sections/collection-anime.liquid`
- `sections/collection-juegos.liquid`
- `sections/collection-peliculas-series.liquid`
- `sections/collection-promos.liquid`

---

## 🧪 PASO 7: Probar la Integración

### 7.1 Desarrollar Localmente
```bash
cd c:\Users\HP\Documents\Mi_tema
shopify theme dev --store tu-tienda.myshopify.com
```

### 7.2 Probar en Navegador
1. Abre la URL que proporciona `shopify theme dev`
2. Ve a una colección (ej: /collections/musica)
3. Desplázate al newsletter
4. Intenta suscribir con un email de prueba

### 7.3 Verificar en Brevo
1. Vuelve a Brevo → **Contacts** → **All Contacts**
2. Deberías ver tu email de prueba
3. Verifica que tenga los atributos correctos (CATEGORY, etc.)

### 7.4 Depuración (Si no funciona)
Abre Console del navegador (F12):
```javascript
// Ejecuta esto en la consola:
console.log('API Key:', '{{ section.settings.brevo_api_key }}');
console.log('List ID:', {{ section.settings.list_id }});
```

---

## 🚀 PASO 8: Automatizar Emails (Campaña Bienvenida)

### 8.1 Crear Automation
1. **Automations** en menú principal
2. **Create automation**
3. **Trigger**: "Contact added to list"
4. Selecciona tu lista: `ISSLAM_Newsletter`

### 8.2 Crear Email de Bienvenida
1. Haz clic en el "+" para agregar acción
2. **Send an email**
3. **Nuevo email**

Template de ejemplo:
```
Asunto: ¡Bienvenido a ISSLAM! 🎮🎵🎬

Cuerpo:
Hola [FIRSTNAME],

¡Gracias por suscribirte al newsletter de ISSLAM!

Recibirás:
✅ Últimas colecciones
✅ Ofertas exclusivas
✅ Noticias del universo pop

Tu categoría de interés: [CATEGORY]

¡Que disfrutes el viaje!

La familia ISSLAM 🔥
```

---

## 💰 PASO 9: Presupuesto y Plan

### Brevo Planes
| Plan | Precio | Contactos | Emails/mes |
|------|--------|-----------|-----------|
| Gratis | €0 | Hasta 300 | 300 |
| Starter | €20 | Hasta 10K | Ilimitados |
| Premium | €49 | Hasta 50K | Ilimitados |
| Enterprise | Personalizado | Ilimitados | Ilimitados |

### Recomendación Para ISSLAM
**Comienza con**: Plan Gratis o Starter (€20)
- Suficiente para primeros 1000-2000 suscriptores
- Escala después si lo necesitas

---

## 🔄 PASO 10: Sincronizar Contactos Existentes

### 10.1 Exportar de Shopify
1. Shopify Admin → **Customers**
2. Selecciona todos
3. **Export** (formato CSV)

### 10.2 Importar a Brevo
1. Brevo → **Contacts** → **All Contacts**
2. Botón **"Import contacts"**
3. Sube tu CSV
4. Mapea columnas correctamente
5. Revisa e importa

---

## 🐛 Solucionar Problemas

### Problema: "Email ya existe"
**Solución**: El contacto ya está en la lista. Verifica en Brevo.

### Problema: "API Key inválida"
**Solución**: 
- Copia la key correctamente (sin espacios)
- Verifica que esté activa en Brevo Settings

### Problema: "List ID no encontrado"
**Solución**: 
- Asegúrate que copiaste el número correcto
- Verifica que la lista exista en Brevo

### Problema: No recibes emails de confirmación
**Solución**:
- Revisa tu carpeta de SPAM
- Añade `noreply@brevo.com` a contactos

---

## ✅ Checklist Final

- [ ] Cuenta Brevo creada
- [ ] Email verificado
- [ ] API Key obtenida y guardada
- [ ] Lista `ISSLAM_Newsletter` creada
- [ ] ID de lista copiado
- [ ] Atributos personalizados creados
- [ ] `newsletter-brevo.liquid` actualizado con tus datos
- [ ] Snippet incluido en todas las secciones
- [ ] Probado en local con `shopify theme dev`
- [ ] Email de prueba enviado
- [ ] Contacto visible en Brevo
- [ ] Automation de bienvenida configurada
- [ ] Listo para producción ✨

---

## 🎓 Próximos Pasos

1. **Crear campañas**: Brevo → **Campaigns** → **Create campaign**
2. **Analytics**: Monitorea aperturas, clics, desuscripciones
3. **Segmentación**: Crea audiencias por CATEGORY (Música, Deportes, etc.)
4. **SMS**: Agrega marketing por SMS (incluido en plan)
5. **Chat**: Considera agregar live chat (Brevo tiene integración)

---

## 📞 Soporte Brevo

- **Centro de ayuda**: https://help.brevo.com/es
- **Chat en vivo**: Disponible en Dashboard
- **Email**: support-es@brevo.com
- **Comunidad**: https://community.brevo.com

---

## 🔗 Recursos Útiles

- [Documentación API Brevo v3](https://developers.brevo.com/docs/getting-started)
- [Shopify + Brevo Integration](https://apps.shopify.com/brevo)
- [GDPR & Privacidad](https://www.brevo.com/legal/privacy-policy/)

---

**¿Necesitas ayuda?** Abre esta guía en VS Code y sigue paso a paso. Si algo no funciona, comparte el error específico. 🚀
