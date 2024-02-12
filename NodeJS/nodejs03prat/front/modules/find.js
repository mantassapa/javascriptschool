function findButton() {
    const body = document.querySelector("body")
    const buttonFind = document.getElementById("buttonFind")

    buttonFind.addEventListener("click", (ev)=>{
        ev.preventDefault()
        if(document.getElementById("DMButton")===null){
            const div = document.createElement("div")
            div.setAttribute("id", "DMButton")
            div.style.display="flex"
            div.style.justifyContent="center"
            div.style.marginBottom="50px"
            const buttonDire = document.createElement("button")
            const buttonMovie = document.createElement('button')
            buttonDire.innerText="Director"
            buttonMovie.innerText="Movie"
            body.append(div)
            div.append(buttonDire,buttonMovie) 
            //------------------Director-------------------------
            buttonDire.addEventListener("click", (ev)=>{
                if(document.getElementById("searchId")===null){
                    const div = document.createElement("div")
                    div.setAttribute("id", "searchId")
                    div.style.display="flex"
                    div.style.flexDirection="column"
                    div.style.justifyContent="center"
                    const inputName = document.createElement("input")
                    const buttonSearch = document.createElement('button')
                    const buttonShow = document.createElement('button')
                    buttonSearch.innerText="Search"
                    buttonShow.innerText="Show all"
                    body.append(div)
                    div.append(inputName,buttonSearch,buttonShow) 
    
                    buttonShow.addEventListener("click", (ev)=>{
                        ev.preventDefault()
                        if(document.getElementById("results")===null){
                        const div = document.createElement("div")
                        div.style.display="flex"
                        div.style.flexWrap="wrap"
                        div.style.border="solid"
                        div.style.width="210px"
                        div.style.borderColor="red"
                        div.setAttribute("id","results")
                        body.append(div)
                        const asyncfun = async() =>{
                            const almovies = await fetch(`http://localhost:5000/api/directors`);
                            const movies = await almovies.json()
                            movies.forEach(el => {
                                const insideDiv = document.createElement("div")
                                insideDiv.style.color="white"
                                insideDiv.innerHTML=`<h2>${el.firstname} ${el.lastname}</h2>
                                                    <h3>oscars:${el.oscars}</h3>
                                                    <h4>id:${el._id}</h4>`
                                div.append(insideDiv)
    
                            });
                        }
                        asyncfun()
                        }else{document.getElementById("results").remove()}
                    })
    
                    buttonSearch.addEventListener("click", (ev)=>{
                        ev.preventDefault()
                        if(document.getElementById("results")===null){
                        const div = document.createElement("div")
                        div.style.display="flex"
                        div.style.flexWrap="wrap"
                        div.style.border="solid"
                        div.style.width="210px"
                        div.style.borderColor="red"
                        div.setAttribute("id","results")
                        body.append(div)
                        const asyncfun = async() =>{
                            const almovies = await fetch(`http://localhost:5000/api/directors`);
                            const movies = await almovies.json()
                            movies.forEach(el => {
                                if(inputName.value===el.firstname||inputName.value===el.lastname||inputName.value===el._id){
                                const insideDiv = document.createElement("div")
                                insideDiv.style.color="white"
                                insideDiv.innerHTML=`<h2>${el.firstname} ${el.lastname}</h2>
                                                    <h3>oscars:${el.oscars}</h3>
                                                    <h4>id:${el._id}</h4>`
                                div.append(insideDiv)
                                }else{                      
                                    const insideDiv = document.createElement("div")
                                    insideDiv.style.color="white"
                                    insideDiv.innerHTML=`<h2>No Results</h2>`
                                    div.append(insideDiv)}
                            });
                        }
                        asyncfun()
                        }else{document.getElementById("results").remove()}
                    })
    
                    
    
                }else{
                    document.getElementById("searchId").remove()
                    if(document.getElementById("results")!==null){document.getElementById("results").remove()}}
            })
            //------------------Movie-------------------------
            buttonMovie.addEventListener("click", (ev)=>{
                if(document.getElementById("searchId")===null){
                    const div = document.createElement("div")
                    div.setAttribute("id", "searchId")
                    div.style.display="flex"
                    div.style.flexDirection="column"
                    div.style.justifyContent="center"
                    const inputName = document.createElement("input")
                    const buttonSearch = document.createElement('button')
                    const buttonShow = document.createElement('button')
                    buttonSearch.innerText="Search"
                    buttonShow.innerText="Show all"
                    body.append(div)
                    div.append(inputName,buttonSearch,buttonShow) 
    
                    buttonShow.addEventListener("click", (ev)=>{
                        ev.preventDefault()
                        if(document.getElementById("results")===null){
                        const div = document.createElement("div")
                        div.style.display="flex"
                        div.style.flexWrap="wrap"
                        div.style.border="solid"
                        div.style.width="210px"
                        div.style.borderColor="red"
                        div.setAttribute("id","results")
                        body.append(div)
                        const asyncfun = async() =>{
                            const almovies = await fetch(`http://localhost:5000/api/movies`);
                            const movies = await almovies.json()
                            movies.forEach(el => {
                                const insideDiv = document.createElement("div")
                                insideDiv.style.color="white"
                                insideDiv.innerHTML=`<h3>${el.title}</h3>
                                                    <h4>${el.genre}</h4>
                                                    <h4>${el.year}</h4>`
                                div.append(insideDiv)
    
                            });
                        }
                        asyncfun()
                        }else{document.getElementById("results").remove()}
                    })
    
                    buttonSearch.addEventListener("click", (ev)=>{
                        ev.preventDefault()
                        if(document.getElementById("results")===null){
                        const div = document.createElement("div")
                        div.style.display="flex"
                        div.style.flexWrap="wrap"
                        div.style.border="solid"
                        div.style.width="210px"
                        div.style.borderColor="red"
                        div.setAttribute("id","results")
                        body.append(div)
                        const asyncfun = async() =>{
                            const almovies = await fetch(`http://localhost:5000/api/movies`);
                            const movies = await almovies.json()
                            movies.forEach(el => {
                                if(inputName.value===el.title||inputName.value===el.genre||inputName.value===el.year||inputName.value===el.movieAuthor){
                                const insideDiv = document.createElement("div")
                                insideDiv.style.color="white"
                                insideDiv.innerHTML=`<h3>${el.title}</h3>
                                                    <h4>${el.genre}</h4>
                                                    <h4>${el.year}</h4>`
                                div.append(insideDiv)
                                }else{                      
                                    const insideDiv = document.createElement("div")
                                    insideDiv.style.color="white"
                                    insideDiv.innerHTML=`<h2>No Results</h2>`
                                    div.append(insideDiv)}
                            });
                        }
                        asyncfun()
                        }else{document.getElementById("results").remove()}
                    })
    
    
    
                }else{document.getElementById("searchId").remove()
                    if(document.getElementById("results")!==null){document.getElementById("results").remove()}}
            })
            //--------------------------------------
    
    
    
        }else{ 
            document.getElementById("DMButton").remove()
            if(document.getElementById("searchId")!==null){document.getElementById("searchId").remove()}
            if(document.getElementById("results")!==null){document.getElementById("results").remove()}}
    })
}

export {findButton}