/* function saludar(nombre) {
    console.log('Bienvenido ' + nombre);
}

function procesarEntradaUsuario(callback) {
    console.log('Por favor ingresa tu nombre.');
    let nombre = 'Marcos';

    callback(nombre);
}

procesarEntradaUsuario(saludar);
 */
console.log("Hola bienvenido");

setTimeout(function () {
    console.log("He ejecutado la función");
}, 4000);

console.log("Chao hasta luego");


$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
});

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");
<button>Click me!</button>



console.log('Comienzo progtama');

function dos() {
    console.log('Muestro el dos');
}

function uno() {
    console.log('Muestro el uno');
    dos();
    console.log('Muestro el tres')
}

uno();
console.log('Fin del proceso');