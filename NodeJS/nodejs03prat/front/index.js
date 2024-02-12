import { findButton } from "./modules/find.js"
import { editButton } from "./modules/edit.js"

const body = document.querySelector("body")
body.style.width="97%"
body.style.backgroundColor="black"
body.style.paddingLeft="10px"
body.style.paddingRight="10px"
body.style.margin="10px"
const header = document.createElement("header")
header.style.display="flex"
header.style.justifyContent="center"
header.style.flexWrap="wrap"
header.style.marginBottom="50px"
const buttonFind = document.createElement('button')
buttonFind.innerText="Find"
buttonFind.setAttribute("id", "buttonFind")
const buttonEdit = document.createElement('button')
buttonEdit.innerText="Edit"
buttonEdit.setAttribute("id", "buttonEdit")
body.append(header)
header.append(buttonFind, buttonEdit)

findButton()
editButton()