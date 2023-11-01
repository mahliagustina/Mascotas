document.addEventListener("DOMContentLoaded", function() {
    let botonFormulario = document.getElementById("botonFormulario");

    botonFormulario.onclick = function(event) {
        event.preventDefault(); // Esto previene el envío del formulario (si no deseas enviar el formulario)
        
        let valorNombre = document.getElementById("nombre").value;
        let valorApellido = document.getElementById("apellido").value;
        let valorCorreo = document.getElementById("correo").value;
        let valorTelefono = document.getElementById("telefono").value;

        // Validación del correo electrónico usando una expresión regular
        let correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valorCorreo);

        // Validación del número de teléfono usando una expresión regular
        let telefonoValido = /^\d{10}$/.test(valorTelefono);

        if (
            valorNombre.length <= 2 ||
            valorApellido.length <= 2 ||
            !correoValido ||
            !telefonoValido
        ) {
            alert("Por favor, completa correctamente todos los campos del formulario.");
            return;
        }

        // Crear un objeto con los datos del formulario
        let datosFormulario = {
            nombre: valorNombre,
            apellido: valorApellido,
            correo: valorCorreo,
            telefono: valorTelefono
        };

        // Convertir el objeto a formato JSON
        let datosJSON = JSON.stringify(datosFormulario);

        // Guardar el JSON en localStorage
        localStorage.setItem("formularioDatos", datosJSON);

        alert("Datos del formulario guardados en localStorage como JSON.");

        // Limpiar los campos del formulario después de guardar los datos
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("telefono").value = "";

        // Mostrar los datos guardados
        mostrarDatosGuardados();
    };

    // Función para mostrar los datos guardados desde localStorage
    function mostrarDatosGuardados() {
        // Recuperar los datos del localStorage
        let datosJSON = localStorage.getItem("formularioDatos");

        // Convertir el JSON de vuelta a objeto
        let datosFormulario = JSON.parse(datosJSON);

        // Verificar si hay datos en localStorage
        if (datosFormulario) {
            // Construir el mensaje con los datos recuperados
            let mensaje = `Hola ${datosFormulario.nombre} ${datosFormulario.apellido}! Gracias por contactarnos. Tu correo es: ${datosFormulario.correo} y tu teléfono es: ${datosFormulario.telefono}`;

            // Mostrar el mensaje en el div con id "mensajeContacto"
            document.getElementById("mensajeContacto").innerText = mensaje;
        } else {
            // Si no hay datos en localStorage, mostrar un mensaje indicando que no hay datos guardados
            document.getElementById("mensajeContacto").innerText = "No hay datos guardados.";
        }
    }

    // Mostrar los datos guardados cuando la página se carga
    mostrarDatosGuardados();
});
