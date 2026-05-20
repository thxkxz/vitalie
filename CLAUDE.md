# Vitalie - Tienda Web de Salud y Belleza Natural

## Idioma de comunicacion

- TODA la comunicacion conmigo es en espanol.
- Los comentarios del codigo: en espanol.
- Los nombres de variables y funciones: en ingles (convencion tecnica universal).
- Los mensajes de commit de git: en espanol, modo imperativo. Ejemplos: "agrega boton de WhatsApp", "corrige espaciado del header", "actualiza precios de productos".

## Contexto del proyecto

Vitalie es una marca colombiana de productos de salud y belleza natural. La duena actualmente vende solo por WhatsApp y queremos que la web sea su catalogo profesional online. El canal de cierre de ventas sigue siendo WhatsApp - la web NO procesa pagos, solo muestra el catalogo y redirige.

Objetivo de la web: Proyectar profesionalismo, transmitir confianza en productos naturales, y facilitar que los visitantes contacten por WhatsApp para comprar.

## Stack tecnico

- HTML5 semantico (header, main, section, article, footer, etc.)
- CSS3 puro (sin frameworks como Bootstrap, Tailwind, Bulma, etc.)
- JavaScript vanilla (sin librerias ni React/Vue/Angular)
- Sin backend - es una landing estatica que se desplegara en Netlify
- Mobile-first: la mayoria de visitas seran desde celular, asi que disena primero para pantallas pequenas y luego escala a desktop.

## Estructura de carpetas

vitalie/
- index.html
- CLAUDE.md
- README.md
- .gitignore
- docs/
- src/css/estilos.css
- src/js/main.js
- src/img/productos/
- src/img/general/

## Paleta de colores oficial

Definir SIEMPRE como variables CSS en :root. Nunca usar hex codes hardcodeados dentro de las reglas.

- --verde-bosque: #2D5F3F  (color principal)
- --verde-salvia: #87A878  (color secundario, hover)
- --dorado: #C9A961        (acentos, botones de accion)
- --crema: #F5F1E8         (fondo calido)
- --blanco-hueso: #FAF8F3  (fondo claro general)
- --verde-oscuro: #1A3A28  (texto principal)
- --gris-suave: #6B7268    (texto secundario)

## Tipografia

- Titulos: serif elegante. Usar "Playfair Display" desde Google Fonts.
- Cuerpo: sans-serif limpia. Usar "Inter" desde Google Fonts.
- Cargar las fuentes desde Google Fonts en el head del HTML.

## Convenciones de codigo

- Indentacion: 2 espacios (nunca tabs).
- Comillas en HTML: dobles.
- Comillas en JS: simples.
- Nombres de archivos: kebab-case (ejemplo: tarjeta-producto.html).
- Clases CSS e IDs: kebab-case (ejemplo: tarjeta-producto).
- Variables JavaScript: camelCase (ejemplo: listaProductos).
- Cada archivo debe terminar con una linea en blanco.

## Integracion con WhatsApp

- Pais: Colombia (codigo +57).
- Numero actual: PLACEHOLDER +57 300 000 0000 (se actualizara despues).
- Cada producto debe tener un boton "Comprar por WhatsApp" que abra el link wa.me con texto pre-llenado del tipo: "Hola Vitalie, me interesa el producto [NOMBRE]".
- El texto del mensaje debe estar URL-encodeado correctamente.

## Lo que NO debes hacer (importante)

- NO uses frameworks CSS (Bootstrap, Tailwind, Bulma).
- NO uses librerias JS (jQuery, React, Vue).
- NO agregues dependencias de npm sin preguntarme primero.
- NO uses imagenes con copyright o de stock sin avisarme.
- NO toques archivos en .git/ ni en node_modules/.
- NO inventes productos o informacion de Vitalie - si necesitas un dato, preguntame.

## Flujo de trabajo

- Antes de modificar varios archivos a la vez, explicame que vas a hacer.
- Para cambios grandes (mas de 50 lineas), crea una rama git nueva.
- Cada commit debe ser pequeno y enfocado en una sola cosa.
- Si dudas entre dos opciones, preguntame en vez de elegir tu.

## Estado actual del proyecto

- Fase 1: Landing page principal (EN CONSTRUCCION).
- Fase 2: Catalogo completo de productos (pendiente).
- Fase 3: Despliegue en Netlify (pendiente).
- Fase 4: Estrategia de Instagram y Facebook (pendiente).
- Fase 5: Automatizacion de WhatsApp (modulos avanzados, lejos).

## Sobre mi (el desarrollador)

- Soy un estudiante aprendiendo programacion con apoyo de Claude Code.
- Nivel: principiante-intermedio en terminal, aprendiendo en codigo.
- Idioma nativo: espanol.
- Quiero entender que haces - no solo que funcione. Explicame las decisiones tecnicas que tomes (en breve, sin abrumar).
