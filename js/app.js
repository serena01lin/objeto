const serena = {
    nombre: "Serena",
    segundo_nombre: "Micaela",
    apellido: "Lin",
    edad: 21,
    nacionalidad: "Argentina",
    horoscopo: "Acuario",
    comentario_profe: undefined,
    hobbies: ["cuidar plantas suculentas", "escribir caligrafía"],
    otros: {
        familia: ["Papá", "Mamá", "Hermano mayor", "Hermana", "Hermano menor"]
    },
    comentarioProfe(comentario) {
        serena.comentario_profe = comentario;
    },

};

serena.comentarioProfe('...');

const {nombre, segundo_nombre, apellido,  edad, nacionalidad, comentario_profe} = serena;



console.log(`
Hola, mi nombre es ${nombre}, mi segundo nombre es ${segundo_nombre} y mi apellido es ${apellido}. Tengo ${edad} años, y soy de ${nacionalidad}. El comentario del profe es ${comentario_profe}.
`);

