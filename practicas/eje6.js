function sumArray (numeros, n) {
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 1; j <= numeros.length -1; j++) {
            //console.log(`i ${i} j ${j} ---- ${numeros[i]} + ${numeros[j+1]} = ${numeros[i]} + ${numeros[j+1]}`);
            if (numeros[i] + numeros[j+1] === n){
                //console.log("numero final ","i",numeros[i],"j",numeros[j+2], "suma", numeros[i] + numeros[j+2]);
                return true;
            }
        }
    }
    return false; 
}


const result = sumArray([2,5,7,10,11,15,20], 4)
console.log(result);