function verificarHeroe(heroe) {
    if (heroe.esMilitar == true && heroe.batalla == true) {
        return `${heroe.nombre}, es héroe militar y ha participado en batallas`
    }
    if (heroe.esMilitar == true && heroe.batalla == false) {
        return `${heroe.nombre}, aunque es héroe militar, no ha participado en batallas`
    }
    if (heroe.esMilitar == false && heroe.batalla == false) {
        return `${heroe.nombre}, no es héroe militar y tampoco ha participado en batallas`
    }
    if (heroe.esMilitar == false && heroe.batalla == true) {
        return `${heroe.nombre}, aunque no es héroe militar, ha participado en batallas`
    }
}

const heroe = {
    nombre: "Chuck Norris",
    batalla: true,
    esMilitar: false,
}

const result = verificarHeroe(heroe);
console.log(result);