//scope :hace referencia a la  accesibilidad y 
//visibilidad de una variable //

//scope global : la variable es visible y accesible 
//en cualquier parte del codigo

//scope local :(o de funcion): la variable es visible y accesible 
//dentro de la funcion donde fue creada 

//scope de bloque :el alcance es dentro de las llaves {}
//o dentro del missmo bloque 

//hoisting : es el comportamiento por defecto del movimiento o la elevacion
//de las declaraciones var o funcion a su scope principal 

const Cuadrupedo = "Vaca";

function animal () {
    let esTerrestre = true;
    let animal = "Jirafa;"
    if(esTerrestre) {
        Cuadrupedo
        let comerHojasAltas = true;
    } else if(esVolador) {
        Cuadrupedo
        const volar = true;
    } else {
        const nadar = true;
    }
}
console.log(volar);

animal();