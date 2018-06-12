export { cards };

const QUEEN = "queen";
const KING = "king";
const HEARTS = "hearts";
const DIAMONDS = "diamonds";

var cards = [
    _getCard(QUEEN, HEARTS),
    _getCard(QUEEN, DIAMONDS),
    _getCard(KING, HEARTS),
    _getCard(KING, DIAMONDS)
];

function _getCard(rank, suit) {
    return {
        rank: rank,
        suit: suit,
        image: _getImagePath(rank, suit)
    };
}

function _getImagePath(rank, suit) {
    return `images/${rank}-of-${suit}.png`;
}