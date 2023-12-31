
import {AboutMe} from "./about.js" 
import{contactMe} from "./contact.js"

function component() {
  const element = document.createElement("div");
  const topNav = document.createElement("div");
  const para = document.createElement("p");

   const main = document.createElement("a");
  const contact = document.createElement("a");
  const about = document.createElement("a");


  //box
  const boxContainer = document.createElement("div");
  const box1 = document.createElement("div");
  const box2 = document.createElement("div");
  const box3 = document.createElement("div");

  main.innerText = "Main";
  about.innerText = "About";

  contact.innerText = "Contact";
  para.innerText = "Main";
  para.style.textAlign = "center";
  
  const header = document.createElement("h1");
  header.innerText = "Chicken Kebab";
  //box
  boxContainer.style.display = "flex";
  boxContainer.style.flexDirection = "column";
  boxContainer.style.gap = "50px";
  boxContainer.style.background = "dodgerblue";
  boxContainer.style.padding = "50px";
  boxContainer.style.borderRadius ="10px";
  boxContainer.style.textAlign = "center";
  boxContainer.style.fontStyle = "italic";
  //box1
  box1.style.width = "300px";
  box1.style.height = "200px";
  box1.style.background = "purple";
  box1.style.color = "white";
  box1.innerText ="Chicken Kebab";
  //box2
  box2.style.width = "300px";
  box2.style.height = "200px";
  box2.style.background = "purple";
  box2.style.color = "white";
  box2.innerText ="Delicious Food";

  //box3
  box3.style.width = "300px";
  box3.style.height = "200px";
  box3.style.background = "purple";
  box3.style.color = "white";
  box3.innerText ="Sweet";

  //Element Style
  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";
  element.style.margin = "auto";
  //Img
  const MyImg = new Image(500, 300);
  MyImg.src = "../dist/chicken.jpg";
  //button
 
  contact.addEventListener("click",()=>contactMe)
  about.addEventListener("click",()=>AboutMe)
  main.addEventListener("click", () => {
    MyImg.src = "../dist/chicken.jpg";
 
    header.innerText = "Chicken Kebab";
    box1.innerText ="Chicken Kebab";
    box2.innerText ="Delicious Food";
    box3.innerText ="Sweet";
  });
  //top navs
  topNav.style.backgroundColor = "black";
  topNav.style.padding = "20px";
  topNav.style.color = "white";
  topNav.style.display = "flex";
  topNav.style.flexDirection = "row";
  topNav.style.gap = "50px";
  topNav.appendChild(main);
  topNav.appendChild(about);
  topNav.appendChild(contact);

  //box container
  //element append childs
  boxContainer.appendChild(box1);
  boxContainer.appendChild(box2);
  boxContainer.appendChild(box3);

  element.appendChild(topNav);
  element.appendChild(header);
  element.appendChild(MyImg);
  element.appendChild(para);
  element.appendChild(boxContainer);

  return element;
}
document.body.appendChild(component());
