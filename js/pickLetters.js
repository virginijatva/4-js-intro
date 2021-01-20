/*Funkcija pavadinimu “isrinktiRaides”:
priima du kintamuosius:
pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
antrasis nurodo kas kelintą raidę išrinkti
patikrinti, ar pirmasis kintamasis yra teksto tipo:
jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
priešingu atveju tęsiame darbą
patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
priešingu atveju tęsiame darbą
išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
gražina rezultatą
TESTAI:
console.log( isrinktiRaides( “abcdefg”, 2 ) );
rezultatas: “bdf”
console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
rezultatas: “cfil”
console.log( isrinktiRaides( “abc”, 0 ) );
rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( isrinktiRaides( “abc”, 4 ) );
rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( isrinktiRaides( 1561, 2 ) );
rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”

*/

function pickLetters(text, step) {
    //validation
        if (typeof text !== 'string' || text === '') {
            return 'ERROR: pirmasis parametras turi buti ne tuscias tekstas'
        }
        if (typeof step !== 'number' || !isFinite(step)) {
            return 'ERROR: antrasis parametras turi buti tekstas'
        }
        if (step === 0) {
            return 'ERROR: zingsnis negali buti nulinis'
        }
        if (step > text.length) {
            return 'ERROR: zingsnis negali buti ilgesnis nei teksto ilgis'
        }
        if (step % 1 !== 0) {
            return 'ERROR: zingsnis turi buti sveikasis skaicius'
        }
        
        //logic
        let picker = '';

        if (step > 0) {
            for (let i = step - 1; i<text.length; i+=step) {
                picker += text[i];
            }
        } else {
            for (let i = text.length + step; i>=0; i+= step) {
            picker += text[i];
        }
        }

        // for (let i = 0; i < text.length; i++) {
        //     const letter = text[i];

        //     if (i % step === step - 1) {
        //         picker += letter;
        //     }
        // }

        //post logic validation

    if (picker === '') {
        return 'ERROR: nenumatyta logine klaida'
    }

        // return result
        return picker;
}

console.log(pickLetters(1561, 2));
console.log(pickLetters('Labas', 'ksdlf'));
console.log(pickLetters('Labas', NaN));
console.log(pickLetters('Labas', -Infinity));
console.log(pickLetters ('abc', 0));
console.log(pickLetters ('abc', 4));
console.log(pickLetters ('abc', 1.5));
console.log(pickLetters ('', 5));
console.log(pickLetters ('abcdefg', 2), '->', 'bdf' );
console.log(pickLetters ('abcdefghijkl', 3), '->', 'cfil' );
console.log( pickLetters( 'abc', 3 ), '->', 'c' );
console.log(pickLetters ('abcdefg', 1), '->', 'abcdefg' );
console.log(pickLetters ( 'abc', 4 ) );
console.log(pickLetters ('abcdefg', -1), '->', 'gfedcba' );
console.log(pickLetters ('abcdefghijkl', -3), '->', 'jgda' );
console.log(pickLetters ('abcdefg', -2), '->', 'fdb' );
console.log(pickLetters ( 'abc', -3 ), '->', 'a');


