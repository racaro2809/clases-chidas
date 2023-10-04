/* "eje1" */
"Determinar cuál es la palabra más larga"

function palabraMasLarga(frases) {
    let palabraMasLarga = '';
    for (let i = 0; i < frases.length; i++) {
        const arrayFrase = frases[i].split(" ");
        for (let j = 0; j < arrayFrase.length; j++) {
            if (arrayFrase[j].length >= palabraMasLarga.length) {
                palabraMasLarga = arrayFrase[j];
            }
        }
    }
    return palabraMasLarga;
}

const result = palabraMasLarga(['hola esto string', 'frase con palabra']);
console.log(result);
