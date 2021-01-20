"use strict";

/*Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
 */

 const from = 0;
 const till = 11;
 const divider = 3;

 let count = 0;

 for (let i = from; i <=till; i++){
     if (i % divider === 0){
         count++;
     }
 }


 const ats = `Skaičių intervale tarp ${from} ir ${till}, besidalijančių be liekanos iš ${divider} yra ${count} vienetai.`;

 console.log(ats);


 


 