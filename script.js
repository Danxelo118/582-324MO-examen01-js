// Veuillez écrire votre JavaScript ici


// insérer les images
const image1 = document.createElement("img");
image1.src = "./ne_pas_modifier/images/cyberpunk.jpg";
var src = document.getElementById("choix0");
src.appendChild(image1);
image1.alt = "cyberpunk";


const image2 = document.createElement("img");
image2.src = "./ne_pas_modifier/images/starfield.jpg";
var src = document.getElementById("choix1");
src.appendChild(image2);
image2.alt = "baldurs-gate";


const image3 = document.createElement("img");
image3.src = "./ne_pas_modifier/images/baldurs-gate.jpg";
var src = document.getElementById("choix2");
src.appendChild(image3);
image3.alt = "starfield";


// Faire apparaître bouton
image1.addEventListener("click", () => {
    if(getComputedStyle(bouton).display != "none"){
        bouton.style.display = "none"; 
    } else {
        bouton.style.display = "block"; 
    }
  })

  image2.addEventListener("click", () => {
    if(getComputedStyle(bouton).display != "none"){
        bouton.style.display = "none";
    } else {
        bouton.style.display = "block";
    }
  })

  image3.addEventListener("click", () => {
    if(getComputedStyle(bouton).display != "none"){
        bouton.style.display = "none";
    } else {
        bouton.style.display = "block";
    }
  })

  bouton.addEventListener("click", () => {
    bouton.parentNode.removeChild(bouton);
  })

  function cliquerImage1 () {
    let textNode = document.createTextNode("Hélas, ce n'est pas la bonne réponse."); document.body.appendChild(textNode);
  }




/*
  let textNode = document.createTextNode("Hélas, ce n'est pas la bonne réponse."); document.body.appendChild(textNode);


  const para = document.createElement("p");
const textNode = document.createTextNode("Hello World");
para.appendChild(textNode);

*/