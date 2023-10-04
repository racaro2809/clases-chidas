function mayorMenosMenor(numeros) {
    let temporal = null
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length - i; j++) {
            if (numeros[j] > numeros[j+1]) {
                temporal = numeros[j];
                numeros[j] = numeros[j+1];
                numeros[j+1] = temporal;
            }
        }
    }
    let mayor = numeros[numeros.length-1];
    let menor = numeros[0];

    return mayor - menor;
}

const numeros = [45,23,2,85,17,42,56,91,8];

const result = mayorMenosMenor(numeros);
console.log(result);