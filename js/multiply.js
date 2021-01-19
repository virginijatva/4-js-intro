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
    /* Alternatybus uzrasymas
    if ('' + a === 'NaN') {
        return 'ERROR: pirmasis paramentras turi buti tikras skaicius'
    }
       //a negali buti NaN*/
    if (a === Infinity) {
        return 'ERROR: pirmasis parametras negali buti begalybe'
    }
    if (a === Infinity || a === -Infinity) {
        return 'Error: pirmasis parametras negali buti begalybe'
    }
    /* Alternatyvus uzrasymas
    if (Math.abs(a) === Infinity) {
        return 'Error: pirmasis parametras negali buti begalybe'
    } */
    if (typeof b !== 'number') {
        return 'ERROR: antrasis parametras turi buti skaicius'
    }
    // b negali buti NaN
   /* if (isNaN(b)) {
        return 'ERROR: antrasis paramentras turi buti skaicius'
    }*/
    if (!isFinite(b)) {
        return 'ERROR: antrasis parametras turi buti tikras skaicius'
    }

    const rez = a * b;

    return rez === 0 ? 0 : rez;
}

console.log(multiply('labas', 'labas'));
console.log(multiply('labas', 5));
console.log(multiply('5', '4'));
console.log(multiply(8, '5'));
console.log(multiply(NaN, NaN));
console.log(multiply(NaN, 5));
console.log(multiply(8, NaN));
console.log(multiply(true, false));
console.log(multiply(true, 4));

console.log(multiply(Infinity, 5));
console.log(multiply(-Infinity, -Infinity));
console.log(multiply(8, -Infinity));

console.log(multiply(-1, 0), '->', 0);