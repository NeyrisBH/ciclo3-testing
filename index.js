function validarFormulario() {
    var codigo = document.getElementById("codigo").value;
    var nombre = document.getElementById("nombre").value;
    var tipo = document.getElementById("tipo").value;
    var tiempo = document.getElementById("tiempo").value;

    if (codigo == "" || nombre == "" || tipo == "" || tiempo == "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    if (codigo < 1 || codigo > 999 || codigo.length == codigo.maxlength) {
        alert("El código debe ser un número entero positivo de 3 dígitos");
        return false;
    }

    if (nombre.length > 30) {
        alert("El nombre no puede tener más de 30 caracteres");
        return false;
    }

    if (tipo != 0 && tipo != 1) {
        alert("El tipo de empleado debe ser 0 o 1");
        return false;
    }

    if (tiempo == 0 || tiempo > 600) {
        alert("El tiempo en la institución debe ser mayor que cero y menor o igual a 600 meses");
        return false;
    }

    return true;
}