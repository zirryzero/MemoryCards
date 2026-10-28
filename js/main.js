// Lógica del juego - Nivel Fácil (Multiplicaciones)

var inicioTiempo = 0;
var timerId = null;
var tiempoTranscurrido = "00:00:00";

var cartasData = [
    { text: '2 x 2', parejaId: 1 },
    { text: '4', parejaId: 1 },
    { text: '3 x 3', parejaId: 2 },
    { text: '9', parejaId: 2 },
    { text: '4 x 4', parejaId: 3 },
    { text: '16', parejaId: 3 },
    { text: '5 x 5', parejaId: 4 },
    { text: '25', parejaId: 4 },
    { text: '6 x 6', parejaId: 5 },
    { text: '36', parejaId: 5 },
    { text: '7 x 7', parejaId: 6 },
    { text: '49', parejaId: 6 } // Corregido: 7x7 es 49
];

var juegoIniciado = false;
var tableroBloqueado = false;
var primeraCarta = null;
var segundaCarta = null;
var intentos = 0;
var parejasAcertadas = 0;
var totalParejas = 6;

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
    
    // Barajar cartas con el algoritmo Fisher-Yates
    var barajadas = cartasData.slice();
    for (var i = barajadas.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = barajadas[i];
        barajadas[i] = barajadas[j];
        barajadas[j] = temp;
    }

    barajadas.forEach(function(carta, index) {
        var cardEl = document.createElement("div");
        cardEl.className = "carta";
        cardEl.dataset.id = index;
        cardEl.dataset.pareja = carta.parejaId;
        cardEl.dataset.valor = carta.text;

        cardEl.innerHTML = `
            <div class="carta-inner">
                <div class="carta-front">
                    <i class="fas fa-question"></i>
                </div>
                <div class="carta-back">
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

    // Auto-iniciar para agilizar la jugabilidad
    iniciarJuego();
}

function actualizarEstadisticas() {
    var intentosEl = document.getElementById("contador-movimientos");
    var parejasEl = document.getElementById("contador-parejas");
    if (intentosEl) intentosEl.innerText = intentos;
    if (parejasEl) parejasEl.innerText = parejasAcertadas + " / " + totalParejas;
}

function seleccionarCarta(cardEl) {
    // Si el tablero está bloqueado, ya está volteada o emparejada, no hacer nada
    if (tableroBloqueado) return;
    if (cardEl.classList.contains("volteada") || cardEl.classList.contains("acertada")) return;

    // Si aún no se dio a iniciar, iniciar automáticamente al primer clic
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
