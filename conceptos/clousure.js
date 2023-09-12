/* function iniciar() {
    let nombre = "Mozilla";  // La variable nombre es una variable local creada por iniciar.
    function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
        console.log(nombre);  // Usa una variable declarada en la función externa.
    }
    mostrarNombre();
}
iniciar(); */

/* function crearFuncion() {
    const name = 'Marcos';
    let edad = 27;
    let hobbie = 'Jugar wow';

    function mostrarInfoPersonal() {
        console.log(name);
        console.log(edad);
        console.log(hobbie);
    }
    return mostrarInfoPersonal;
}

const miFuncion = crearFuncion();
miFuncion(); */


function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
console.log(add5(34));

const add10 = makeAdder(10);
console.log(add10(22)); 