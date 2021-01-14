const day = 2;

switch(day) {
  case 1:
    console.log('Pirmadienis');
    break;
  case 2:
    console.log('Antradienis');
    break;
  case 3:
    console.log('Treciadienis');
    break;
  default:
      console.log('Tokios dienos savaiteje nera.');
}

const day2 = 'tre';

switch(day2) {
  case 'pir':
    console.log('Pirmadienis');
    break;
  case 'ant':
    console.log('Antradienis');
    break;
  case 'tre':
    console.log('Treciadienis');
    break;
  default:
      console.log('Tokios dienos savaiteje nera.');
}

console.log('------------------------');

const day3 = 5;

switch (day3) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Darbo diena');
        break;
    case 6:
    case 7:
        console.log('Savaitgalis');
        break;
    default:
        console.log('Tokios dienos nera savaiteje');
        break;
}

console.log('------------------------');

const stotele = 'zaliasis';

switch (stotele) {
    case 'ziedas':
        console.log('ziedas');
    case 'parko':
        console.log('parko');
    case 'geniu':
        console.log('geniu');
    case 'leliju':
        console.log('leliju');
    case 'rudens1':
        console.log('rudens');
    case 'filaretu':
        console.log('filaretu');
    case 'karaliaus':
        console.log('karaliaus');
    case 'zaliasis':
        console.log('zaliasis');
        break;

    case 'lvovo':
        console.log('lvovo');
    case 'vasaros':
        console.log('vasaros');
    case 'rudens2':
        console.log('rudens');
    case 'tremtiniu':
        console.log('tremtiniu');
    case 'ziedas2':
        console.log('ziedas');
        break;
        

        default:
            console.log('Tokia stotele nerasta');
}

console.log('----------------------');

const eiga = 'sienos';

switch(eiga) {
    case 'zeme':
        console.log('Paruosiam zeme');
    case 'pamatai':
        console.log('Paruosiam pamatus');
    case 'sienos':
        console.log('Statom sienas');
    case 'stogas':
        console.log('Dengiam stoga');
    case 'apsiltinimas':
        console.log('Apsiltinam nama');
        break;
}