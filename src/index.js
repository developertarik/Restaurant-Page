import AboutMe from "./about";
import contactMe from "./contact";
import contact from "./contact";


function component( ){
    const element = document.createElement("div");
    const topNav = document.createElement("div");
    const about = document.createElement("a");
    const contact = document.createElement("a");
    about.innerText = "about";
   
    const header = document.createElement("h1");
    header.innerText = "Chicken Kebab"
    //Element Style
    element.style.display = "flex";
    element.style.flexDirection = "column";
    element.style.justifyContent = "center";
    element.style.alignItems ="center";
    element.style.margin = "auto";
    //Img
    const MyImg = new Image(100,200)
    MyImg.src = ("../dist/chicken.jpg")
    //button
    about.addEventListener("click",()=>{
        header.innerText ="About Page";
                            
    });

    //button events
    // btn.addEventListener("click",()=>{

    // })
    // btnC.addEventListener("click",()=>{

    // })
    //element append childs
    topNav.appendChild(about)
    topNav.appendChild(contact)
    element.appendChild(topNav)
    element.appendChild(header)
    element.appendChild(MyImg)

return element
}
 document.body.appendChild(component());