/*Funkcija pavadinimu “didziausiasSkaiciusSarase”:
priima vieną kintamąjį
jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
priešingu atveju, funkcija tęsia darbą
pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
gražina didžiausią surastą skaičių
TESTAI:
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
rezultatas: 1
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
rezultatas: 3
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
rezultatas: 78
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
rezultatas: 69
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
rezultatas: -1
console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
rezultatas: “Pateiktas sąrašas negali būti tuščias.”
 */

 function bigNumber(list) {
     //validation
     if (typeof list !== 'object') {
         return 'ERROR: reikia array tipo reiksmes';
     }
     if (list.length === 0) {
         return 'ERROR: sarasas yra tuscias';
     }

     //logic
     let biggestNumber = -Infinity;
     // arba:  let biggestNumber = list[0]; galima, bet geriau nereikia

     for (let i = 0; i< list.length; i++) {
         const number = list[i];
         //list item validation
         if (typeof number !== 'number' || !isFinite(number)) {
             continue;
         }
         if (number > biggestNumber) {
             biggestNumber = number;
         }
     }

     // post logic validation
        if (biggestNumber === -Infinity) {
            return 'ERROR: sarase turi buti bent vienas normalus skaicius'
        }
     
        //return result
     return biggestNumber
 }

 console.log( bigNumber('pomidoras'));
 console.log(bigNumber(582));
 console.log(bigNumber(true));
 console.log(bigNumber(false));
 console.log(bigNumber([]));
 console.log(bigNumber([7]), '->', 7 );
 console.log(bigNumber([ 1, 2, 3 ]), '->', 3 );
 console.log(bigNumber([ 69, 69, 69, 69, 66 ]), '->', 69 );
console.log(bigNumber([ -1, -2, -3, -4, -5, -6, -7, -8 ]), '->', -1);
 console.log(bigNumber([ -5, 78, 14, 0, 18 ]), '->', 78);
 console.log(bigNumber([ -5, 78, 14, 0, 18, 'sfbs' ]), '->', 78);
 console.log(bigNumber([ -5, 78, 'sgsfg', 14, 0, 18 ]), '->', 78);
 console.log(bigNumber(['fsb', -5, 78, 14, 0, 18 ]), '->', 78);
console.log(bigNumber( ['dfsg', true, 'false', false, [], [84], false]));
console.log(bigNumber(['fsb', -5, 78, Infinity, 14, 0, 18 ]), '->', 78);
