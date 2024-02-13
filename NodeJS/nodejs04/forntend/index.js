import { login } from "./modules/login.js";
import { mainPage } from "./modules/main.js";

if(localStorage.getItem("Token")===null){login()}
mainPage()