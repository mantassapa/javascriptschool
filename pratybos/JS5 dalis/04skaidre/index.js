"use strict"

let duomenys = {
  id: "0001",
  type: "donut",
  name: "Cake",
  ppu: 0.55,
  topping: [
    { id: "5001", type: "None" },
    { id: "5002", type: "Glazed" },
    { id: "5005", type: "Sugar" },
    { id: "5007", type: "Powdered Sugar" },
    { id: "5006", type: "Chocolate with Sprinkles" },
    { id: "5003", type: "Chocolate" },
    { id: "5004", type: "Maple" },
  ],
};
// console.log(duomenys)


// const masyvas = duomenys.topping.forEach((el) => console.log(`id : ${el.id}, type : ${el.type}`))
// const masyvas2 = duomenys.topping.forEach((el) => {
//   Object.entries(duomenys).forEach(([key, value]) => console.log(key, value))}) // neveikia

// duomenys.topping.forEach(item => {
//   Object.keys(item).forEach(key => {
//       console.log(`${key}: ${item[key]}`)
//   })
// })



////pratybos 5----------

// const family = {
//   granparents:{
//     grandma: "Marge",
//     grandpa: "Homer"
//   },
//   parents: {
//     mom: "Lisa",
//     dad: "Millhouse"
//   },
//   children: {
//     dauther: "Anne",
//     son1: "Peter",
//     son2: "Bob"
//   }
// }
// console.log(family)
// for (let i in family){
//   let members = Object.values(family[i]).join(",")
//     console.log(`${i}" ${members}`)
// }  


//pratybos 5-2

let knygos = [
  {
    isbn: 9786098233346,
    price: 7.99,
    year: 2006,
    title: "Bloga dukte",
    pagecount: 250,
  },
  {
    isbn: 9786098233391,
    price: 7.99,
    year: 2015,
    title: "Mergina kuria jis pazinojo",
    pagecount: 315,
  },
  {
    isbn: 9786099609324,
    price: 7.99,
    year: 2019,
    title: "Tapk ragana",
    pagecount: 150,
  },
  {
    isbn: 9786094792250,
    price: 6.99,
    year: 2007,
    title: "Sfera",
    pagecount: 450,
  },
  {
    isbn: 9786094792335,
    price: 9.99,
    year: 2019,
    title: "Mes susitinkame cia",
    pagecount: 500,
  },
  {
    isbn: 9786094273780,
    price: 7.99,
    year: 2019,
    title: "Sunaikinimas",
    pagecount: 509,
  },
  {
    isbn: 9786098233483,
    price: 12.99,
    year: 2018,
    title: "Artemide",
    pagecount: 199,
  },
  {
    isbn: 9786094273872,
    price: 4.99,
    year: 2015,
    title: "Fondas ir imperija",
    pagecount: 185,
  },
  {
    isbn: 9786094273902,
    price: 7.99,
    year: 2019,
    title: "Amzinybes fjordo pranasai",
    pagecount: 333,
  },
  {
    isbn: 9786094442742,
    price: 5.99,
    year: 2004,
    title: "Bejegiai",
    pagecount: 777,
  },
  {
    isbn: 9786094442940,
    price: 14.99,
    year: 2019,
    title: "Klajunai",
    pagecount: 172,
  },
  {
    isbn: 9786090404386,
    price: 7.99,
    year: 2015,
    title: "Mergina, kuri pakliuvo i voratinkli",
    pagecount: 356,
  },
];


  // let masyvas = []
  // for (let i in knygos){
  //   if (knygos[i].year > 2015){
  //           masyvas.push(knygos[i].title)
  //       }
  //   for (let a in knygos[i]){
  //       console.log(`${a} --> ${knygos[i][a]}`)
  //   }
  // }
  // console.log(masyvas)


// let moketa = [45,150,225]
// let arbata2 = []
// let total2 = []
// function arbatpinigiai(moketa) {
//   moketa.forEach((element) => {
//     let arbata = 0
//     let total = 0
//     if (pinigai<50){
//       arbata = pinigai*0.2
//       total = arbata + element
//       arbata2.push(arbata)
//       total2.push(total)
//     }else if (50<=element && element<200){
//       arbata = element*0,15
//       total = arbata+element
//       arbata2.push(arbata)
//       total2.push(total)
//     }else {
//       arbata = element*0,1
//       total = arbata+element
//       arbata2.push(arbata)
//       total2.push(total)
//     }
//   })
// };
// arbatpinigiai(moketa)
// console.log(arbata2); 
// console.log(total2); 



