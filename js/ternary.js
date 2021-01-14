const a = 4;
const b = 4;

const arLygu = a === b ? true : false;

console.log(arLygu);


const aukstai = 9;
const kadaDaugiaaukstis = 5;

const arDaugiaaukstis = aukstai >= kadaDaugiaaukstis ? 'taip' : 'ne';
console.log(arDaugiaaukstis);


const variklisIjungtas = false;

const arJudam = variklisIjungtas === true? 'vaziuojam' : 'stovim';
console.log(arJudam);


const arAlkanas = true;

const einamValgyti = arAlkanas === true ? 'einam valgyti' : 'dar palaukim, kol isalkis,';
console.log(einamValgyti);

console.log('---------------');

let alkioAtsakymas = '';
const iprociai = 'mesedis';

if (arAlkanas === true) {
    if (iprociai === 'mesedis') {
        alkioAtsakymas = 'uzkask mesytes';
} else {
    alkioAtsakymas = 'uzkask darzoviu';
}
} else {
    alkioAtsakymas = 'nu, palaukim';
}

console.log(alkioAtsakymas);

const alkioAtsakymas2 = arAlkanas === true 
                            ? iprociai === 'mesedis'
                                ? 'uzkask mesytes'
                                : 'uzkask darzoviu'
                            : 'nu tai palaukim';
console.log(alkioAtsakymas2);


// BUS EGZAMINE: !!!!!!! Jeigu true, tada skaicius uz klaustuko, jei false, skaicius uz dvitaskio!!!
const skaicius = true 
                    ? true 
                        ? 4 
                        : 3 
                    : 2;
console.log(skaicius);