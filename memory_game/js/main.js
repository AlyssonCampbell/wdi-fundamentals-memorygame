var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png",
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png",
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png",
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png",
    }
];
var cardsInPlay = [];
var checkForMatch = function () {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again.");
        }
    } else {
        return;
    }
}
var flipCard = function () {
    var cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    console.log("User flipped " + cards[cardId].suit);
    console.log("User flipped " + cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
    this.setAttribute('src', cards[cardId].cardImage);
}
var createBoard = function () {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        document.getElementById('game-board').appendChild(cardElement);
        cardElement.addEventListener('click', flipCard);
    }
}
createBoard();