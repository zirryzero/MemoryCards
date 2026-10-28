// Sistema de Internacionalización (i18n) para MemoryCards

var traducciones = {
    es: {
        // General & Botones
        "btn_compartir": '<i class="fas fa-share-alt"></i> Compartir',
        "btn_seguir": '<i class="fas fa-heart"></i> Seguir',
        "btn_github": '<i class="far fa-star"></i> GitHub',
        "btn_jugar": '<i class="fas fa-play-circle"></i> Jugar',
        "btn_instrucciones": '<i class="fas fa-book-open"></i> Instrucciones',
        "btn_contacto": '<i class="fab fa-github"></i> Contacto',
        "btn_inicio": '<i class="fas fa-home"></i> Inicio',
        "btn_volver_menu": '<i class="fas fa-arrow-left"></i> Volver al Menú',
        "btn_iniciar": '<i class="fas fa-play"></i> Iniciar',
        "btn_reiniciar": '<i class="fas fa-undo-alt"></i> Reiniciar',
        "btn_jugar_nuevo": '<i class="fas fa-redo"></i> Jugar de Nuevo',
        "btn_siguiente_nivel": 'Siguiente Nivel <i class="fas fa-arrow-right"></i>',
        "btn_nivel_facil": '<i class="fas fa-arrow-left"></i> Nivel Fácil',
        "btn_menu_principal": '<i class="fas fa-home"></i> Menú Principal',
        "btn_highscores": '<i class="fas fa-trophy"></i> Récords',
        "btn_cerrar": 'Cerrar',
        "th_pos": "Pos",
        "th_jugador": "Jugador",
        "th_tiempo": "Tiempo",
        "th_intentos": "Intentos",
        "th_fecha": "Fecha",
        "modal_highscores_titulo": "🏆 Tabla de Puntuaciones Altas",

        // Menú Principal
        "nivel_bajo": "Nivel Bajo (Fácil)",
        "nivel_alto": "Nivel Alto (Difícil)",
        "placeholder_nick": "Introduce tu NickName",
        "msg_copiado": "¡Enlace del juego copiado al portapapeles!",
        "msg_compartir_prompt": "Copia este enlace para compartir:",
        "jugador_default": "Jugador",

        // Pantalla de Juego
        "badge_facil": "Nivel Fácil",
        "badge_dificil": "Nivel Difícil",
        "stat_tiempo": '<i class="fas fa-stopwatch"></i> Tiempo',
        "stat_intentos": '<i class="fas fa-shoe-prints"></i> Intentos',
        "stat_parejas": '<i class="fas fa-check-circle"></i> Parejas',

        // Modal de Victoria
        "victoria_titulo_facil": "¡Felicidades, <span id='victoria-nick'>Jugador</span>!",
        "victoria_titulo_dificil": "¡Felicidades, <span id='victoria-nick'>Jugador</span>!",
        "victoria_sub_facil": "Has completado el Nivel Fácil",
        "victoria_sub_dificil": "¡Has conquistado el Nivel Difícil!",
        "victoria_tiempo_label": "Tiempo:",
        "victoria_intentos_label": "Intentos:",

        // Instrucciones
        "instru_titulo": "Instrucciones",
        "instru_p1": '<i class="fas fa-eye"></i> <strong>1.</strong> Al iniciar el juego, pulsa el botón <em>Iniciar</em> para comenzar la partida y el cronómetro.',
        "instru_p2": '<i class="fas fa-hand-pointer"></i> <strong>2.</strong> Haz clic en dos tarjetas para voltearlas y buscar la pareja correcta.',
        "instru_p3": '<i class="fas fa-check-double"></i> <strong>3.</strong> En el nivel fácil busca el cálculo matemático y su resultado. En el nivel difícil busca los colores en inglés y español.',
        "instru_p4": '<i class="fas fa-stopwatch"></i> <strong>4.</strong> ¡Completa todas las parejas en el menor tiempo y con la menor cantidad de intentos posibles!',
        "instru_suerte": "⭐ ¡Mucha suerte y diviértete! ⭐"
    },
    en: {
        // General & Buttons
        "btn_compartir": '<i class="fas fa-share-alt"></i> Share',
        "btn_seguir": '<i class="fas fa-heart"></i> Follow',
        "btn_github": '<i class="far fa-star"></i> GitHub',
        "btn_jugar": '<i class="fas fa-play-circle"></i> Play',
        "btn_instrucciones": '<i class="fas fa-book-open"></i> Instructions',
        "btn_contacto": '<i class="fab fa-github"></i> Contact',
        "btn_inicio": '<i class="fas fa-home"></i> Home',
        "btn_volver_menu": '<i class="fas fa-arrow-left"></i> Back to Menu',
        "btn_iniciar": '<i class="fas fa-play"></i> Start',
        "btn_reiniciar": '<i class="fas fa-undo-alt"></i> Reset',
        "btn_jugar_nuevo": '<i class="fas fa-redo"></i> Play Again',
        "btn_siguiente_nivel": 'Next Level <i class="fas fa-arrow-right"></i>',
        "btn_nivel_facil": '<i class="fas fa-arrow-left"></i> Easy Level',
        "btn_menu_principal": '<i class="fas fa-home"></i> Main Menu',
        "btn_highscores": '<i class="fas fa-trophy"></i> High Scores',
        "btn_cerrar": 'Close',
        "th_pos": "Rank",
        "th_jugador": "Player",
        "th_tiempo": "Time",
        "th_intentos": "Moves",
        "th_fecha": "Date",
        "modal_highscores_titulo": "🏆 High Scores Leaderboard",

        // Main Menu
        "nivel_bajo": "Low Level (Easy)",
        "nivel_alto": "High Level (Hard)",
        "placeholder_nick": "Enter your NickName",
        "msg_copiado": "Game link copied to clipboard!",
        "msg_compartir_prompt": "Copy this link to share:",
        "jugador_default": "Player",

        // Game Screen
        "badge_facil": "Easy Level",
        "badge_dificil": "Hard Level",
        "stat_tiempo": '<i class="fas fa-stopwatch"></i> Time',
        "stat_intentos": '<i class="fas fa-shoe-prints"></i> Moves',
        "stat_parejas": '<i class="fas fa-check-circle"></i> Pairs',

        // Victory Modal
        "victoria_titulo_facil": "Congratulations, <span id='victoria-nick'>Player</span>!",
        "victoria_titulo_dificil": "Congratulations, <span id='victoria-nick'>Player</span>!",
        "victoria_sub_facil": "You completed Easy Level",
        "victoria_sub_dificil": "You conquered Hard Level!",
        "victoria_tiempo_label": "Time:",
        "victoria_intentos_label": "Moves:",

        // Instructions
        "instru_titulo": "Instructions",
        "instru_p1": '<i class="fas fa-eye"></i> <strong>1.</strong> When starting the game, click the <em>Start</em> button to begin the match and the timer.',
        "instru_p2": '<i class="fas fa-hand-pointer"></i> <strong>2.</strong> Click on two cards to flip them and search for matching pairs.',
        "instru_p3": '<i class="fas fa-check-double"></i> <strong>3.</strong> In easy level match math calculations with results. In hard level match colors in English and Spanish.',
        "instru_p4": '<i class="fas fa-stopwatch"></i> <strong>4.</strong> Complete all pairs in the fastest time and with the fewest moves possible!',
        "instru_suerte": "⭐ Good luck and have fun! ⭐"
    }
};

