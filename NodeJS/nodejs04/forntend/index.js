import { login } from "./modules/login.js";
import { mainPage } from "./modules/main.js";
import { footerF } from "./modules/footer.js";

if(localStorage.getItem("Token")===null){login()}
mainPage()
footerF()