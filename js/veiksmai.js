/* UZDUOTYS "Kintamuju inicijavimas"
 Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis ir po kiekvieno jų inicijavimo, išvesti į console*/

const silkesKaina = 5;
const duonosKaina = 2;
const kavosKaina = 3;

console.log('Silkes kaina:', silkesKaina);
console.log('Duonos kaina:', duonosKaina);
console.log('Kavos kaina:', kavosKaina);

// Susumuoti visus skaičiaus tipo kintamuosius ir rezultatą išvesti į console

console.log('Produktu kainu suma:', silkesKaina + duonosKaina + kavosKaina);

//Sukurti 3 kintamuosius su teksto tipo reikšmėmis ir po kiekvieno jų inicijavimo, išvesti į console

const asmensvardas = 'Jonas';
const asmenspavarde = 'Jonaitis';
const gyvenamasisMiestas = 'Kaunas'

console.log('Vardas:', asmensvardas);
console.log('Pavarde:', asmenspavarde);
console.log('Gyvenamasis miestas:', gyvenamasisMiestas);

// Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas ir rezultatą išvesti į console

const duomenys = asmensvardas + ' ' + asmenspavarde + ' ' + gyvenamasisMiestas;
console.log(duomenys);

const duomenys2 = `${asmensvardas} ${asmenspavarde} ${gyvenamasisMiestas}`;
console.log(duomenys2);

console.log('--------------------------');

/* UZDUOTYS "Kintamuju inicijavimas" 
Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis ir po kiekvieno jų inicijavimo, išvesti į console*/

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

const garsai2 = priebalsiai[4] + ', ' + priebalsiai[3] + ', ' + priebalsiai[2] + ', ' + priebalsiai[1] + ', ' + priebalsiai[0];
console.log(garsai2);

/* Kintamųjų palyginimas
Tarpusavyje palyginti skaičiaus tipo kintamuosius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
*/

const s1 = 3;
const s2 = 5;

if (s1 === s2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

/*Išvesti teksto tipo kintamųjų ilgius
Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
*/

const vardas = 'Algimantas';
const pavarde = 'Maitvanagis';
const vardoIlgis = vardas.length;
const pavardeIlgis = pavarde.length;

console.log(`${vardoIlgis} ${pavardeIlgis}`);
console.log(`"${vardas}" ilgis yra ${vardoIlgis}`);
console.log(`"${pavarde}" ilgis yra ${pavardeIlgis}`);

if (vardoIlgis === pavardeIlgis) {
    console.log('Pomidoras');
} else {
    console.log("Bandykite dar karta");
}

/* Išvesti sąrašo tipo kintamųjų ilgius
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
*/

const pinigine = [3, 5, 7, 6, 5, 9, 5, 6, 7, 10, 90];
const pirkiniai = ['Duona', 'Sviestas', 'Pienas', 'Obuoliai', 'Grikiai', 'Kiauliena'];
console.log(pinigine.length);
console.log(pirkiniai.length);

if (pinigine.length === pirkiniai.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}