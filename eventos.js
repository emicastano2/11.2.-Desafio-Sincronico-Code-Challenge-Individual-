// Definimos constantes del formulario
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let fechaNacimiento = document.getElementById("fechaNacimiento");
const boton = document.getElementById("boton");

// Función que genera los datos y los envía
boton.addEventListener("click", function () {
    let data = {
        name: nombre.value,
        apellido: apellido.value,
        birth: fechaNacimiento.value,
    };

    // Definimos opciones para el fetch
    const url = 'https://jsonplaceholder.typicode.com/users';
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    // Realizamos la solicitud fetch
    fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});