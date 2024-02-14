"use strict"

function footerF(){
    const body = document.querySelector("body")
    const footer = document.createElement("footer")
    footer.style.width="100%"
    footer.style.height="200px"
    footer.style.backgroundColor="rgba(103, 0, 0, 0.6)"
    
    body.append(footer)
}


export {footerF}