const cardContainer = document.querySelector('.card-container');
const cards = Array.from(cardContainer.querySelectorAll('.card'));


const shuffleButton = document.getElementById('shuffle');

shuffleButton.addEventListener('click', () => {
  cards.forEach((card) => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    cardContainer.insertBefore(card, cardContainer.children[randomIndex]);
  });
});


const sortButton = document.getElementById('sort');


const sortCards = () => {
  cards.sort((a, b) => a.textContent - b.textContent);
  cardContainer.append(...cards); 
};


sortButton.addEventListener('click', sortCards);
