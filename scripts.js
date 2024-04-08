/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

const MCLAREN_URL = "https://media.cnn.com/api/v1/images/stellar/prod/170509161442-mclaren-720s.jpg?q=w_2187,h_1458,x_0,y_0,c_fill";
const AMG_GT_URL = "https://cdn-ds.com/stock/2021-Mercedes-Benz-AMG-GT-AMG-GT-Black-Series-Charlotte-NC/seo/ECL3587-W1KYJ8BA9MA041785/sz_271104/6a23aba3ce6905fa6d599e78e90fecf2.jpg";
const URUS_URL = "https://anrky.com/wp-content/uploads/2020/01/ANRKY-Wheels-Lamborghini-Urus-AN30-SeriesTHREE_49101914761_o.jpg";
const XB7_URL = "https://www.insidehook.com/wp-content/uploads/2023/10/2023-bmw-alpina-xb7-suv.jpg?fit=1200%2C800";
const CYBER_TRUCK_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Cybertruck-fremont-cropped.jpg/640px-Cybertruck-fremont-cropped.jpg";
const CAYMAN_URL = "https://www.pcarmarket.com/static/media/uploads/galleries/photos/uploads/galleries/2007-cayman-s-miami-blue/.thumbnails/IMG_20200618_181211.jpg/IMG_20200618_181211-tiny-2048x0-0.5x0.jpg";
const CULLINAN_URL = "https://images.clickdealer.co.uk/vehicles/3377/3377661/large2/70955337.jpg";
const C8_URL = "https://www.motortrend.com/uploads/2021/09/001-2021-chevrolet-corvette-stingray-c8-passenger-side-front-three-quarter-roof.jpg";
const RCF_URL = "https://static01.nyt.com/images/2016/02/10/multimedia/drvien-2016-lexus-rcf-alt/drvien-2016-lexus-rcf-superJumbo.jpg";
const FOCUS_URL = "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/rGlyXO6w-v0rg_Dc5Nl-(edit).jpg?t=169802074830";

let carData = [
    { title: "Mclaren 720s", imageURL: MCLAREN_URL },
    { title: "Mercedes AMG GT", imageURL: AMG_GT_URL },
    { title: "Lambirghini Urus", imageURL: URUS_URL },
    { title: "BMW Aplina XB7", imageURL: XB7_URL },
    { title: "Tesla Cyber Truck", imageURL: CYBER_TRUCK_URL },
    { title: "Porsche Cayman", imageURL: CAYMAN_URL },
    { title: "Rolls Royce Cullinan", imageURL: CULLINAN_URL },
    { title: "Chevy C8", imageURL: C8_URL },
    { title: "Lexus RCF", imageURL: RCF_URL },
    { title: "Ford Focus RS", imageURL: FOCUS_URL }
];

let funFacts = [
    "It was the first supercar car I drove",
    "It had a very load sounding exhaust",
    "I drove one on my first day as valet",
    "Surprisingly cost 100K+",
    "It was the first one to be parked on property",
    "It was a manual and I unfortunately stalled it",
    "The floor matts in the car looked like grass",
    "It's my favorite american sports car",
    "It's my brothers car",
    "I wanted one back in high school"
];

function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    carData.forEach(function(car, index) {
        const nextCard = templateCard.cloneNode(true); 
        let funFact = funFacts[index];
        editCardContent(nextCard, car.title, car.imageURL, funFact); 
        cardContainer.appendChild(nextCard); 
    });
}

function editCardContent(card, newTitle, newImageURL, funFact) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = "Description of " + newTitle + ": " + newImageURL;

    const funFactElement = card.querySelector(".fun-fact");
    funFactElement.textContent = funFact;

    console.log("new card:", newTitle, "- html: ", card);
}

document.addEventListener("DOMContentLoaded", showCards);

function removeLastCard() {
    carData.pop();
    funFacts.pop();
    showCards(); 
}

function addCarFromInput() {
    let carNameInput = document.getElementById("carName");
    let funFactInput = document.getElementById("funFact");
    let carDescriptionInput = document.getElementById("carDescription");

    let carName = carNameInput.value.trim();
    let funFact = funFactInput.value.trim();
    let description = carDescriptionInput.value.trim();

    if (carName !== "" && funFact !== "") {
        let newCar = { title: carName, imageURL: description }; 
        carData.push(newCar);
        funFacts.push(funFact);
        showCards();

        carNameInput.value = "";
        funFactInput.value = "";
        carDescriptionInput.value = "";
    } else {
        alert("Please enter both a car name and a fun fact.");
    }
}
