// Lógica de inicio, validación y navegación entre pantallas

function iniciar() {
    var inputNick = document.getElementById('nickName');
    var name = inputNick ? inputNick.value.trim() : "";
    var r1 = document.getElementById('r1');
    var r2 = document.getElementById('r2');
    var lang = (typeof obtenerIdiomaActual === 'function') ? obtenerIdiomaActual() : 'es';
    var defaultNick = (lang === 'en') ? "Player" : "Jugador";
    
    if (name === "") {
        name = defaultNick;
    }

    sessionStorage.setItem('nick', name);

    if (r2 && r2.checked) {
        window.location.href = 'niveldificil.html';
    } else {
        window.location.href = 'nivelfacil.html';
    }
}

function onLoad() {
    var cajanick = document.getElementById('caja-nick');
    if (cajanick) {
        var guardado = sessionStorage.getItem('nick');
        var lang = (typeof obtenerIdiomaActual === 'function') ? obtenerIdiomaActual() : 'es';
        var defaultNick = (lang === 'en') ? "Player" : "Jugador";
        cajanick.innerText = (guardado && guardado.trim() !== "") ? guardado : defaultNick;
    }
}

// Función para compartir el juego
function compartirJuego() {
    var url = window.location.origin + window.location.pathname;
    var lang = (typeof obtenerIdiomaActual === 'function') ? obtenerIdiomaActual() : 'es';
    var titulo = (lang === 'en') ? 'MemoryCards' : 'MemoryCards';
    var texto = (lang === 'en') 
        ? 'Come play this fun MemoryCards game!' 
        : '¡Ven a jugar este divertido juego de MemoryCards!';
    var copiadoMsg = (lang === 'en') 
        ? 'Game link copied to clipboard!' 
        : '¡Enlace del juego copiado al portapapeles!';
    var promptMsg = (lang === 'en')
        ? 'Copy this link to share:'
        : 'Copia este enlace para compartir:';

    if (navigator.share) {
        navigator.share({
            title: titulo,
            text: texto,
            url: url
        }).catch(function() {});
    } else {
        navigator.clipboard.writeText(url).then(function() {
            alert(copiadoMsg);
        }).catch(function() {
            prompt(promptMsg, url);
        });
    }
}

// Animación de los botones burbuja
function initBubblyButtons() {
    var animateButton = function(e) {
        e.target.classList.remove('animate');
        e.target.classList.add('animate');
        setTimeout(function() {
            e.target.classList.remove('animate');
        }, 700);
    };

    var bubblyButtons = document.getElementsByClassName("bubbly-button");
    for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].removeEventListener('click', animateButton);
        bubblyButtons[i].addEventListener('click', animateButton, false);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initBubblyButtons();
});
