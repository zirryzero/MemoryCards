var inicio = 0;
var timeout = 0;

function empezarDetener(elemento) {
    if (timeout == 0) {
        // empezar el cronometro

        /* elemento.value="Detener";
 */
        // Obtenemos el valor actual
        inicio = vuelta = new Date().getTime();

        // iniciamos el proceso
        funcionando();
    } else {
        // detemer el cronometro

        /*         elemento.value="Empezar"; */
        clearTimeout(timeout);
        timeout = 0;
    }
}

function funcionando() {
    // obteneos la fecha actual
    var actual = new Date().getTime();

    // obtenemos la diferencia entre la fecha actual y la de inicio
    var diff = new Date(actual - inicio);

    // mostramos la diferencia entre la fecha actual y la inicial
    var result = LeadingZero(diff.getUTCHours()) + ":" + LeadingZero(diff.getUTCMinutes()) + ":" + LeadingZero(diff.getUTCSeconds());
    document.getElementById('crono').innerHTML = result;

    // Indicamos que se ejecute esta función nuevamente dentro de 1 segundo
    timeout = setTimeout("funcionando()", 1000);
}

/* Funcion que pone un 0 delante de un valor si es necesario */
function LeadingZero(Time) {
    return (Time < 10) ? "0" + Time : + Time;
}
var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

var cartas = new Array(
    { text: 'Yellow', nombre: '1', color: 'rgba(255, 255, 0, 0.8)', seleccion: false }, { text: 'Blue', nombre: '2', color: 'rgba(0, 0, 255,0.8)', seleccion: false },
    { text: 'Black', nombre: '3', color: 'rgba(0, 0, 0,0.8)', seleccion: false }, { text: 'Pink', nombre: '4', color: 'rgba(247, 191, 190, 0.8)', seleccion: false },
    { text: 'Green', nombre: '5', color: 'rgba(0, 255, 0, 0.8)', seleccion: false }, { text: 'Orange', nombre: '6', color: 'rgba(239, 127, 26, 0.8)', seleccion: false },
    { text: 'Red', nombre: '7', color: ' rgba(255, 0, 0, 0.8)', seleccion: false }, { text: 'Purple', nombre: '8', color: 'rgba(163, 73, 164, 0.8)', seleccion: false },
    { text: 'White', nombre: '9', color: 'rgba(255, 255, 255, 0.8)', seleccion: false }, { text: 'Brown', nombre: '10', color: 'rgba(141, 73, 37, 0.8)', seleccion: false },
    { text: 'Amarillo', nombre: '1', color: 'rgba(255, 255, 0, 0.8)', seleccion: false }, { text: 'Azul', nombre: '2', color: 'rgba(0, 0, 255,0.8)', seleccion: false },
    { text: 'Negro', nombre: '3', color: 'rgba(0, 0, 0,0.8)', seleccion: false }, { text: 'Rosado', nombre: '4', color: 'rgba(247, 191, 190, 0.8)', seleccion: false },
    { text: 'Verde', nombre: '5', color: 'rgba(0, 255, 0, 0.8)', seleccion: false }, { text: 'Naranja', nombre: '6', color: 'rgba(239, 127, 26, 0.8)', seleccion: false },
    { text: 'Rojo', nombre: '7', color: ' rgba(255, 0, 0, 0.8)', seleccion: false }, { text: 'Morado', nombre: '8', color: 'rgba(163, 73, 164, 0.8)', seleccion: false },
    { text: 'Blanco', nombre: '9', color: 'rgba(255, 255, 255, 0.8)', seleccion: false }, { text: 'Marron', nombre: '10', color: 'rgba(141, 73, 37, 0.8)', seleccion: false });

var intentos = 0;
var jugada1 = "";
var jugada2 = "";
var infojugada1 = "";
var infojugada2 = "";
var identificadorJ1 = "";
var identificadorJ2 = "";
var aciertos = 0;

function iniciarJuego() {
    var dato = document.getElementById("juego");
    var btniniciar = document.getElementById("btn-iniciar");
    dato.style.opacity = 1;

    cartas.sort(function () { return Math.random() - 0.5 });
    for (var i = 0; i < 20; i++) {
        var carta = cartas[i];
        var dato = document.getElementById(i.toString());
        dato.dataset.valor = carta.text;
        dato.dataset.nombre = carta.nombre;
        dato.dataset.color = carta.color;
        console.log(dato.dataset.nombre)
    }
    btniniciar.className = "bubbly-button iniciar none";
    btniniciar.disabled = true;

    console.log("aciertos " + aciertos)
};

