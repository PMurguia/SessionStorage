let boton = document.getElementById('nombre_btn');
if (boton !== null) {
    boton.addEventListener('click', getName);
}

//document.getElementById('nombre_btn').addEventListener('click', getName);

let nombreGuardado = sessionStorage.getItem('nombre');
if (nombreGuardado !== null) {
    document.getElementById('mostrar').innerHTML = nombreGuardado;
}

function getName() {
    let nombre = document.getElementById('nombre').value;
    document.getElementById('mostrar').innerHTML = nombre;
    sessionStorage.setItem('nombre', nombre);
}
