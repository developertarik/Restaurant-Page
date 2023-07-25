import AboutMe from "./about";
import contactMe from "./contact";
import contact from "./contact";


function component( ){
    const element = document.createElement("div");
    const topNav = document.createElement("div");
    const para = document.createElement("p");
    const about = document.createElement("a");
    const main = document.createElement("a");
    const contact = document.createElement("a");
    about.innerText = "About";
    main.innerText = "Main";
    contact.innerText ="contact";
   para.innerText  ="An easy and delicious Chicken Kebab recipe. This recipe includes a tasty yoghurt marinade. These chicken kebab skewers are so versatile, they can be grilled, baked in the oven or cooked on the BBQ. A new healthy version of your favourite Greek takeaway.   "
    const header = document.createElement("h1");
    header.innerText = "Chicken Kebab"
    //Element Style
    element.style.display = "flex";
    element.style.flexDirection = "column";
    element.style.justifyContent = "center";
    element.style.alignItems ="center";
    element.style.margin = "auto";
    //Img
    const MyImg = new Image(500,300)
    MyImg.src = ("../dist/chicken.jpg")
    //button
    about.addEventListener("click",()=>{
        header.innerText ="About Page";
        MyImg.src = ("../dist/about.jpg");
                            
    });
    contact.addEventListener("click",()=>{
        header.innerText = "Contact Page";
        MyImg.src = ("../dist/contact.jpg");

    })

    //button events
    // btn.addEventListener("click",()=>{

    // })
    // btnC.addEventListener("click",()=>{

    // })

    //top navs
    topNav.style.backgroundColor = "blue";
    topNav.style.display = "flex";
    topNav.style.flexDirection = "row";
    topNav.style.gap = "50px";
    
    topNav.appendChild(about)
    topNav.appendChild(contact)
        //element append childs
    element.appendChild(topNav)
    element.appendChild(header)
    element.appendChild(MyImg)
    element.appendChild(para)


return element
}
 document.body.appendChild(component());