/*

for (let i=0; i<5; i++) {
    kartotinas kodas
}

*/

console.log('Pradzia');

for (let i = 2; i <= 10; i +=2){
    console.log('Kartotinas kodas', i);
}

console.log('Pabaiga');

// i=0; 0<5 true
// console.log('kartotinas kodas');
   // i++ -> i=1

   // i=1; 1<5 true
// console.log('kartotinas kodas');
   // i++ -> i=2

   // i=2; 2<5 true
// console.log('kartotinas kodas');
   // i++ -> i=3

   // i=3; 3<5 true
// console.log('kartotinas kodas');
   // i++ -> i=4

   // i=4; 4<5 true
// console.log('kartotinas kodas');
   // i++ -> i=5

   // i=5; 5<5 false

   console.log('Pradzia');

/* for (let i = 2.5; i <= 8.5; i = Math.round((i + 0.4) * precision) / precision) {
    console.log('Kartotinas kodas', i);
}
*/

console.log('Pabaiga');

   console.log('--------------------');

   const words = ['abc', 'Borisas', 'citrina', 'duobe', 'eziukas', 'fabrikas'];

console.log(words[0]);
console.log(words[1]);
console.log(words[2]);
console.log(words[3]);
console.log(words[4]);

for (let i=0; i < words.length; i++) {
    console.log(i, words[i]);
} /* tam, kad visus zodzius, esancius sarase, atspausdintu*/

for (let i=0; i < words.length; i++) {
    const word = words[i];
    console.log(i, word);
    console.log('Pirma zodzio raide:', word[0]);
    console.log('Zodzio ilgis:', word.length);
} 

console.log(words);

/* console.log(word); neveiks, nes, kas { } sklaistuose parasyta, uz ju esancios consoles ju reiksmiu neima*/

