import AboutMe from "./about";
import contactMe from "./contact";
import contact from "./contact";


function component(){
    const element = document.createElement("div");
    const btn = document.createElement("button");
    const btnC  = document.createElement("button")
    element.innerHTML = "This developer a good developer bro";
    btnC.innerText = "Contact "
    btn.innerHTML = "About";
btn.onclick = AboutMe;
btnC.onclick = contactMe;
element.appendChild(btn)
element.appendChild(btnC)
return element
}
document.body.appendChild(component());