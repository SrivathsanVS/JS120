let readline = require('readline-sync');

function prompt(question = '', input = false) {
  if (input) return readline.question(question);
  readline.question(question);
  return undefined;
}

function solicitAndValidateChoice(question, validChoices,
  formatter = ''.toLowerCase) {
  let response = formatter.call(prompt(question, true));
  while (!validChoices.includes(response)) {
    prompt("Invalid choice. Please hit enter and try again");
    response = formatter.call(prompt(question, true));
  }
  return response;
}

function randomIndexPick(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function createAndShuffleDeck() {
  let cardValues = ['2', '3', '4', '5',
    '6', '7', '8', '9', '10'].concat(['J', 'Q', 'K', 'A']);
  let suits = ['♠', '♥', '♦', '♣'];
  let cardDeck = [];
  for (let valIndex in cardValues) {
    let cardVal = cardValues[valIndex];
    for (let suitIndex in suits) {
      let suit = suits[suitIndex];
      cardDeck.splice(randomIndexPick(cardDeck.length),
        0,
        {cardVal: cardVal, suit: suit});
    }
  }
  return cardDeck;
}

const GAME_WIN_SCORE = 21;
const ACE_MIN_VAL = 1;
const ACE_MAX_VAL = 11;
const FACE_CARD_VAL = 10;


function decideAceVal(currentPlayerScore) {
  if (currentPlayerScore + ACE_MAX_VAL > GAME_WIN_SCORE) return ACE_MIN_VAL;
  return ACE_MAX_VAL;
}
function isFaceCard(cardVal) {
  if (['J', 'Q', 'K'].includes(cardVal)) return true;
  return false;
}
function isAce(cardVal) {
  return (cardVal === 'A');
}

let playerPrototype = {
  play: function() {
    if (this.isBusted() || this.isStay()) return false;
    this.status = this.continueDrawingLogic();
    if (this.status === 'hit') {
      this.announceContinuedPlay();
      return true;
    }
    this.announceStay();
    return false;
  },
  announceContinuedPlay: function() {
    prompt(`${this.playerType} chose to hit.`);
  },
  announceStay: function() {
    prompt(`${this.playerType} chose to stay.`);
  },
  continueDrawingLogic: function() {
    return 'hit';
  },
  assignCardAndIncrementScore: function(cardObj) {
    this.cards.push(cardObj);
    this.scoreUpdate(cardObj.cardVal);
  },
  updateBustStatus: function() {
    if (this.score > GAME_WIN_SCORE) this.status = 'bust';
  },
  scoreUpdate: function(cardVal) {
    if (isAce(cardVal)) {
      this.score += decideAceVal(this.score);
    } else if (isFaceCard(cardVal)) {
      this.score += FACE_CARD_VAL;
    } else {
      this.score += Number(cardVal);
    }
    this.updateBustStatus();
  },
  isBusted: function() {
    return (this.status === 'bust');
  },
  isStay: function() {
    return (this.status === 'stay');
  },
  setOrderofPlay: function(order) {
    this.orderOfPlay = order;
  },
  announcePlay: function() {
    prompt(`${this.playerType}'s turn to play.`);
  },
  constructCardString: function() {
    return this.cards.map(cardElem => `${cardElem.cardVal}${cardElem.suit}`).join(', ');
  },
  showCards: function() {
    console.log("Cards : ");
    prompt(this.constructCardString());
  },
  isHuman: function() {
    return this.playerType.includes('Human');
  },
  init(playerType) {
    this.playerType = playerType;
    this.score = 0;
    this.cards = [];
    this.status = 'hit';
    return this;
  }
};

let Scorer = {
  detectTie: function() {
    return ((this.player1.score === GAME_WIN_SCORE) &&
      (this.player2.score === GAME_WIN_SCORE));
  },
  detectWinner: function() {
    this.winner = (this.player1.score > this.player2.score) ?
      this.player1 : this.player2;
  },
  detectEndOfGame: function() {
    return (this.atleastOneBust() || this.bothPlayersStay());
  },
  bothPlayersStay: function() {
    return (this.player1.isStay() && this.player2.isStay());
  },
  atleastOneBust: function() {
    return (this.player1.isBusted() || this.player2.isBusted());
  },
  detectWinnerDueToBust: function() {
    this.winner = [this.player1,
      this.player2][Number(this.player1.isBusted())];
    this.bustedPlayer = [this.player1,
      this.player2][Number(this.player2.isBusted())];
  },
  declareResult: function() {
    if (this.bothPlayersStay()) {
      if (this.detectTie()) return 'tie';
      this.detectWinner();
      return 'win';
    }
    this.detectWinnerDueToBust();
    return 'win';
  },
  displayScores: function() {
    console.log(`${this.player1.playerType}:`);
    this.player1.showCards();
    console.log("Score:", this.player1.score);
    // console.log(this.player1.isBusted());
    console.log(`${this.player2.playerType}:`);
    this.player2.showCards();
    console.log("Score:", this.player2.score);
    // console.log(this.player2.isBusted());
  },
  announceResult: function() {
    let result = this.declareResult();
    if (result === 'tie') {
      prompt("Game tied! Everyone's a winner!");
    } else if (this.atleastOneBust()) {
      prompt(`${this.bustedPlayer.playerType} has gone bust! ${this.winner.playerType} wins!`);
    } else if (result === 'win') {
      prompt(`${this.winner.playerType} wins!`);
    } else {
      prompt(`Unclear result : ${result}`);
    }
  },
  init(gameFormat, player1 = {}, player2 = {}) {
    this.gameFormat = gameFormat;
    this.player1 = player1;
    this.player2 = player2;
    this.gameScores = {};
    this.gameScores[this.player1.playerType] = 0;
    this.gameScores[this.player2.playerType] = 0;
    return this;
  }
};

let HumanPlayer = Object.create(playerPrototype).init('Human');
let ComputerPlayer = Object.create(playerPrototype).init('Computer');
HumanPlayer.showCards = function() {
  console.log("Your cards : ");
  console.log(this.constructCardString());
};
ComputerPlayer.showCards = function() {
  console.log("Computer's cards : ");
  console.log(this.constructCardString());
};

HumanPlayer.continueDrawingLogic = function() {
  this.showCards();
  let [question, choices] = ["Do you wish to open another card (Y/N) ?",
    ['y', 'yes', 'n', 'no']];
  let response = solicitAndValidateChoice(question, choices);
  return ['stay', 'hit'][Number(response.includes('y'))];
};
ComputerPlayer.continueDrawingLogic = function(riskLimit = 3) {
  if (this.score < GAME_WIN_SCORE - FACE_CARD_VAL + riskLimit) return 'hit';
  return 'stay';
};

let matchPlayPrototype = {
  init(gameFormat) {
    this.cardDeck = createAndShuffleDeck();
    this.gameFormat = gameFormat;
    return this;
  },
  solicitUserInputForPlayerCreation: function() {
    let question = "Choose first player : (c for comp / h for human): ";
    let firstPlayer = solicitAndValidateChoice(question,
      ['c', 'h', 'computer', 'human']);
    let secondPlayer = (firstPlayer === 'c') ? 'h' : 'c';
    return [firstPlayer, secondPlayer];
  },
  createPlayers: function() {
    let [player1, player2] = this.solicitUserInputForPlayerCreation();
    this.firstPlayer = this.createPlayer(player1);
    this.firstPlayer.setOrderofPlay('first');
    this.secondPlayer = this.createPlayer(player2);
    this.secondPlayer.setOrderofPlay('second');
  },
  createPlayer: function(playerType) {
    if (playerType === 'c') return Object.create(ComputerPlayer);
    return Object.create(HumanPlayer);
  },
  togglePlayer: function() {
    this.activePlayer = (this.activePlayer.orderOfPlay === 'first') ?
      this.secondPlayer :
      this.firstPlayer;
  },
  drawCard: function() {
    let randomPick = Math.floor(Math.random() * this.cardDeck.length);
    return this.cardDeck.splice(randomPick, 1)[0];
  },
  assignInitialCards: function() {
    for (let index = 0; index < 2; index++) {
      this.firstPlayer.assignCardAndIncrementScore(this.drawCard());
      this.secondPlayer.assignCardAndIncrementScore(this.drawCard());
    }
  },
  displayPlayers: function() {
    prompt(`${this.firstPlayer.playerType}`);
    prompt(`${this.secondPlayer.playerType}`);
  },
  displayCards: function() {
    console.log(this.firstPlayer.playerType);
    console.log(this.firstPlayer.cards);
    console.log(this.firstPlayer.score);
    console.log(this.secondPlayer.playerType);
    console.log(this.secondPlayer.cards);
    console.log(this.secondPlayer.score);
  },
  setupScorer: function() {
    this.scorer = Object.create(Scorer).init(this.gameFormat,
      this.firstPlayer,
      this.secondPlayer);
  },
  showHumanCards: function() {
    let humanPlayer = [this.firstPlayer,
      this.secondPlayer][Number(this.secondPlayer.isHuman())];
    humanPlayer.showCards();
  },
  runGame: function() {
    console.clear();
    this.createPlayers();
    this.assignInitialCards();
    this.showHumanCards();
    this.activePlayer = this.firstPlayer;
    this.setupScorer();
    console.clear();
    while (!this.scorer.detectEndOfGame()) {
      this.activePlayer.announcePlay();
      while (this.activePlayer.play()) {
        this.activePlayer.assignCardAndIncrementScore(this.drawCard());
      }
      this.togglePlayer();
      console.clear();
    }
    this.scorer.displayScores();
    this.scorer.announceResult();
  },
  displayDeck: function(numCards = 5) {
    console.log(this.cardDeck.slice(0, numCards));
  }
};
let newMatch = Object.create(matchPlayPrototype).init('game');
// newMatch.displayDeck(52);
newMatch.runGame();
