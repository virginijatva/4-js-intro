/* 
Salygos:
-grazinamas sandaugos rezultatas
- dauginami tik skaiciai
*/

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 2), '->', 4);
console.log(multiply(22, -2), '->', -44);
console.log(multiply(0.4, 3.65), '->', 1.46);
console.log(multiply(-1, 0), '->', 0);


const m1 = multiply(2, 2);
console.log(m1);
const m2 = multiply(6, 7);
console.log(m2);
const m3 = multiply(-6, 7.5);
console.log(m3);


function multiply(a, b) {
    if (typeof a !== 'number') {
        return 'ERROR: pirmasis paramentras turi buti skaicius'
    }
    if (typeof b !== 'number') {
        return 'ERROR: antrasis parametras turi buti skaicius'
    }
    return a * b;
}

console.log(multiply('labas', 'labas'));
console.log(multiply('labas', 5));
console.log(multiply('5', '4'));

console.log(multiply('NaN', 'NaN'));