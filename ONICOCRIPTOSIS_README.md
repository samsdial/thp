# Landing Page de Onicocriptosis

## 📋 Descripción

Landing page completa y optimizada para servicios de tratamiento de onicocriptosis (uñas encarnadas) en Bogotá.

## 🔗 Acceso

La landing page está disponible en:

```
http://localhost:5173/onicocriptosis
```

En producción:

```
https://tu-dominio.com/onicocriptosis
```

## 🎨 Estructura de la Landing

### 1. **Header (Navbar)**

- Logo de Therapies
- Teléfono de contacto visible
- Menú de navegación

### 2. **Hero Section** (OnicoHero)

- Titular principal H1: "Onicocriptosis en Bogotá"
- Subtítulo: "Consulta con Especialista"
- 3 beneficios clave destacados:
  - ✓ Diagnóstico Profesional
  - ✓ Tratamiento Comprobado
  - ✓ Primera Consulta Disponible Hoy
- Botón CTA principal que redirige a WhatsApp

### 3. **Beneficios** (OnicoBenefits)

- 4 tarjetas con beneficios principales:
  - Especialistas Certificados
  - Tratamiento Sin Dolor
  - Resultados Rápidos
  - Precios Accesibles

### 4. **Información del Servicio** (OnicoInfo)

Tres secciones informativas:

#### ¿Qué es la Onicocriptosis?

- Definición clara
- Síntomas comunes
- Causas principales

#### Síntomas y Señales de Alerta

- Etapa inicial vs. avanzada
- Proceso de diagnóstico

#### Tratamiento Profesional

- 4 pasos del proceso de tratamiento
- Técnicas avanzadas utilizadas

### 5. **Formulario de Agendamiento** (OnicoForm)

Campos incluidos:

- Nombre completo
- Teléfono / WhatsApp
- Localidad (dropdown con todas las localidades de Bogotá)
- Mejor horario para contacto
- Tipo de problema (uña encarnada, hongos, ambos, otro)

**Funcionalidad:**

- Al enviar el formulario, se abre WhatsApp con un mensaje pre-configurado
- Opcionalmente envía los datos a Google Sheets (usando el mismo endpoint del proyecto)
- Feedback visual al usuario

### 6. **Testimonios y Credibilidad** (OnicoTestimonials)

- 3 testimonios de pacientes (con calificación de 5 estrellas)
- Estadísticas de credibilidad:
  - +10 años de experiencia
  - +5,000 pacientes atendidos
  - 98% tasa de éxito
- Certificaciones y reconocimientos

### 7. **Footer** (FooterSection)

- Información de contacto
- Enlaces a redes sociales
- Mapa del sitio

### 8. **Botón Flotante de WhatsApp** (FloatIcon)

- Acceso directo a WhatsApp desde cualquier parte de la página

## 🎨 Diseño y Estilo

### Colores Principales

- Primary: `#283779` (Azul oscuro)
- Secondary: `#1B71A1` (Azul medio)
- Success: `#30A64A` (Verde)
- WhatsApp: `#25D366` (Verde WhatsApp)

### Características de Diseño

- Diseño responsive (mobile-first)
- Animaciones con AOS (Animate On Scroll)
- Efectos hover en tarjetas y botones
- Gradientes suaves
- Sombras y profundidad
- Tipografía clara y legible

## 📱 Integración con WhatsApp

El número de WhatsApp configurado es: **+57 316 817 9876**

Los botones de WhatsApp envían mensajes pre-configurados:

- **Hero CTA**: Mensaje general de consulta
- **Formulario**: Mensaje con todos los datos del formulario formateados

## 🚀 Para Ejecutar el Proyecto

```bash
# Instalar dependencias (si no lo has hecho)
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Desplegar a Vercel
vercel --prod
```

## 📊 Integración con Google Sheets

El formulario está configurado para enviar datos al mismo Google Apps Script usado en el resto del proyecto:

```
https://script.google.com/macros/s/AKfycbysXkQ86H_i2kOeEmcrtucJ5GmXtxLlsFZ0F977ZidycJVWbygbaQnbepUWISmvr3Rstg/exec
```

## 🔧 Personalización

### Cambiar el número de WhatsApp

Edita el archivo correspondiente y cambia la variable `whatsappNumber`:

- `src/components/OnicoHero.jsx`
- `src/components/OnicoForm.jsx`

### Modificar testimonios

Edita el array `testimonials` en `src/components/OnicoTestimonials.jsx`

### Actualizar estadísticas

Modifica los valores en `src/components/OnicoTestimonials.jsx`

## 📈 SEO y Meta Tags

Para mejorar el SEO de esta página específica, considera:

1. Actualizar el título de la página dinámicamente
2. Agregar meta description específica
3. Incluir schema markup para servicios médicos
4. Optimizar imágenes (cuando se agreguen)

## ✅ Funcionalidades Implementadas

- ✅ Header con logo y teléfono
- ✅ Titular principal H1 optimizado para SEO
- ✅ 3 beneficios clave destacados
- ✅ Botón CTA principal a WhatsApp
- ✅ Información detallada sobre onicocriptosis
- ✅ Explicación de síntomas
- ✅ Descripción del tratamiento
- ✅ Formulario de agendamiento funcional
- ✅ Integración con WhatsApp
- ✅ Testimonios de pacientes
- ✅ Estadísticas de credibilidad
- ✅ Footer con información de contacto
- ✅ Botón flotante de WhatsApp
- ✅ Diseño responsive
- ✅ Animaciones suaves

## 📝 Notas Adicionales

- Todos los componentes usan el mismo sistema de estilos que el resto del proyecto
- La página mantiene la coherencia visual con el sitio principal
- Los componentes son reutilizables y fáciles de mantener
- El código está bien comentado y estructurado

## 🐛 Testing

Para probar la landing:

1. Inicia el servidor de desarrollo: `npm run dev`
2. Navega a: `http://localhost:5173/onicocriptosis`
3. Verifica que todos los botones de WhatsApp funcionen
4. Prueba el formulario de contacto
5. Verifica la responsividad en diferentes dispositivos

## 📞 Soporte

Para cualquier ajuste o personalización adicional de la landing page, contacta al equipo de desarrollo.
