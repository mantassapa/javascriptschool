"use strict"
// antros skaidres 1. uzduotis-----------
let suma = 0
function vidurkis(sk1,sk2,sk3){
    let vid = (sk1+sk2+sk3)/3
    console.log(vid)
    return vid
}
vidurkis(9,8,9)
// 2. uzduotis--------------------------
function stipendija(vidurkis){
    if (vidurkis>=8){
        console.log('gaus')}
    else{
        console.log('negaus')}
}
stipendija(vidurkis(8,8,8))