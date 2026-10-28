# 🧠 MemoryCards

> Un clásico juego interactivo de memoria y emparejamiento de cartas desarrollado con HTML5, CSS3/SCSS y JavaScript vainilla.

🌐 **Idiomas / Languages:** [Español](README.md) 🇪🇸 | [English](README_EN.md) 🇺🇸 🇬🇧

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 🎮 Descripción

**MemoryCards** es un juego web diseñado para poner a prueba y ejercitar tu memoria y agilidad mental. El objetivo consiste en encontrar todas las parejas de cartas correspondientes en el menor tiempo y con la menor cantidad de movimientos posibles.

Cuenta con un sistema de personalización mediante nombre de usuario (*nickname*), selección de niveles de dificultad y efectos visuales animados para una experiencia atractiva y fluida.

---

## ✨ Características

- 🎯 **Dos niveles de dificultad:**
  - **Nivel Bajo (Fácil):** Cuadrícula reducida, ideal para partidas rápidas y principiantes.
  - **Nivel Alto (Difícil):** Mayor cantidad de cartas para un reto mental más exigente.
- ⏱️ **Cronómetro en vivo y contador de intentos:** Mide tu rendimiento en tiempo real.
- 👤 **Registro de jugador:** Ingreso de NickName personalizado persistido durante la sesión.
- 🎨 **Diseño y animaciones:** Efectos de volteo 3D de tarjetas y estilos interactivos (*bubbly buttons*).
- 📱 **Totalmente responsive:** Adaptable a diferentes resoluciones de pantalla.
- 🚀 **100% Frontend:** Sin dependencias externas pesadas ni configuraciones complejas de backend.

---

## 📁 Estructura del Proyecto

```text
MemoryCards/
├── index.html              # Pantalla principal (menú, selección de nivel y nickname)
├── instrucciones.html      # Pantalla con las reglas del juego
├── nivelfacil.html         # Tablero para el nivel fácil
├── niveldificil.html       # Tablero para el nivel difícil
├── js/
│   ├── iniciar.js          # Control de navegación y validación de entrada
│   ├── main.js             # Lógica del juego para nivel fácil
│   └── mainhard.js         # Lógica del juego para nivel difícil
├── styles/
│   ├── styles.scss         # Código fuente de estilos en Sass
│   ├── styles.css          # Estilos CSS compilados
│   ├── styles.css.map      # Source map para depuración
│   └── img/                # Recursos gráficos e imágenes de cartas
├── .gitignore              # Archivos y carpetas excluidas de Git
├── LICENSE                 # Licencia de código abierto MIT
└── README.md               # Documentación del repositorio
```

---

## 🚀 Cómo ejecutarlo localmente

No requiere instalación de paquetes ni compilación previa para jugar:

### Opción 1: Abrir directamente en el navegador
1. Clona este repositorio:
   ```bash
   git clone https://github.com/zirryzero/MemoryCards.git
   ```
2. Entra en la carpeta del proyecto:
   ```bash
   cd MemoryCards
   ```
3. Abre el archivo `index.html` en tu navegador favorito (doble clic o arrastrándolo a una pestaña).

### Opción 2: Usando un servidor local (Recomendado)
Para una mejor experiencia con recarga automática:
- **Con VS Code:** Instala la extensión **Live Server**, haz clic derecho en `index.html` y selecciona *Open with Live Server*.
- **Con Node.js / npx:**
  ```bash
  npx serve .
  ```
  O con Python:
  ```bash
  python -m http.server 8000
  ```

---

## 🌐 Despliegue en GitHub Pages

Puedes publicar este juego en la web de forma gratuita con GitHub Pages:

1. Ve a tu repositorio en GitHub: `https://github.com/zirryzero/MemoryCards`
2. Dirígete a la pestaña **Settings** (Configuración) > **Pages** (en el menú lateral izquierdo).
3. En la sección **Build and deployment** > **Source**, selecciona **Deploy from a branch**.
4. En **Branch**, elige `main` y la carpeta `/(root)`, luego haz clic en **Save**.
5. ¡Listo! En un par de minutos tu juego estará disponible públicamente en:
   ```
   https://zirryzero.github.io/MemoryCards/
   ```

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica de la aplicación.
- **CSS3 / Sass (SCSS):** Estilos modernos, diseño flexible y animaciones 3D.
- **JavaScript (ES6):** Manipulación dinámica del DOM, gestión del temporizador y lógica de emparejamiento.
- **Font Awesome:** Iconografía para botones e interfaz.
- **Google Fonts:** Tipografía *Staatliches*.

---

## 📄 Licencia

Este proyecto se encuentra bajo la Licencia [MIT](LICENSE). Eres libre de usarlo, modificarlo y distribuirlo.

---

## 👤 Autor

Desarrollado con ❤️ por **[Harold David Perez Ortega](https://github.com/zirryzero)**.
