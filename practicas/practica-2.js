let mensaje = "Hola soy un mensaje";
let nombres = ["juan", "camilo", "cesar", "lucas"];
/* let mensajeModificado = mensaje.slice(5, mensaje.length - 8)
console.log(mensajeModificado);

let mensajeModificado2 = nombres.includes("camilo")
console.log(mensajeModificado2);

let mensajeModificado3 = mensaje.lastIndexOf("soy")
console.log(mensajeModificado3);
 */
function recortarTexto(indiceInicial, indiceFinal) {
    let mensajeModificado = mensaje.slice(indiceInicial, mensaje.length - indiceFinal)
    return mensajeModificado;
}
let resultado = recortarTexto(5, 8);
console.log(resultado);

const nuevoString = str.split("%");
console.log(nuevoString);