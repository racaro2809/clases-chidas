let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*function buscarNumerosPares (par) {
    if (par % 2 == 0) 
    return par;
    
}
let numerosPares = numeros.filter(buscarNumerosPares);
console.log(numerosPares);

function buscarNumerosImpares (impar) {
    if (impar % 2 != 0) 
    return impar;
    
}
let numerosImpares = numeros.filter(buscarNumerosImpares);
console.log(numerosImpares); */


let numerosPares = numeros.filter((el)=>(el % 2 == 0));
console.log(numerosPares);

let numerosImpares = numeros.filter((el)=>(el % 2 != 0));
console.log(numerosImpares);