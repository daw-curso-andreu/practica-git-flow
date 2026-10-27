# Curso «JavaScript en el DOM»

Pequeña web con ejemplos de JavaScript aplicado a la interacción con elementos HTML
(modificar contenido, estilos CSS y atributos HTML).

Proyecto desarrollado siguiendo la metodología **Git Flow**:

| Rama | Uso |
|------|-----|
| `main` | Código en producción. Cada versión publicada lleva una etiqueta (`v1.0`, `v1.0.1`…). |
| `develop` | Rama de integración de las nuevas funcionalidades. |
| `feature/*` | Una rama por funcionalidad; nacen de `develop` y vuelven a ella. |
| `release/*` | Preparación de una versión; de `develop` a `main` + `develop`. |
| `hotfix/*` | Correcciones urgentes sobre `main`; vuelven a `main` y `develop`. |
| `gh-pages` | Documentación del proceso publicada con GitHub Pages. |

## Equipo

- **Usuario 1**: estructura inicial del proyecto y pruebas (hotfix).
- **Usuario 2**: secciones «Modificar contenido HTML» y «Modificar atributos HTML».
- **Usuario 3**: sección «Modificar estilos CSS» y release `v1.0`.
