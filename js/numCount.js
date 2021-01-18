"use strict";

/* Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 - 0   =0
0 - 4   =10
0 - 100 =5050
574 - 815   =baisiai didelis teigiamas skaicius
-50 - 50    = 0
-70 - 30    = santykinai nedidelis neigiamas skaicius
*/


const from = 0;
const till = 4;
let sum = 0;

for (let i = from; i <= till; i++){
    sum += i;

    console.log(i, sum);
}

const ats = `Suma nuo ${from} iki ${sum}`;
console.log(ats);