const questions1 = [
  {
    id: 1,
    question: "Kuri HTML versija yra naudojama šiuo metu?",
    answers: [
      { text: 2, isCorrect: false },
      { text: 5, isCorrect: true },
      { text: 7, isCorrect: false },
      { text: 3, isCorrect: false },
      { text: 8.3, isCorrect: false },
    ],
  },
  {
    id: 2,
    question:
      "Kokį HTML semantinį elementą parinktumėte tinklapio naujienai aprašyti?",
    answers: [
      { text: "<news>", isCorrect: false },
      { text: "<article>", isCorrect: true },
      { text: "<section>", isCorrect: false },
      { text: "<main>", isCorrect: false },
      { text: "Nėra teisingo atsakymo", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Kokią display reikšmę turi HTML a elementas pagal nutylėjimą?",
    answers: [
      { text: "inline", isCorrect: true },
      { text: "block", isCorrect: false },
      { text: "inline-block", isCorrect: false },
      { text: "table", isCorrect: false },
    ],
  },
  {
    id: 4,
    question:
      "Kuris selektorius yra teisingas norint stilių taikyti tik pdf failams?",
    answers: [
      { text: "a[href >='.pdf']", isCorrect: false },
      { text: "a[href $='.pdf']", isCorrect: false },
      { text: "a[href only ='.pdf']", isCorrect: false },
      { text: "a[href='.pdf']", isCorrect: true },
      { text: "Nėra teisingo atsakymo", isCorrect: false },
    ],
  },
  {
    id: 5,
    question:
      "Kokią klasę reikia priskirti HTML blokui, kad jis Bootstrap grid'e užimtų 5 stulpelius praleidžiant vieną stulpelį?",
    answers: [
      { text: ".columns-5-offset-1", isCorrect: false },
      { text: ".col-sm5-1", isCorrect: false },
      { text: ".col-sm-5 .col-offset-1", isCorrect: false },
      { text: ".col-sm-5 .col-sm-offset-1", isCorrect: true }, // ar tikrai?
    ],
  },
  {
    id: 6,
    question:
      "Kaip kintamajam antraste, kuriam priskirtas HTML elementas header pakeisti fono spalvą naudojant JavaScript?",
    answers: [
      { text: "antraste.style.background-color = 'tomato';", isCorrect: false },
      { text: "antraste.style.backgroundColor = 'tomato';", isCorrect: true },
      { text: "antraste.css.background-color= 'tomato';", isCorrect: false },
      { text: "Teisingo atsakymo nėra", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "Kaip importuoti išorinį scss failą į pagrindinį scss failą?",
    answers: [
      { text: "@include isorinis_failas", isCorrect: false },
      { text: "@add isorinis_failas", isCorrect: false },
      { text: "@import isorinis_failas", isCorrect: true },
      { text: "Nėra teisingo varianto", isCorrect: false },
    ],
  },
  {
    id: 8,
    question:
      "Kaip padaryt nuorodą į tėvinį html elementą a su tikslu aprašyti pseudo klasės :hover formatavimą?",
    answers: [
      { text: "extend a:hover", isCorrect: false },
      { text: "into a:hover", isCorrect: false },
      { text: "&:hover", isCorrect: true },
      { text: "@:hover", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "Kuris iš sąrašo nėra preprocesorius?",
    answers: [
      { text: "Ruby", isCorrect: true },
      { text: "SASS", isCorrect: false },
      { text: "LESS", isCorrect: false },
      { text: "Stylus", isCorrect: false },
      { text: "Nėra teisingo varianto", isCorrect: false },
    ],
  },
  {
    id: 10,
    question:
      "Kaip pasirinkti header elementą ir jį paslėpti naudojant jQuery?",
    answers: [
      { text: "$('header').diplayNone();", isCorrect: false }, //nezinau
      { text: "$('header').hide();", isCorrect: true },
      { text: "$('header').hideIt();", isCorrect: false },
      { text: "Nėra teisingo atsakymo.", isCorrect: false },
    ],
  },
  {
    id: 11,
    question: "Kokią template sistemą naudoja Drupal 8?",
    answers: [
      { text: "HTML", isCorrect: false },
      { text: "Smarty", isCorrect: false },
      { text: "Twig", isCorrect: true },
      { text: "PHP", isCorrect: false },
      { text: "Nėra teisingo varianto", isCorrect: false },
    ],
  },
  {
    id: 12,
    question: "Kuo skiriasi kintamieji let nuo var ?",
    answers: [
      { text: "Nesiskiria", isCorrect: false },
      {
        text: "Var yra globalus kintamasis naudojamas visoje funkcijoje, o let yra vietinis kintamasis, naudojamas blokuose",
        isCorrect: true,
      },
      {
        text: "Var kintamasis yra skirtas tik tekstiniams kintamiesiams aprašyti, o let numerių kintamiesiems",
        isCorrect: false,
      },
      {
        text: "Var naudojamas tuomet kai kintamojo ilgis ne didesnis nei 5 simboliai, o let, kuomet daugiau nei 5",
        isCorrect: false,
      },
      { text: "Nėra teisingo atsakymo", isCorrect: false },
    ],
  },
  {
    id: 13,
    question: "Kam naudojamas 'use strict'?",
    answers: [
      {
        text: "‘Use strict’ naudojimas apsaugo neleisdamas atlikti tam tikrų veiksmų ir suteikia daugiau išimčių",
        isCorrect: false,
      },
      {
        text: "Užkerta kelią klaidoms kai atliekami palyginti “nesaugūs” veiksami",
        isCorrect: false,
      },
      {
        text: "Išjungia painias ir blogai apgalvotas funkcijas",
        isCorrect: false,
      },
      { text: "Visi atsakymai tesisingi", isCorrect: true },
      { text: "Nėra teisingo atsakymo", isCorrect: false },
    ],
  },
  {
    id: 14,
    question: "Kodėl CSS vadinami pakopiniais stiliais?",
    answers: [
      { text: "Kodas rašomas pakopomis", isCorrect: false },
      {
        text: "Pakopos nusako, kuri taisyklė yra svarbesnė ir bus taikoma elementui",
        isCorrect: true,
      },
      {
        text: "Įjungus CSS pakopas, galima naudoti !important",
        isCorrect: false,
      },
      { text: "Teisingo atsakymo nėra", isCorrect: false },
    ],
  },
  {
    id: 15,
    question: "Koks metodas naudojamas, norint sužinoti masyvo ilgį JS?",
    answers: [
      { text: "count", isCorrect: false },
      { text: "length", isCorrect: true },
      { text: "valueOf", isCorrect: false },
      { text: "Nėra teisingo atsakymo", isCorrect: false },
    ],
  },
  {
    id: 16,
    question: "Kiek laiko duomenys saugomi local storage?",
    answers: [
      { text: "Iki perkraunant puslapį", isCorrect: false },
      { text: "Vieną parą", isCorrect: false },
      { text: "Vieną mėnesį", isCorrect: false },
      { text: "Metus laiko", isCorrect: false },
      { text: "Neturi galiojimo laiko", isCorrect: true },
    ],
  },
  {
    id: 17,
    question:
      "let kiekis = 12; \n" +
      "console.log(++kiekis); \n" +
      "Ką išves konsolėje?",
    answers: [
      { text: "undefined", isCorrect: false },
      { text: "12", isCorrect: false },
      { text: "13", isCorrect: true },
      { text: "Nieko", isCorrect: false },
    ],
  },
  {
    id: 18,
    question: "Koks metodas naudojamas eilutės duomenis konvertuoti į masyvą?",
    answers: [
      { text: "shift()", isCorrect: false },
      { text: "pop()", isCorrect: false },
      { text: "splice()", isCorrect: false },
      { text: "split()", isCorrect: true },
    ],
  },
  {
    id: 19,
    question:
      "function sveikas(){ \n" +
      ' let vardas="Jonas" \n' +
      "console.log(vardas)\n" +
      "} \n" +
      "sveikas();\n" +
      "Ką atspausdins konsolėje?",
    answers: [
      { text: "Jonas", isCorrect: true },
      { text: "vardas", isCorrect: false },
      { text: "sveikas", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "nieko", isCorrect: false },
    ],
  },
  {
    id: 20,
    question: "Kaip apibrėžiamas SASS kintamasis vardu spalva?",
    answers: [
      { text: "const sass spalva;", isCorrect: false },
      { text: "const spalva;", isCorrect: false },
      { text: "let spalva;", isCorrect: false },
      { text: "$spalva string", isCorrect: false },
      { text: "$spalva", isCorrect: true },
    ],
  },
];