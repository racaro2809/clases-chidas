let texto = "Atravesé el túnel con expectación, sumergiéndome en su oscuridad intrigante. Cada paso resonaba en el estrecho túnel, creando un ritmo misterioso que llenaba el espacio. El eco del viento susurraba sus secretos, como voces lejanas que habitaban el túnel. La tenue luz al final del túnel parecía distante, pero mi determinación persistía. Mi corazón latía al compás del túnel, una sensación única que mezclaba emoción y cautela. Explorar el túnel era adentrarse en lo desconocido, un viaje de descubrimiento con cada rincón sin explorar del túnel."
const clave="túnel";
function conteoPalabra(texto1) {
    let transformado = texto1.split(" ");
    let conteo = 0;
    for (let i = 0; i < transformado.length; i++) {
        if (transformado[i] === clave) {
            conteo++;
        }
    }
    return conteo;
}

let total =conteoPalabra(texto)

console.log(`la palabra ${clave} se repitió ${total} veces`);