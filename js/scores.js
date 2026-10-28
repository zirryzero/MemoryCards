// Gestor de Puntuaciones Altas (High Scores)

var SCORES_STORAGE_KEY = 'memorycards_highscores';

// Puntuaciones base por defecto ("quemadas")
var defaultScores = {
    facil: [
        { nick: "Alex", tiempo: "00:00:22", segundos: 22, intentos: 7, fecha: "2026-10-25" },
        { nick: "Sofia", tiempo: "00:00:28", segundos: 28, intentos: 9, fecha: "2026-10-26" },
        { nick: "Harold", tiempo: "00:00:35", segundos: 35, intentos: 11, fecha: "2026-10-27" },
        { nick: "Luna", tiempo: "00:00:42", segundos: 42, intentos: 13, fecha: "2026-10-27" },
        { nick: "Mateo", tiempo: "00:00:50", segundos: 50, intentos: 15, fecha: "2026-10-27" }
    ],
    dificil: [
        { nick: "Harold", tiempo: "00:01:05", segundos: 65, intentos: 18, fecha: "2026-10-26" },
        { nick: "Valeria", tiempo: "00:01:14", segundos: 74, intentos: 22, fecha: "2026-10-27" },
        { nick: "Carlos", tiempo: "00:01:25", segundos: 85, intentos: 25, fecha: "2026-10-27" },
        { nick: "Elena", tiempo: "00:01:38", segundos: 98, intentos: 29, fecha: "2026-10-27" },
        { nick: "David", tiempo: "00:01:50", segundos: 110, intentos: 33, fecha: "2026-10-27" }
    ]
};

// Cargar puntuaciones (primero intenta localStorage con fallback a JSON / default)
function obtenerPuntuaciones() {
    var guardadas = localStorage.getItem(SCORES_STORAGE_KEY);
    if (guardadas) {
        try {
            return JSON.parse(guardadas);
        } catch (e) {
            console.error("Error al parsear puntuaciones locales", e);
        }
    }
    // Inicializar con las puntuaciones por defecto y guardar
    guardarPuntuaciones(defaultScores);
    return defaultScores;
}

function guardarPuntuaciones(scores) {
    try {
        localStorage.setItem(SCORES_STORAGE_KEY, JSON.stringify(scores));
    } catch (e) {
        console.error("Error al guardar puntuaciones en localStorage", e);
    }
}

// Convertir string "HH:MM:SS" a segundos totales
function tiempoASegundos(tiempoStr) {
    if (!tiempoStr) return 999999;
    var partes = tiempoStr.split(':').map(Number);
    if (partes.length === 3) {
        return (partes[0] * 3600) + (partes[1] * 60) + partes[2];
    }
    return 999999;
}

// Registrar una nueva puntuación y reordenar
function registrarPuntuacion(nivel, nick, tiempoStr, intentos) {
    var scores = obtenerPuntuaciones();
    if (!scores[nivel]) {
        scores[nivel] = [];
    }

    var segs = tiempoASegundos(tiempoStr);
    var hoy = new Date().toISOString().split('T')[0];

    var nuevaPuntuacion = {
        nick: nick || "Jugador",
        tiempo: tiempoStr,
        segundos: segs,
        intentos: intentos,
        fecha: hoy
    };

    scores[nivel].push(nuevaPuntuacion);

    // Ordenar: primero menor tiempo (segundos), luego menos intentos
    scores[nivel].sort(function(a, b) {
        if (a.segundos !== b.segundos) {
            return a.segundos - b.segundos;
        }
        return a.intentos - b.intentos;
    });

    // Mantener sólo el top 8
    scores[nivel] = scores[nivel].slice(0, 8);

    guardarPuntuaciones(scores);
    return scores[nivel];
}

// Renderizar la tabla de puntuaciones en HTML
function renderizarTablaPuntuaciones(nivelSeleccionado) {
    nivelSeleccionado = nivelSeleccionado || 'facil';
    var scores = obtenerPuntuaciones();
    var lista = scores[nivelSeleccionado] || [];
    var tablaBody = document.getElementById('tabla-scores-body');
    if (!tablaBody) return;

    tablaBody.innerHTML = "";

    if (lista.length === 0) {
        var lang = (typeof obtenerIdiomaActual === 'function') ? obtenerIdiomaActual() : 'es';
        var vacioTxt = (lang === 'en') ? 'No records yet.' : 'Aún no hay puntuaciones registradas.';
        tablaBody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 20px;">${vacioTxt}</td></tr>`;
        return;
    }

    lista.forEach(function(item, idx) {
        var fila = document.createElement('tr');
        var medalla = "";
        if (idx === 0) medalla = "🥇";
        else if (idx === 1) medalla = "🥈";
        else if (idx === 2) medalla = "🥉";
        else medalla = (idx + 1).toString();

        fila.innerHTML = `
            <td class="posicion-col">${medalla}</td>
            <td class="nick-col"><strong>${item.nick}</strong></td>
            <td><i class="fas fa-stopwatch"></i> ${item.tiempo}</td>
            <td>${item.intentos}</td>
            <td class="fecha-col">${item.fecha}</td>
        `;
        tablaBody.appendChild(fila);
    });
}

// Cambiar pestaña de nivel en la tabla de high scores
function cambiarPestanaPuntuacion(nivel) {
    var btnFacil = document.getElementById('tab-score-facil');
    var btnDificil = document.getElementById('tab-score-dificil');

    if (btnFacil && btnDificil) {
        if (nivel === 'facil') {
            btnFacil.classList.add('activa');
            btnDificil.classList.remove('activa');
        } else {
            btnDificil.classList.add('activa');
            btnFacil.classList.remove('activa');
        }
    }

    renderizarTablaPuntuaciones(nivel);
}

// Abrir y cerrar modal de High Scores
function abrirModalHighScores() {
    var modal = document.getElementById('modal-highscores');
    if (modal) {
        cambiarPestanaPuntuacion('facil');
        modal.classList.remove('hide');
    }
}

function cerrarModalHighScores() {
    var modal = document.getElementById('modal-highscores');
    if (modal) {
        modal.classList.add('hide');
    }
}

// Cargar puntuaciones remotas o locales iniciales si el archivo data/scores.json está disponible
function sincronizarScoresConJSON() {
    fetch('data/scores.json')
        .then(function(res) {
            if (res.ok) return res.json();
            throw new Error("No se pudo cargar scores.json");
        })
        .then(function(data) {
            if (!localStorage.getItem(SCORES_STORAGE_KEY)) {
                guardarPuntuaciones(data);
            }
        })
        .catch(function(err) {
            // Usa defaultScores sin problemas
            if (!localStorage.getItem(SCORES_STORAGE_KEY)) {
                guardarPuntuaciones(defaultScores);
            }
        });
}

document.addEventListener('DOMContentLoaded', function() {
    sincronizarScoresConJSON();
});
