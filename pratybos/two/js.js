let x = 40
if (x >= 45) {
    console.log('tinkamas')
}
else{console.log('netinkamas')}


let z = 1
if (z<0){console.log('nelyginis')}
else if (z==0){console.log('nulis')}
else{console.log('lyginis')}

let c = 562
c >= 600 ? console.log('mokesciam uzteks') : console.log('neuzteks')

// pratybos antra skaidre~~~~~~~~~~~~~~

let vid = 10
let lan = 'geras'
if (vid>=8 && lan=='geras'){
    console.log(`jusu vidurkis, ${vid} ir lankomumas geras, stipendija gausi`)}
else{console.log(`deja, stipendija nepriklauso`)}

let sk1 = 6
let sk2 = 5
let sk3 = 6
if (sk1>sk2 && sk1>sk3){console.log(`${sk1} disesnis uz ${sk2} ir ${sk3}`)}
else if (sk2>sk1 && sk2>sk3){console.log(`${sk2} disesnis uz ${sk1} ir ${sk3}`)}
else if (sk3>sk1 && sk3>sk1){console.log(`${sk3} disesnis uz ${sk1} ir ${sk2}`)}

else if (sk1<sk2 && sk1<sk3){console.log(`${sk1} mazesnis uz ${sk2} ir ${sk3}`)}
else if (sk2<sk1 && sk2<sk3){console.log(`${sk2} mazesnis uz ${sk1} ir ${sk3}`)}
else if (sk3<sk1 && sk3<sk2){console.log(`${sk3} mazesnis uz ${sk1} ir ${sk2}`)}
else {console.log(`lygybe`)}


let atl = 950
let ved = 'ne'
if (atl>= 950 && ved=='ne'){console.log(`Sveikiname, jus gavote paskola!`)}
else if (atl>=1500 && ved=='taip'){`Paskola bus suteikta`}
else {console.log(`Kai uzdirbsi daugiau, ateik, pakalbesim`)}



// pratybos switch skaidre pirma~~~~~~~~~~~~~~~~~~~~

 let d = 5
switch (d){
    case 1:
        console.log('pirmadienis');
        break;
    case 2:
        console.log('antradienis');
        break;
    case 3:
        console.log('treciadienis');
        break;
    case 4:
        console.log('ketvirtadienis');
        break;
    case 5:
        console.log('penktadienis');
        break;
    case 6:
        console.log('sestadienis');
        break;
    case 7:
        console.log('sekmadienis');
        break;
    default:
        console.log('bandyk dar karta')
}

const m = prompt('iveskite menesio skaiciu')
switch(m){
    case "1":console.log('sausis');break;///turi ivesti i kabutes kad galetum naudoti iveti
    case "2":console.log('vasaris');break;
    case "3":console.log('kovas');break;
    case "4":console.log('balandis');break;
    case "5":console.log('geguze');break;
    case "6":console.log('birzelis');break;
    case "7":console.log('liepa');break;
    case "8":console.log('rugpjutis');break;
    case "9":console.log('rugsejis');break;
    case "10":console.log('sspalis');break;
    case "11":console.log('lapkritis');break;
    case "12":console.log('gruodis');break;
    default:console.log('netikamas skaicius');
}
let m1 = 'sausis'
switch(m1.toLowerCase){
    case 'sausis':console.log("1-as");break;
    case 'vasaris':console.log("2-as");break;
    case "kovas":console.log("3-as");break;
    case 'balandis':console.log("4-as");break;
    case 'geguze':console.log("5-as");break;
    case 'birzelis':console.log("6-as");break;
    case 'liepa':console.log("7-as");break;
    case 'rugpjutis':console.log("8-as");break;
    case 'rugsejis':console.log("9-as");break;
    case 'sspalis':console.log("10-as");break;
    case 'lapkritis':console.log("11-as");break;
    case 'gruodis':console.log("12-as");break;
    default:console.log('netikamas ivedimas');
}


let daytime = "morning"

switch(daytime.toLowerCase()){
    case "morning":
        console.log('labas rytas');
        break;
    case "day":
        console.log("laba diena");
        break;
    case "evening":
        console.log("labas vakaras");
        break;
    case "night":
        console.log('labanakt');
        break;
    default:
        console.log('neteisinga komanda')
}