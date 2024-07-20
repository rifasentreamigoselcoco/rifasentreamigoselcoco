window.onload = function() {
    var modal = document.getElementById("videoModal");
    var span = document.getElementsByClassName("close")[0];

    // Mostrar el modal al cargar la página
    modal.style.display = "block";
    document.getElementById("proximamenteVideo").play();

    // Cerrar el modal al hacer clic en la "x"
    span.onclick = function() {
        modal.style.display = "none";
        document.getElementById("proximamenteVideo").pause();
    }

    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("proximamenteVideo").pause();
        }
    }
}