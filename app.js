//randomizing functionality
function randomizeAll() {
    randomizeJunglePet();
}

function randomizeJunglePet() {
    let junglePetNr = Math.floor(Math.random() * 3);
    let junglePet;
    console.log(junglePetNr);
    if (junglePetNr == 0) {
        junglePet = document.getElementById("greenPet");
    } else if (junglePetNr == 1) {
        junglePet = document.getElementById("redPet");
    } else {
        junglePet = document.getElementById("bluePet");
    } 
    displayJunglePet(junglePet);
}



//displaying functionality
function displayJunglePet(junglePet) {
    let junglePetCont = document.getElementById("junglePet");
    let junglePetImg = document.createElement("IMG");
    junglePetImg.setAttribute("src", junglePet.src);
    junglePetImg.setAttribute("alt", junglePet.alt);
    if (junglePetCont.children.length < 1) {
        junglePetCont.appendChild(junglePetImg);
    }
    
}