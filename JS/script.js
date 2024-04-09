function btnEnviar(){
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let numero = document.getElementById("numero").value;
    let mensaje = document.getElementById("mensaje").value;

    const data = {
        nombre: nombre,
        email: email,
        numero: numero,
        mensaje: mensaje
    }

    console.log(data.nombre,data.email,data.numero,data.mensaje)

    alert(data.email, data.numero, data.mensaje)
}


