//randomizing functionality
function randomizeAll() {
    
    randomizeJunglePet();
    randomizeSuppItem();
}

function randomizeJunglePet() {
    let junglePetList = document.getElementById("jungleStarterPets").children;
    let junglePetAmount = junglePetList.length;
    let junglePetNr = Math.floor(Math.random() * junglePetAmount);
    let junglePet = junglePetList[junglePetNr];
    console.log(junglePetNr);
    console.log(junglePet);
    displayJunglePet(junglePet);
}

function randomizeSuppItem() {
    let supportItemsList = document.getElementById("supportItems").children;
    let suppItemAmount = supportItemsList.length;
    let suppItemNr = Math.floor(Math.random() * suppItemAmount);
    let suppItem = supportItemsList[suppItemNr];
    displaySuppItem(suppItem);
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

function displaySuppItem(suppItem) {
    let suppItemCont = document.getElementById("suppItem");
    let suppItemImg = document.createElement("IMG");
    suppItemImg.setAttribute("src", suppItem.src);
    suppItemImg.setAttribute("alt", suppItem.alt);
    if (suppItemCont.children.length < 1) {
        suppItemCont.appendChild(suppItemImg);
    }   
}