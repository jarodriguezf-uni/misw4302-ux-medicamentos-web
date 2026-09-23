# Medicamentos EPS — aplicación web

Prototipo web responsivo desarrollado para la materia **MISW4302 — UX:
mejoramiento de la experiencia de usuario**. La interfaz reproduce la serie
visual refinada de los mockups y conserva el flujo de navegación definido en
el prototipo conectado.

No usa backend, autenticación real, APIs ni persistencia. Las respuestas y los
datos se simulan con estado local.

## Requisitos

- Node.js 22.12 o superior. Entrega verificada con Node.js 26.7.0.
- npm 11 o superior. Entrega verificada con npm 11.19.0.
- Google Chrome como navegador objetivo.

## Instalar y ejecutar

Instalación reproducible con el lockfile:

```bash
npm ci
npm run dev
```

Vite mostrará la URL local, normalmente `http://localhost:5173`.
`npm install` también es válido para actualizar el lockfile de forma
intencional, pero no es necesario para ejecutar esta entrega.

## Validación y build de producción

```bash
npm run lint
npm run build
npm run preview
```

El build queda en `dist/`. `npm run preview` sirve esa salida para comprobar el
mismo contenido que se desplegaría en un hosting estático con fallback hacia
`index.html` para las rutas del cliente.

## Rutas disponibles

| Ruta | Pantalla |
| --- | --- |
| `/` | Inicio público |
| `/login` | Iniciar sesión |
| `/signup` | Crear cuenta |
| `/signup/verify-email` | Verificar correo |
| `/signup/consent` | Consentimiento de datos de salud |
| `/signup/eps` | Vincular EPS |
| `/signup/eps/status` | Estado de afiliación |
| `/desktop` | Escritorio |
| `/medicines` | Buscar medicamento |
| `/medicines/detail` | Detalle y equivalentes |
| `/medicines/prescription` | Datos de la fórmula |
| `/medicines/treatment` | Resumen del tratamiento |
| `/locations` | Puntos en convenio |
| `/locations/detail` | Ficha y disponibilidad del punto |
| `/account` | Cuenta y privacidad |

Los recorridos usan datos simulados de EPS, medicamentos, fórmulas,
tratamientos y puntos de entrega. Los formularios aplican validación nativa y
los loaders, filtros, selección y mensajes dinámicos funcionan con estado local.

## Navegación y accesibilidad

- La apariencia corresponde a la serie visual refinada del diseño; los destinos
  corresponden al prototipo conectado existente.
- Las acciones sin destino definido permanecen inertes y no muestran mensajes
  ni pantallas inventadas.
- Cada ruta actualiza el título, anuncia el cambio y mueve el foco al encabezado
  principal. También hay foco visible, enlace para saltar al contenido y soporte
  para `prefers-reduced-motion`.

## Responsive

| Ancho | Adaptación |
| --- | --- |
| 1200 px o más | Composición desktop y gutters de 64 px |
| 768–1199 px | Gutters de 32 px y grids adaptados |
| Menos de 768 px | Gutters de 20 px, contenido apilado y navegación desplazable |
| Menos de 480 px | Gutters de 16 px y controles táctiles de al menos 44 px |

La referencia pixel perfect es Chrome a 1440 × 900. También se verificaron
1024, 768, 390 y 320 px sin overflow horizontal.

## Assets y fuentes

Inter y Plus Jakarta Sans se almacenan en `src/assets/fonts` y se incluyen en
el bundle; sus licencias OFL están en la misma carpeta. No se cargan fuentes ni
assets desde servicios externos durante la ejecución.

## Limitaciones

- No hay autenticación, backend, API, mapa real ni persistencia entre recargas.
- Los datos de cuenta, medicamentos, disponibilidad y afiliación son simulados.
- La aplicación está optimizada y verificada principalmente en Chrome.
- El material de referencia de diseño se conserva externamente y no forma parte
  del build de producción.
