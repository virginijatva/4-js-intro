/*

OPERATORIAI:
naudotini: >, <, >=, <=, ===, !==
nenaudotini: ==, !=

if (tikrinama salyga) {
    jei tenkinama
} else{
    jei netenkinama
}

SABLONAI:
if (), {}
if (), {} else{}
if (), {} else if {} ... else if () {}
if (), {} else if {} ... else if () {} else {}
*/

const a = 400;
const b = '400';

const c = +b;
console.log(c);

if (a === c) {
  console.log('taip');
} else {
    console.log('ne');
  }

  console.log('-------------------');

  const spalva = 'Raudona';

  if (spalva === 'melyna') {
      console.log('Arijai');
  } else if (spalva === 'zalia') {
       console.log('Gerai slepiasi zolej');
  } else if (spalva === 'ruda') {
      console.log('Angry bird');
  } else if (spalva === 'raudona') {
      console.log('Tikriausiai programuotojas');
  } else {
      console.log('A tu turi akis?');
  }


  const moneta = 'gsdarg';

  if (moneta === 'skaicius') {
      console.log('Iskrito skaicius');
  } else {
      if (moneta === 'herbas') {
      console.log('Iskrito herbas');
  } else {
      if (moneta === 'briauna') {
          console.log('Moneta nukrito ant briaunos');
      } else {
      console.log('Tai gal moneta vis dar ore?');
    }
  }
}


console.log('---------------------');

const namoTipas = 'butas'; // namas, butas
const kaipKilti = 'laiptai'; // laiptai, liftas

  if (namoTipas === 'namas') {
    if (kaipKilti === 'laiptai') {
    console.log('Ieinu i nama ir kylu laiptais');
}    else if (kaipKilti === 'liftas') {
    console.log('Ieinu i nama ir kylu liftu');
}    else {
    console.log('Ieinu i nama ir nera kaip kilti i virsu');
}
} else if (namoTipas === 'butas') {
    if (kaipKilti === 'laiptai') {
        console.log('Ieinu i daugiabuti ir kylu laiptais');
    }    else if (kaipKilti === 'liftas') {
        console.log('Ieinu i daugiabuti ir kylu liftu');
    }    else {
        console.log('Ieinu i daugiabuti ir nera kaip kilti i virsu');
    }
} else {
    console.log('Namo tipas nezinomas');
}