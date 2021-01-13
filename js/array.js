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
console.log(hi[0]);
console.log(hi[1]);
console.log(hi[2]);
console.log(hi[3]);

console.log('----------------');


// UZDUOTYS "Kintamuju inicijavimas"
// Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis ir po kiekvieno jų inicijavimo, išvesti į console

const pirmoPazymiai = [10, 8, 5, 9, 10];
const antroPazymiai = [10, 10, 8, 7, 9];
const trecioPazymiai = [9, 9, 8, 10, 10];

console.log('Pirmo menesio pazymiai:', pirmoPazymiai);
console.log('Antro menesio pazymiai:', antroPazymiai);
console.log('Trecio menesio pazymiai:', trecioPazymiai);

// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką: 1-2+3-4+5 ir rezultatą išvesti į console

const veiksmas_1 = pirmoPazymiai[0] - pirmoPazymiai[1] + pirmoPazymiai[2] - pirmoPazymiai[3] + pirmoPazymiai[4];
console.log('veiksmas_1: ' + veiksmas_1);

console.log('veiksmas2: ' + (antroPazymiai[0] - antroPazymiai[1] + antroPazymiai[2] - antroPazymiai[3] + antroPazymiai[4]));

const veiksmas3 = trecioPazymiai[0] - trecioPazymiai[1] + trecioPazymiai[2] - trecioPazymiai[3] + trecioPazymiai[4];
console.log('veiksmas3: ' + veiksmas3);


// Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis ir po kiekvieno jų inicijavimo, išvesti į console

const priebalsiai = ['d', 'f', 'g', 'h', 'g'];
const balsiai = ['a', 'e', 'i', 'o', 'u'];
const dvibalsiai = ['ai', 'ei', 'ui', 'oi', 'au'];

console.log('Priebalsiai:', priebalsiai);
console.log('Balsiai:', balsiai);
console.log('Dvibalsiai', dvibalsiai);

// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const garsai = [dvibalsiai + ', ' + balsiai + ', ' + priebalsiai]
console.log(garsai);