function obtenerIdiomaActual() {
    return localStorage.getItem('memorycards_lang') || 'es';
}

function establecerIdioma(lang) {
    if (lang !== 'es' && lang !== 'en') lang = 'es';
    localStorage.setItem('memorycards_lang', lang);
    aplicarIdioma(lang);
}

function alternarIdioma() {
    var actual = obtenerIdiomaActual();
    var nuevo = (actual === 'es') ? 'en' : 'es';
    establecerIdioma(nuevo);
}

function aplicarIdioma(lang) {
    if (!lang) lang = obtenerIdiomaActual();
    var dict = traducciones[lang] || traducciones.es;

    // Actualizar elementos con data-i18n
    var elementos = document.querySelectorAll('[data-i18n]');
    elementos.forEach(function(el) {
        var clave = el.getAttribute('data-i18n');
        if (dict[clave] !== undefined) {
            el.innerHTML = dict[clave];
        }
    });

    // Actualizar placeholders
    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(function(el) {
        var clave = el.getAttribute('data-i18n-placeholder');
        if (dict[clave] !== undefined) {
            el.setAttribute('placeholder', dict[clave]);
        }
    });

    // Actualizar botón selector de idioma si existe
    var btnLang = document.getElementById('btn-lang-toggle');
    if (btnLang) {
        btnLang.innerHTML = (lang === 'es') ? '🌐 EN' : '🌐 ES';
        btnLang.title = (lang === 'es') ? 'Switch to English' : 'Cambiar a Español';
    }

    // Actualizar el atributo lang en <html>
    document.documentElement.lang = lang;
}

// Inicializar al cargar el DOM
document.addEventListener('DOMContentLoaded', function() {
    aplicarIdioma(obtenerIdiomaActual());
});

