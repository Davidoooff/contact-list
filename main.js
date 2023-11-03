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

console.log("Lista inicial de contactos:");
imprimirContactos();

agregarContacto({
    id: 4,
    nombres: "Lucía",
    apellidos: "Rodríguez",
    telefono: "555-123-4567",
    ubicaciones: { ciudad: "Ciudad4", direccion: "Dirección4" }
});
console.log("\nLista de contactos después de agregar a Lucía Rodríguez:");
imprimirContactos();

borrarContacto(2);
console.log("\nLista de contactos después de borrar a María González:");
imprimirContactos();



