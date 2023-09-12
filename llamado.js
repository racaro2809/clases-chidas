

function empacar(numeroKits, bultosSal) {
    console.log(numeroKits);
    console.log(bultosSal);
    console.log(`Marcos necesitamos empacar ${numeroKits} kits y ${bultosSal} bultos de sal`);

    const productosRecibidas = conseguirCajas(numeroKits + bultosSal);
    console.log(productosRecibidas[0], productosRecibidas[1]);
}

function conseguirCajas(numeroDeCajas) {
    console.log(`Don Javier necesito ${numeroDeCajas} cajas`);
    let cajas = `${numeroDeCajas} cajas`;
    const cintas = conseguirCintas(numeroDeCajas);
    return [cajas, cintas];
}

function conseguirCintas(numeroDeCintas) {
    console.log(`Don Alberto necesito ${numeroDeCintas} cintas`);
    let cintas = `${numeroDeCintas} cintas`;
    return cintas;
}

//Llamando o ejecutando la función
empacar(2000, 400);
