import AboutMe from "./about";
import contactMe from "./contact";
import contact from "./contact";

function component() {
  const element = document.createElement("div");
  const topNav = document.createElement("div");
  const para = document.createElement("p");

  const about = document.createElement("a");
  const main = document.createElement("a");
  const contact = document.createElement("a");

  //box
  const boxContainer = document.createElement("div");
  const box1 = document.createElement("div");
  const box2 = document.createElement("div");
  const box3 = document.createElement("div");

  about.innerText = "About";
  main.innerText = "Main";
  contact.innerText = "contact";
  para.innerText = "Main";
  para.style.textAlign = "center";
  
  const header = document.createElement("h1");
  header.innerText = "Chicken Kebab";
  //box
  boxContainer.style.display = "flex";
  boxContainer.style.gap = "50px";
  boxContainer.style.background = "white";
  boxContainer.style.padding = "30px";

  //box1
  box1.style.width = "200px";
  box1.style.height = "100px";
  box1.style.background = "purple";
  box1.style.color = "white";
  box1.innerText ="Chicken Kebab";
  //box2
  box2.style.width = "200px";
  box2.style.height = "100px";
  box2.style.background = "purple";
  box2.style.color = "white";
  box2.innerText ="Delicious Food";

  //box3
  box3.style.width = "200px";
  box3.style.height = "100px";
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
  about.addEventListener("click", () => {
    header.innerText = "About Page";
    MyImg.src = "../dist/about.jpg";
    box1.innerText = "About Page this chicken foods";
    box2.innerText  ="this brand a good brand";
    box3.innerText =  "hey i love chicken";
    para.innerText = "About";
});
  contact.addEventListener("click", () => {
    header.innerText = "Contact Page";
    MyImg.src = "../dist/contact.jpg";
    box1.innerText = "E mail : notrealmail@gmail.com ";
    box2.innerText  ="Phone number : XXX 000 XXX";
    box3.innerText =  "Adress : World";
    para.innerText = "Contact";
  });
  main.addEventListener("click", () => {
    MyImg.src = "../dist/chicken.jpg";
 
    header.innerText = "Chicken Kebab";
    box1.innerText ="Chicken Kebab";
    box2.innerText ="Delicious Food";
    box3.innerText ="Sweet";



  });
  //default box styles
 
  //button events
  // btn.addEventListener("click",()=>{

  // })
  // btnC.addEventListener("click",()=>{

  // })

  //top navs
  topNav.style.backgroundColor = "black";
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
