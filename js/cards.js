export { cards };

const QUEEN = "queen";
const KING = "king";
const HEARTS = "hearts";
const DIAMONDS = "diamonds";

var cards = [
    getCard(QUEEN, HEARTS),
    getCard(QUEEN, DIAMONDS),
    getCard(KING, HEARTS),
    getCard(KING, DIAMONDS)
];

function getCard(rank, suit) {
    return {
        rank: rank,
        suit: suit,
        image: getImagePath(rank, suit)
    };
}

function getImagePath(rank, suit) {
    return `images/${rank}-of-${suit}.png`;
}