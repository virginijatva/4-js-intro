/*Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
priima vieną kintamąjį
jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
priešingu atveju, funkcija tęsia darbą
į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
gražina skaitmenų kiekį
TESTAI:
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
rezultatas: 1
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
rezultatas: 11
console.log( skaitmenuKiekisSkaiciuje( true ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”*/

function numLength(number) {
    if (typeof number !== 'number') {
        return 'ERROR: reikia skaiciaus'
    }
    if (!isFinite(number)) {
        return 'ERROR: turi buti tikras skaicius'
    }
    const numberAsString = '' + number;
    let length = numberAsString.length;

    if (number < 0) {
        length--;
    }
    if (numLength % 1 !== 0) {
        length--;
    }
  
 
    return length;
}


console.log( numLength(5), '->', 1 );
console.log( numLength(781), '->', 3 );
console.log( numLength( 37060123456), '->', 11 );

console.log( numLength(-5), '->', 1 );
console.log( numLength(-781), '->', 3 );
console.log( numLength( -37060123456), '->', 11 );

console.log( numLength(5.123), '->', 4 );
console.log( numLength(781.123), '->', 6 );
console.log( numLength( 37060123456.546), '->', 14 );

console.log( numLength( true ) );
console.log( numLength( 'asd' ));
console.log( numLength( NaN ) );

console.log(numLength(Infinity));
console.log(numLength(['sfvsvr']));
console.log(numLength(['sfdg', true]));

console.log(numLength(1000000000000000), '->', 16);
console.log(numLength(-100000000000000), '->', 16);