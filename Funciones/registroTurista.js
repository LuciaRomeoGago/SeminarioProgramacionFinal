$(document).ready(function() {
    // Cargar turistas al iniciar
    cargarTuristas();

    // Manejar el envío del formulario
    $('#turista-form').on('submit', function(event) {
        event.preventDefault(); // Evitar el envío normal del formulario

        const turista = {
            nombre: $('#nombre').val(),
            apellido: $('#apellido').val(),
            pasaporte: $('#pasaporte').val()
        };

        // Enviar datos a la API
        $.post('http://localhost:3000/turistas', turista)
            .done(function(data) {
                alert('Turista registrado con éxito!');
                $('#turista-form')[0].reset(); // Reiniciar el formulario
                cargarTuristas(); // Cargar la lista actualizada de turistas
            })
            .fail(function() {
                alert('Error al registrar al turista.');
            });
    });
});