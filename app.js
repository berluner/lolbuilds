//randomizing functionality
function randomizeAll() {
    randomizeJunglePet();
    randomizeSuppItem();
    randomizeAdcItem();
}

function randomizeJunglePet() {
    let junglePetList = document.getElementById("jungleStarterPets").getElementsByTagName('img');
    let junglePetAmount = junglePetList.length;
    let junglePetNr = Math.floor(Math.random() * junglePetAmount);
    let junglePet = junglePetList[junglePetNr];
    let jungleCont = "junglePet";
    displaySpecialItems(junglePet, jungleCont);
}

function randomizeSuppItem() {
    let supportItemsList = document.getElementById("supportItems").getElementsByTagName('img');
    let suppItemAmount = supportItemsList.length;
    let suppItemNr = Math.floor(Math.random() * suppItemAmount);
    let suppItem = supportItemsList[suppItemNr];
    let suppCont = "suppItem";
    displaySpecialItems(suppItem, suppCont);
}

function randomizeAdcItem() {
    let adcItemsList = document.getElementById("legendaryItemlist").getElementsByTagName('img');
    let adcItemAmount = adcItemsList.length;
    let adcItemNr = Math.floor(Math.random() * adcItemAmount);
    let adcItem = adcItemsList[adcItemNr];
    let adcCont = "adcItem";
    displaySpecialItems(adcItem, adcCont);
}

//displaying functionality
function displaySpecialItems(item, itemContainerId) {
    let specialItemCont =  document.getElementById(itemContainerId);
    let specialItemImg = document.createElement("IMG");
    specialItemImg.setAttribute("src", item.src);
    specialItemImg.setAttribute("title", item.title);
    console.log(specialItemImg);
    if (specialItemCont.children.length < 1) {
        specialItemCont.appendChild(specialItemImg);
        let imageTitle = document.createElement("div");
        imageTitle.innerHTML = specialItemImg.title;
        imageTitle.setAttribute("class", "itemname");
        specialItemCont.appendChild(imageTitle);
    } 
}
