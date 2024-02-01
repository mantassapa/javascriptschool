


const body = document.querySelector("body")
body.style.width="100%"
const header = document.createElement("header")
header.style.display="flex"
header.style.justifyContent="center"
header.style.flexWrap="wrap"
header.style.marginBottom="50px"
const buttonFind = document.createElement('button')
buttonFind.innerText="Find"
const buttonEdit = document.createElement('button')
buttonEdit.innerText="Edit"
body.append(header)
header.append(buttonFind, buttonEdit)

// buttonFind.addEventListener("click", (ev)=>{
//     ev.preventDefault()
//     if(document.getElementById("searchId")===null){
//         const div = document.createElement("div")
//         div.setAttribute("id", "searchId")
//         div.style.display="flex"
//         div.style.flexDirection="column"
//         div.style.justifyContent="center"
//         const inputName = document.createElement("input")
//         const buttonSearch = document.createElement('button')
//         buttonSearch.innerText="Search"
//         body.append(div)
//         div.append(inputName,buttonSearch) 

        
//     }else{document.getElementById("searchId").remove()}
// })
if(document.getElementById("searchId")===null){
    const div = document.createElement("div")
    div.setAttribute("id", "searchId")
    div.style.display="flex"
    div.style.flexDirection="column"
    div.style.justifyContent="center"
    const inputName = document.createElement("input")
    const buttonSearch = document.createElement('button')
    buttonSearch.innerText="Search"
    body.append(div)
    div.append(inputName,buttonSearch) 
    buttonSearch.addEventListener("click", (ev)=>{
        ev.preventDefault()
        const asyncfun = async() =>{
            const almovies = await fetch(`http://localhost:5000/api/movies`);
            const movies = await almovies.json()
            console.log(movies)
            movies.forEach(el => {
                
                console.log(el.title);
            });
        }
        asyncfun()

    })

        
}else{document.getElementById("searchId").remove()}