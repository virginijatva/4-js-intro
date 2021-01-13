/*
Array - bet kokiu elementu sarasas (prioritetas - to paties elementai)
*/

const tusciaPinigine = [];
console.log(tusciaPinigine);

const pinigine = [1, 2, 5, 5, 20];
console.log(pinigine);

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(abc);

const aplankytiMiestai = ['Vilnius', 'Kaunas', 'Klaipeda'];
console.log(aplankytiMiestai);

// kaip suzinoti, kiek sarase yra reiksmiu: array.length
console.log('Kiek yra reiksmiu tusciame sarase:', tusciaPinigine.length);
console.log('Kiek yra reiksmiu pinigineje:', pinigine.length);
console.log('Kiek yra reiksmiu abeceleje:', abc.length);
console.log('Kiek esu aplankes miestu:', aplankytiMiestai.length);

// kaip suzinoti, koks teksto ilgis: tekstas.length

const zodis = 'zodis';
const zodisIlgis = zodis.length;
console.log(`"${zodis}" ilgis yra ${zodisIlgis}.`);

console.log('Labas rytas', 'Labas rytas'.length);

// istraukti saraso reiksme

const pirmasMiestas = aplankytiMiestai[0];
console.log('Pirmas miestas', pirmasMiestas);

const antrasMiestas = aplankytiMiestai[1];
console.log('Antras miestas', antrasMiestas);

const treciasMiestas = aplankytiMiestai[2];
console.log('Trecias miestas', treciasMiestas);

// istraukti teksto n-taji simboli

const hi = 'Labas';
const pirmaRaide = [0];
console.log(pirmaRaide);
console.log(hi[1]);
console.log(hi[2]);
console.log(hi[3]);