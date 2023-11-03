var listaDeContactos = [
    {
        id: 1,
        nombres: "Juan",
        apellidos: "Pérez",
        telefono: "123-456-7890",
        ubicaciones: { ciudad: "Ciudad1", direccion: "Dirección1" }
    },
    {
        id: 2,
        nombres: "María",
        apellidos: "González",
        telefono: "987-654-3210",
        ubicaciones: { ciudad: "Ciudad2", direccion: "Dirección2" }
    },
    {
        id: 3,
        nombres: "Carlos",
        apellidos: "Rodríguez",
        telefono: "555-555-5555",
        ubicaciones: { ciudad: "Ciudad3", direccion: "Dirección3" }
    }
];

function agregarContacto(contacto) {
    listaDeContactos.push(contacto);
}

function borrarContacto(id) {
    listaDeContactos = listaDeContactos.filter(function (contacto) {
        return contacto.id !== id;
    });
}

function imprimirContactos() {
    console.log("Lista de contactos:");
    listaDeContactos.forEach(function (contacto, index) {
        console.log("ID: " + contacto.id);
        console.log("Nombres: " + contacto.nombres);
        console.log("Apellidos: " + contacto.apellidos);
        console.log("Teléfono: " + contacto.telefono);
        console.log("Ubicación - Ciudad: " + contacto.ubicaciones.ciudad);
        console.log("Ubicación - Dirección: " + contacto.ubicaciones.direccion);
        console.log("------");
    });
}

function actualizarContactoExistente() {
    var id = parseInt(prompt("ID del contacto a actualizar:"));
    if (!isNaN(id)) {
        var contactoExistente = listaDeContactos.find(function (contacto) {
            return contacto.id === id;
        });

        if (contactoExistente) {
            var nuevosNombres = prompt("Nuevos nombres del contacto:", contactoExistente.nombres);
            var nuevosApellidos = prompt("Nuevos apellidos del contacto:", contactoExistente.apellidos);
            var nuevoTelefono = prompt("Nuevo teléfono del contacto:", contactoExistente.telefono);
            var nuevaCiudad = prompt("Nueva ciudad del contacto:", contactoExistente.ubicaciones.ciudad);
            var nuevaDireccion = prompt("Nueva dirección del contacto:", contactoExistente.ubicaciones.direccion);

            contactoExistente.nombres = nuevosNombres;
            contactoExistente.apellidos = nuevosApellidos;
            contactoExistente.telefono = nuevoTelefono;
            contactoExistente.ubicaciones.ciudad = nuevaCiudad;
            contactoExistente.ubicaciones.direccion = nuevaDireccion;

            actualizarListaDeContactos();
        } else {
            alert("No se encontró un contacto con el ID proporcionado.");
        }
    } else {
        alert("ID inválido. Por favor, ingrese un número válido.");
    }
}