function resetearJuego() {
    document.getElementById("juego").innerHTML = `
    <table>
    <tr>
        <td id="0" class="letra" onclick="girarCarta()" data-valor="valor"></td>
        <td id="1" class="letra" onclick="girarCarta()" data-valor="valor"></td>
        <td id="2" class="letra" onclick="girarCarta()" data-valor="valor"></td>
        <td id="3" class="letra" onclick="girarCarta()" data-valor="valor"></td>
        <td id="4" class="letra" onclick="girarCarta()" data-valor="valor"></td>
    </tr>
    <tr>
        <td id="5" class="letra" onclick="girarCarta()" data-valor="valor"></td>
        <td id="6" class="letra" onclick="girarCarta()" data-valor="valor"></td>
        <td id="7" class="letra" onclick="girarCarta()" data-valor="valor"></td>
        <td id="8" class="letra" onclick="girarCarta()" data-valor="valor"></td>
        <td id="9" class="letra" onclick="girarCarta()" data-valor="valor"></td>
    </tr>
    <tr>
        <td id="10" class="letra" onclick="girarCarta()" data-valor="valor"></td>
        <td id="11" class="letra" onclick="girarCarta()" data-valor="valor"></td>
        <td id="12" class="letra" onclick="girarCarta()" data-valor="valor"></td>
        <td id="13" class="letra" onclick="girarCarta()" data-valor="valor"></td>
        <td id="14" class="letra" onclick="girarCarta()" data-valor="valor"></td>
    </tr>
    <tr>
        <td id="15" class="letra" onclick="girarCarta()" data-valor="valor"></td>
        <td id="16" class="letra" onclick="girarCarta()" data-valor="valor"></td>
        <td id="17" class="letra" onclick="girarCarta()" data-valor="valor"></td>
        <td id="18" class="letra" onclick="girarCarta()" data-valor="valor"></td>
        <td id="19" class="letra" onclick="girarCarta()" data-valor="valor"></td>
    </tr>
</table>`;
    vaciar();
    var dato = document.getElementById("juego");
    dato.style.opacity = 1;
    aciertos = 0;
    cartas.sort(function () { return Math.random() - 0.5 });
    for (var i = 0; i < 20; i++) {
        var carta = cartas[i];
        cartas[i].seleccion = false;
        var dato = document.getElementById(i.toString());
        dato.dataset.valor = carta.text;
        dato.dataset.nombre = carta.nombre;
        dato.dataset.color = carta.color;

        colorCambio(i, 'gray', '');

        console.log(dato.dataset.nombre);

    }
    console.log("aciertos " + aciertos)
}

function girarCarta() {
    var evento = window.event;

    jugada2 = evento.target.dataset.valor;
    infojugada2 = evento.target.dataset.nombre;
    identificadorJ2 = evento.target.id;



    if (jugada1 !== "") {

        if (infojugada1 === infojugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true && cartas[parseInt(identificadorJ1)].seleccion != true) {

            cartas[parseInt(identificadorJ1)].seleccion = true;
            cartas[parseInt(identificadorJ2)].seleccion = true;

            colorCambio(identificadorJ2, `${evento.target.dataset.color}`, jugada2);
            vaciar();
            comprobar();
        } else if (identificadorJ1 !== identificadorJ2) {
            var self = this;
            setTimeout(function () {
                colorCambio(self.identificadorJ1, "gray", "")
                colorCambio(self.identificadorJ2, "gray", "")
                vaciar()
            }, 200);

            colorCambio(identificadorJ2, `${evento.target.dataset.color}`, jugada2);
        }
    } else if (jugada2 !== "valor") {

        colorCambio(identificadorJ2, `${evento.target.dataset.color}`, jugada2);

        jugada1 = jugada2;
        infojugada1 = infojugada2;
        identificadorJ1 = identificadorJ2;
    }
};

function vaciar() {
    jugada1 = "";
    jugada2 = "";

    infojugada1 = "";
    infojugada2 = "";

    identificadorJ1 = "";
    identificadorJ2 = "";
}

function colorCambio(posicion, color, contenido) {
    document.getElementById(posicion.toString()).style.backgroundColor = color;
    document.getElementById(posicion.toString()).innerHTML = contenido;
}

function comprobar() {
    aciertos = 0;
    for (var i = 0; i < 20; i++) {
        if (cartas[i].seleccion == true) {
            aciertos++;
        }

    }

    if (aciertos == 20) {
        document.getElementById("juego").innerHTML = `<div class="fin-contend">
        <div class="fin">
            <h3>Felicidades <br> GANASTE</h3>
            <a href="index.html"><button class="bubbly-button next"><i class="fas fa-home"></i> Inicio</button></a>
        </div>`;
        empezarDetener();
    }
}
