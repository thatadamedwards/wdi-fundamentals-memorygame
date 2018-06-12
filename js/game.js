export { createBoard }

let cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You Found a match!");
    } else {
        alert("Sorry, try again");
    }
}

function flipCard() {
    var cardId = this.getAttribute('data-id');

    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].image);
    console.log(cards[cardId].suit);

    cardsInPlay.push(cards[cardId].rank);

    this.setAttribute('src', cards[cardId].image);

    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
}

function createBoard(cards) {
    for (var index = 0; index < cards.length; index++) {
        const cardElement = document.createElement('img');

        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', index);

        cardElement.addEventListener("click", flipCard);

        document.getElementById('game-board').appendChild(cardElement);
    }
}