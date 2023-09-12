let palabrasAlReves = "reconocer";

function invertirTexto(texto) {
    return texto.split("").reverse().join("");

}
let invertido = invertirTexto(palabrasAlReves)
if (palabrasAlReves === invertido) {
    console.log("verdad");

}
else console.log("falso")
console.log(invertido);
