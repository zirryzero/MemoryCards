// Lógica de inicio, validación y navegación entre pantallas

function iniciar() {
    var inputNick = document.getElementById('nickName');
    var name = inputNick ? inputNick.value.trim() : "";
    var r1 = document.getElementById('r1');
    var r2 = document.getElementById('r2');
    
    if (name === "") {
        name = "Jugador";
    }

    sessionStorage.setItem('nick', name);

    if (r2 && r2.checked) {
        window.location.href = 'niveldificil.html';
    } else {
        // Por defecto o si r1 está marcado, va a nivel fácil
        window.location.href = 'nivelfacil.html';
    }
}

function onLoad() {
    var cajanick = document.getElementById('caja-nick');
    if (cajanick) {
        var guardado = sessionStorage.getItem('nick');
        cajanick.innerText = (guardado && guardado.trim() !== "") ? guardado : "Jugador";
    }
}

// Función para compartir el juego
function compartirJuego() {
    var url = window.location.origin + window.location.pathname;
    if (navigator.share) {
        navigator.share({
            title: 'MemoryCards',
            text: '¡Ven a jugar este divertido juego de MemoryCards!',
            url: url
        }).catch(function() {});
    } else {
        navigator.clipboard.writeText(url).then(function() {
            alert('¡Enlace del juego copiado al portapapeles!');
        }).catch(function() {
            prompt('Copia este enlace para compartir:', url);
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
