
/* console.log(numero);
 */
// scope

const numeroGlobal = 112345;

function variables() {
    console.log('Entré a la función');
    if (true) {
        var variableVar = 76587;
        const numero = 4;    
        let variable = 'Esto es una variable global'
        console.log(variable);
    
    }    
}
variables();

// TDZ Temporal Dead Zone
