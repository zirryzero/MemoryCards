// Lógica del juego - Nivel Difícil (Colores Inglés / Español)

var inicioTiempo = 0;
var timerId = null;
var tiempoTranscurrido = "00:00:00";

var cartasData = [
    { text: 'Yellow', parejaId: 1, color: '#fbc531', textColor: '#2f3640' },
    { text: 'Amarillo', parejaId: 1, color: '#fbc531', textColor: '#2f3640' },
    { text: 'Blue', parejaId: 2, color: '#273c75', textColor: '#ffffff' },
    { text: 'Azul', parejaId: 2, color: '#273c75', textColor: '#ffffff' },
    { text: 'Black', parejaId: 3, color: '#1e272e', textColor: '#ffffff' },
    { text: 'Negro', parejaId: 3, color: '#1e272e', textColor: '#ffffff' },
    { text: 'Pink', parejaId: 4, color: '#e84393', textColor: '#ffffff' },
    { text: 'Rosado', parejaId: 4, color: '#e84393', textColor: '#ffffff' },
    { text: 'Green', parejaId: 5, color: '#44bd32', textColor: '#ffffff' },
    { text: 'Verde', parejaId: 5, color: '#44bd32', textColor: '#ffffff' },
    { text: 'Orange', parejaId: 6, color: '#e67e22', textColor: '#ffffff' },
    { text: 'Naranja', parejaId: 6, color: '#e67e22', textColor: '#ffffff' },
    { text: 'Red', parejaId: 7, color: '#c0392b', textColor: '#ffffff' },
    { text: 'Rojo', parejaId: 7, color: '#c0392b', textColor: '#ffffff' },
    { text: 'Purple', parejaId: 8, color: '#8e44ad', textColor: '#ffffff' },
    { text: 'Morado', parejaId: 8, color: '#8e44ad', textColor: '#ffffff' },
    { text: 'White', parejaId: 9, color: '#f5f6fa', textColor: '#2f3640' },
    { text: 'Blanco', parejaId: 9, color: '#f5f6fa', textColor: '#2f3640' },
    { text: 'Brown', parejaId: 10, color: '#795548', textColor: '#ffffff' },
    { text: 'Marrón', parejaId: 10, color: '#795548', textColor: '#ffffff' }
];

var juegoIniciado = false;
var tableroBloqueado = false;
var primeraCarta = null;
var segundaCarta = null;
var intentos = 0;
var parejasAcertadas = 0;
var totalParejas = 10;

// Cronómetro
function iniciarCronometro() {
    if (timerId !== null) return;
    inicioTiempo = new Date().getTime();
    timerId = setInterval(actualizarCronometro, 1000);
}

function detenerCronometro() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}

function resetearCronometro() {
    detenerCronometro();
    document.getElementById('crono').innerText = "00:00:00";
    tiempoTranscurrido = "00:00:00";
}

function actualizarCronometro() {
    var actual = new Date().getTime();
    var diff = new Date(actual - inicioTiempo);
    var horas = LeadingZero(diff.getUTCHours());
    var minutos = LeadingZero(diff.getUTCMinutes());
    var segundos = LeadingZero(diff.getUTCSeconds());
    tiempoTranscurrido = horas + ":" + minutos + ":" + segundos;
    var el = document.getElementById('crono');
    if (el) el.innerText = tiempoTranscurrido;
}

function LeadingZero(num) {
    return (num < 10) ? "0" + num : num;
}

// Inicialización del Tablero
function renderizarTablero() {
    var contenedor = document.getElementById("tablero-cartas");
    if (!contenedor) return;

    contenedor.innerHTML = "";
    
    // Barajar con Fisher-Yates
    var barajadas = cartasData.slice();
    for (var i = barajadas.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = barajadas[i];
        barajadas[i] = barajadas[j];
        barajadas[j] = temp;
    }

    barajadas.forEach(function(carta, index) {
        var cardEl = document.createElement("div");
        cardEl.className = "carta carta-dificil";
        cardEl.dataset.id = index;
        cardEl.dataset.pareja = carta.parejaId;
        cardEl.dataset.valor = carta.text;

        cardEl.innerHTML = `
            <div class="carta-inner">
                <div class="carta-front">
                    <i class="fas fa-brain"></i>
                </div>
                <div class="carta-back" style="background-color: ${carta.color}; color: ${carta.textColor};">
                    <span class="carta-texto">${carta.text}</span>
                </div>
            </div>
        `;

        cardEl.addEventListener("click", function() {
            seleccionarCarta(cardEl);
        });

        contenedor.appendChild(cardEl);
    });
}

