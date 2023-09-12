function esPalindroma(palabra) {
    let stringConvertido = palabra.split("");
    let mensaje = stringConvertido.reverse();
    console.log(mensaje);
    let arrayConertido = mensaje.toString();
    console.log(arrayConertido);
};


esPalindroma("carro");
