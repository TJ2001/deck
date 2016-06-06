var suits = ['hearts', 'spades', 'diamonds', 'clubs']
var cards = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

suits.forEach(function(suit){
  cards.forEach(function(card){
     $('ul').append("<li>" + card + " of " + suit + "</li>");
  })
});
