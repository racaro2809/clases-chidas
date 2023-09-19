/* (°F − 32) × 5/9 = °C


(°C × 9/5) + 32 */

let c = 32;
function convertirAFarenheit(c) {
    let f = (c * 9 / 5) + 32;
    return f;
};
let celcius = convertirAFarenheit(c)
console.log(celcius);

let f = 108;
function convertirACelcius(f) {
    let c = (f - 32) * 5 / 9;
    return c;
}
let farenheit = convertirACelcius(f)
console.log(farenheit)