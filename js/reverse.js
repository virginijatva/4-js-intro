"use strict";

/*panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
*/

const text = 'abcdef';
const size = text.length;
let reverseText = '';

for (let i = 0; i < text.length; i++){
    const symbol = text[size - i - 1];

    reverseText += symbol;

    console.log(i, symbol, reverseText);
}

console.log('Finale gavau', reverseText);

/* antras budas:
const text = 'abcdef';
let reverseText = '';

for (let i = 0; i < text.length; i++){
    const symbol = text[i];

    reverseText = symbol + reverseText;

    console.log(i, symbol, reverseText);
}

console.log('Finale gavau', reverseText);
 */

 /* trecias:
 for (let i = 1; i <= size; i++){
    const symbol = text[size - i];

    reverseText += symbol;

    console.log(i, symbol, reverseText);
}
  */

 /*Ketvirtas
 
 for (let i = size - 1; i >= 0; i--){
    const symbol = text[i];

    reverseText += symbol;

    console.log(i, symbol, reverseText);
    */

    /* Penktas 
    for (let i = size; i > 0; i--){
    const symbol = text[i - 1];

    reverseText += symbol;

    console.log(i, symbol, reverseText);
    */