function iniciarJuego() {
    var btnIniciar = document.getElementById("btn-iniciar");
    var juegoEl = document.getElementById("juego");
    if (juegoEl) juegoEl.classList.remove("deshabilitado");

    juegoIniciado = true;
    tableroBloqueado = false;
    iniciarCronometro();

    if (btnIniciar) {
        btnIniciar.classList.add("disabled");
        btnIniciar.disabled = true;
    }
}

function resetearJuego() {
    detenerCronometro();
    resetearCronometro();

    primeraCarta = null;
    segundaCarta = null;
    tableroBloqueado = false;
    juegoIniciado = false;
    intentos = 0;
    parejasAcertadas = 0;

    actualizarEstadisticas();
    renderizarTablero();

    var btnIniciar = document.getElementById("btn-iniciar");
    if (btnIniciar) {
        btnIniciar.classList.remove("disabled");
        btnIniciar.disabled = false;
    }

    iniciarJuego();
}

function actualizarEstadisticas() {
    var intentosEl = document.getElementById("contador-movimientos");
    var parejasEl = document.getElementById("contador-parejas");
    if (intentosEl) intentosEl.innerText = intentos;
    if (parejasEl) parejasEl.innerText = parejasAcertadas + " / " + totalParejas;
}

function seleccionarCarta(cardEl) {
    if (tableroBloqueado) return;
    if (cardEl.classList.contains("volteada") || cardEl.classList.contains("acertada")) return;

    if (!juegoIniciado) {
        iniciarJuego();
    }

    cardEl.classList.add("volteada");

    if (!primeraCarta) {
        primeraCarta = cardEl;
    } else {
        segundaCarta = cardEl;
        intentos++;
        actualizarEstadisticas();
        verificarPareja();
    }
}

function verificarPareja() {
    tableroBloqueado = true;
    var esPareja = primeraCarta.dataset.pareja === segundaCarta.dataset.pareja;

    if (esPareja) {
        setTimeout(function() {
            primeraCarta.classList.add("acertada");
            segundaCarta.classList.add("acertada");
            parejasAcertadas++;
            actualizarEstadisticas();
            resetearSeleccion();

            if (parejasAcertadas === totalParejas) {
                finalizarPartida();
            }
        }, 350);
    } else {
        setTimeout(function() {
            primeraCarta.classList.add("error");
            segundaCarta.classList.add("error");
        }, 200);

        setTimeout(function() {
            primeraCarta.classList.remove("volteada", "error");
            segundaCarta.classList.remove("volteada", "error");
            resetearSeleccion();
        }, 900);
    }
}

function resetearSeleccion() {
    primeraCarta = null;
    segundaCarta = null;
    tableroBloqueado = false;
}

function finalizarPartida() {
    detenerCronometro();

    var nick = sessionStorage.getItem('nick') || "Jugador";
    var victoriaNick = document.getElementById("victoria-nick");
    var victoriaTiempo = document.getElementById("victoria-tiempo");
    var victoriaIntentos = document.getElementById("victoria-intentos");
    var modal = document.getElementById("modal-victoria");

    if (victoriaNick) victoriaNick.innerText = nick;
    if (victoriaTiempo) victoriaTiempo.innerText = tiempoTranscurrido;
    if (victoriaIntentos) victoriaIntentos.innerText = intentos;

    setTimeout(function() {
        if (modal) modal.classList.remove("hide");
    }, 500);
}

function cerrarModal() {
    var modal = document.getElementById("modal-victoria");
    if (modal) modal.classList.add("hide");
}

document.addEventListener("DOMContentLoaded", function() {
    renderizarTablero();
});
