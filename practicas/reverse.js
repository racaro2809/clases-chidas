let textoAlReves = "ehcel noc zorra ";

function invertirTexto(texto) {
    return texto.split("").reverse().join("");

}
let invertido = invertirTexto(textoAlReves)

console.log(invertido);