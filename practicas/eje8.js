function fiestaDedisfraces(personas) {
    const personasDisfrazadas = personas.filter((p) => p.disfraz == true && p.personaje);
    const nombres = personasDisfrazadas.map((persona) => persona.nombre);
    return nombres;
}

const personas = [
    {
        nombre: "Juan Manuel",
        disfraz: true,
        personaje: "Wally"
    },
    {
        nombre: "Mariana",
        disfraz: true,
        personaje: "La momia"
    },
    {
        nombre: "Pedro",
        disfraz: false,
    },
    
]

const result = fiestaDedisfraces(personas);
console.log(result);