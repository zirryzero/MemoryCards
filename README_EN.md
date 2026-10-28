# 🧠 MemoryCards

> A classic interactive memory and card-matching web game built with HTML5, CSS3/SCSS, and vanilla JavaScript.

🌐 **Languages / Idiomas:** [English](README_EN.md) 🇺🇸 🇬🇧 | [Español](README.md) 🇪🇸

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 🎮 Overview

**MemoryCards** is an interactive web game designed to challenge and sharpen your memory and mental speed. The goal is to match all card pairs in the shortest time and with the fewest moves possible.

It includes a multilingual interface (English & Spanish), player nickname personalization, two difficulty levels, and 3D card-flip animations for a fun and engaging user experience.

---

## ✨ Features

- 🌐 **Multilingual Support (i18n):** Toggle instantly between **English** 🇬🇧 and **Spanish** 🇪🇸 at any time with persistent language selection.
- 🎯 **Two Difficulty Modes:**
  - **Easy Level:** Math multiplication pairs (e.g., `3 x 3` with `9`), ideal for quick games and beginners.
  - **Hard Level:** 20 cards matching color names in English and Spanish, offering an educational and challenging mental workout.
- ⏱️ **Live Stopwatch & Move Counter:** Track your moves and elapsed time in real time.
- 👤 **Player Nickname:** Personalized profile persisted throughout the session.
- 🎨 **3D Card Flip Animations & Responsive UI:** Modern glassmorphism look, smooth 3D flip card animations, and bubbly buttons.
- 📱 **100% Mobile-Friendly & Responsive:** Seamless experience on smartphones, tablets, laptops, and desktops.
- 🚀 **Zero Dependencies:** Pure vanilla web development (no heavyweight frameworks or complex build steps required).

---

## 📁 Project Structure

```text
MemoryCards/
├── index.html              # Main menu (level selection, nickname input, language toggle)
├── instrucciones.html      # Instructions and rules page
├── nivelfacil.html         # Easy level board (multiplication cards)
├── niveldificil.html       # Hard level board (colors matching)
├── js/
│   ├── i18n.js             # Internationalization system (English / Spanish translations)
│   ├── iniciar.js          # Navigation, sharing, and entry validation logic
│   ├── main.js             # Game mechanics for easy level
│   └── mainhard.js         # Game mechanics for hard level
├── styles/
│   ├── styles.scss         # Sass stylesheet source
│   ├── styles.css          # Core compiled CSS stylesheet
│   └── img/                # Graphics, backgrounds, and assets
├── .gitignore              # Files ignored by Git
├── LICENSE                 # Open-source MIT License
├── README.md               # Documentation in Spanish
└── README_EN.md            # Documentation in English
```

---

## 🚀 Running Locally

No package installation or build steps are required:

### Option 1: Direct in Browser
1. Clone the repository:
   ```bash
   git clone https://github.com/zirryzero/MemoryCards.git
   ```
2. Navigate into the folder:
   ```bash
   cd MemoryCards
   ```
3. Open `index.html` in your favorite web browser (double-click or drag into a tab).

### Option 2: Using a Local Server (Recommended)
- **With VS Code:** Install the **Live Server** extension, right-click on `index.html`, and select *Open with Live Server*.
- **With Node.js / npx:**
  ```bash
  npx serve .
  ```
- **With Python:**
  ```bash
  python -m http.server 8000
  ```

---

## 🌐 Deployment on GitHub Pages

You can publish this game for free via GitHub Pages in less than a minute:

1. Go to your repository on GitHub: `https://github.com/zirryzero/MemoryCards`
2. Navigate to **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. In **Branch**, select `main` and root directory `/(root)`, then click **Save**.
5. Your game will be live in a couple of minutes at:
   ```
   https://zirryzero.github.io/MemoryCards/
   ```

---

## 🛠️ Built With

- **HTML5:** Semantic application structure and accessibility tags.
- **CSS3 / Sass (SCSS):** Modern styles, flexbox/grid layouts, and 3D card transforms.
- **JavaScript (ES6):** DOM manipulation, timer management, matching algorithms, and i18n.
- **Font Awesome:** UI and navigation icons.
- **Google Fonts:** *Staatliches* and *Pacifico* typefaces.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute it.

---

## 👤 Author

Developed with ❤️ by **[Harold David Perez Ortega](https://github.com/zirryzero)**.

