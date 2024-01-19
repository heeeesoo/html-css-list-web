// const data = require('./cardData.json')
// import cardData from '../utils/data/cardData.json'
// const cardData = require('../utils/data/cardData.json')
import cardData from '/utils/data/cardData.json' assert{ type: "json"} ;

// Function to create a card element
function createCard(card) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const imgElement = document.createElement('img');
    imgElement.alt = card.title;
    imgElement.src = card.imageUrl;
    imgElement.classList.add('card-img-top');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = card.title;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = card.text;

    const btnElement = document.createElement('a');
    btnElement.href = './details/index.html'; 
    btnElement.classList.add('btn', 'btn-primary');
    btnElement.textContent = card.btnText;

    btnElement.addEventListener('click', function(event) {
        // You can prevent the default behavior if needed
        event.preventDefault();

        // Navigate to the link URL
        window.location.href = this.href;
    });


    // Appending elements to build the card structure
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(btnElement);

    cardElement.appendChild(imgElement);
    cardElement.appendChild(cardBody);

    cardContainer.appendChild(cardElement);

    return cardContainer;
}

// Function to add cards to the container
function addCardsToContainer(containerId, cardData) {
    const container = document.getElementById(containerId);

    cardData.forEach(card => {
        const cardElement = createCard(card);
        container.appendChild(cardElement);
    });
}

// Call the function to add cards to the container
addCardsToContainer('cardListContainer', cardData);

function addEventImg(elementId){
    const navImg = document.getElementById(elementId);
    navImg.href = './index.html'; 

    navImg.addEventListener('click', function(event) {
        // You can prevent the default behavior if needed
        event.preventDefault();

        // Navigate to the link URL
        window.location.href = this.href;
    });
};

addEventImg('nav-img')

