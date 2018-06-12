export { createBoard }

let _cards = [];
let _cardsInPlay = [];

function _setCards(cards) {
    if (!!cards && Array.isArray(cards)) {
        _cards = cards;
    } else {
        console.warn("cards must be a defined, non-null, array of Card objects");
    }
}

function _checkForMatch() {
    if (_cardsInPlay[0] === _cardsInPlay[1]) {
        alert("You Found a match!");
    } else {
        alert("Sorry, try again");
    }
}

function _flipCard() {
    var cardId = this.getAttribute('data-id');

    console.log("User flipped " + _cards[cardId].rank);
    console.log(_cards[cardId].image);
    console.log(_cards[cardId].suit);

    _cardsInPlay.push(_cards[cardId].rank);

    this.setAttribute('src', _cards[cardId].image);

    if (_cardsInPlay.length === 2) {
        _checkForMatch();
    }
}

function createBoard(cards) {
    _setCards(cards);

    for (var index = 0; index < cards.length; index++) {
        const cardElement = document.createElement('img');

        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', index);

        cardElement.addEventListener("click", _flipCard);

        document.getElementById('game-board').appendChild(cardElement);
    }
}