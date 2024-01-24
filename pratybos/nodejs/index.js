
console.log("hello from front");

const getProducts = async ()=>{
const result = await fetch(`http://localhost:5000/cia/yra/mano/routas`,{
    method: "GET",
    headers: {
        "Content-Type": "aplication/json"
    }
}).then((response)=>{
    if (!response.ok) {
        throw new Error(`server responded with ${response.status}`);
    }
    return response.json();
})
.then((prod)=>{
    console.log(prod);
    for (let i in prod){
    const h1 = document.createElement("h1")
    h1.innerText=prod[i].title
    document.body.append(h1)
    }


})
.catch((error)=>{
    console.log("error", error.message);
})
// console.log(result);
// const data = await result.json()
// console.log(data);

}
// console.log(response.json);
getProducts()