function iniciar() {
    let name = document.getElementById('nickName').value;
    let r1 = document.getElementById('r1');
    let r2 = document.getElementById('r2');
    
    if(name !== ""){
        sessionStorage.setItem('nick', name);
        console.log(sessionStorage.getItem('nick'))
        if(r1.checked == true ){
            window.location.href = 'nivelfacil.html';
        }else if (r2.checked == true){
            window.location.href = 'niveldificil.html';
        }
        else{
            alert("Por favor seleccione un nivel de dificultad");
        }
    }else{
        alert("Por favor Introduce un Nick Name");
    };
    
}

function onLoad(){
    let cajanick = document.getElementById('caja-nick');
    cajanick.innerHTML=sessionStorage.getItem('nick');
}
    

