function pedirComida(array) {
    let numeroVeganos = array.filter((persona) => persona.dieta === 'vegan'); 
    let numeroStandard = array.filter((persona) => persona.dieta === 'standard');

    return {
        standart: numeroStandard.length,
        vegan: numeroVeganos.length
    }
}

const personas = [
    {
        nombre: "Harry",
        dieta: "standard"
    },
    {
        nombre: "Luis",
        dieta: "vegan"
    },
    {
        nombre: "Daniel",
        dieta: "standard"
    },
]

const result = pedirComida(personas);
console.log(result);