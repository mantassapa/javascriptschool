"use strict"
//pratybos, pavyzdziai
// let person = {
//     name: 'sam',
//     age: 33,
//     job: 'officer'
// }
// for (let key in person){
//     console.log(key,":",person[key])
// }

let person = {
    name: 'sam',
    age: 33,
    job: 'officer',
    hobies: {
        1: "swimming",
        2: "reading",
        3: 'skating'
    }       
}
for (let i in person.hobies){
    let hoby = person.hobies[i]
    console.log(`my hoby is ${hoby}`)
}

for (let i in person){
    if (i === "hobies"){
        for (let hoby in person[i]){
            console.log(`my hoby is: ${person[i][hoby]}`)
        }
    }
}