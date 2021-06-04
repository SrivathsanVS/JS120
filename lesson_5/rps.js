let readline = require('readline-sync');

const EMPTY_BOARD = {
  1: '', 2: '', 3: '',
  4: '', 5:'', 6: '',
  7: '', 8: '', 9: ''
};

const WINNING_COMBINATIONS = {
  'r1': [1, 2, 3],
  'r2': [4, 5, 6],
  'r3': [7, 8, 9],
  'c1': [1, 4, 7],
  'c2': [2, 5, 8],
  'c3': [3, 6, 9],
  'd1': [1, 5, 9],
  'd2': [3, 5, 7]
};

function constructCombinationString(board, combination) {
  return WINNING_COMBINATIONS[combination].map(num => board[num]).sort().join();
}

class Moderator {
    userInput(question, permissibleChoices) {
    }
    selectPlayerTypes() {

    }
    declareResult() {

    }
    playAgain() {

    }

}

class Scorer {
  constructor() {
    this.availableWinningCombinations = Object.keys(WINNING_COMBINATIONS);
    this.moveCount = 0;
    this.isEndOfGame = 0;
    this.isTied = 0;
    this.isWon = 0;
    this.coarseFilterThreshold = 4;
  }
  filterCombinations(board) {
    let combinationsToDelete = [];
    for (let i in this.availableWinningCombinations) {
      if (this.constructCombinationString(board, this.availableWinningCombinations[i]) === 'OX') {
        combinationsToDelete.push(i);
      }
    };
    this.deleteCombinations(combinationsToDelete);
  }
  detectTie() {
    this.isTied = (this.availableWinningCombinations.length === 0);
  }
  detectWin(board, lastMove) {
    Object.keys(this.availableWinningCombinations).forEach(combination => {
      if (lastMove in WINNING_COMBINATIONS[combination]) continue;
      if (this.constructCombinationString(board, combination) in ['OOO', 'XXX']) {
        this.isWon = true;
        break;
      }
    });
  }
  update(board) {
    this.detectWin(board, lastMove);
    this.filterCombinations(board);
    this.detectTie();
  }
  detectEndOfGame() {
    return this.isTied || this.isWon;
  }
}

class GamePlay {
  constructor() {
    this.moderator = new Moderator();
    [this.firstPlayer, this.secondPlayer] = this.createPlayers();
    this.activePlayer = this.firstPlayer;
    this.matchIsTied = false;
    this.matchIsWon = false;
    this.winner = None;
    this.scorer = new Scorer();
    this.movesPlayed = [];
    this.initializeBoard();
  }
  displayBoard() {
    console.log(` ${this.board[1]} | ${this.board[2]} | ${this.board[3]} `);
    console.log(` - + - + - `);
    console.log(` ${this.board[4]} | ${this.board[5]} | ${this.board[6]} `);
    console.log(` - + - + - `);
    console.log(` ${this.board[7]} | ${this.board[8]} | ${this.board[9]} `);
  }
  togglePlayer() {
    this.activePlayer = [this.firstPlayer, this.secondPlayer][this.activePlayer.marker === 'X'];
  }
  gamePlay() {
    while (!this.scorer.detectEndOfGame()) {
      let lastMove = this.activePlayer.play(this.board);
      this.updateBoard(lastMove);
      this.scorer.update(this.board, lastMove);
      this.togglePlayer();
    }
    this.declareResult();
  }
  matchPlay() {
    do {
      this.gamePlay();
    } while (playAgain());
  }
}
class Player {
  constructor(marker) {
    this.marker = marker;
  }
  play(board) {
    this.move = Math.random(1, 9);
    this.board[this.move] = this.marker;
    return this.move;
  }
}

class Human extends Player {
  constructor(marker) {
    super(marker);
  }
  play() {
  }
}

class Computer extends Player {
  constructor(marker) {
    super(marker);
    this.availableCombinationsForTile = {
      1: ['r1', 'd1', 'c1'],
      2: ['r1', 'c2'],
      3: ['r1', 'd2', 'c3'],
      4: ['r2', 'c1'],
      5: ['r2', 'c2', 'd1', 'd2'],
      6: ['r2', 'c3'],
      7: ['r3', 'c1', 'd2'],
      8: ['r3', 'c2'],
      9: ['r3', 'd1', 'c3']
    };
  }
  play(board) {
    let move = i;
    let maxTileScore = 0;
    Object.keys(this.availableCombinationsForTile).forEach(tile => {
      let tileScore = this.computeTileScore(board, tile);
      if (tileScore > maxTileScore) {
        move = tile;
        maxTileScore = tileScore;
      }
    });
    return move;
    // tile rating = combination score + winning possibility + opponent's winning possibility
  }
  computeTileScore(board, tile) {
    this.availableCombinationsForTile[tile].reduce((score, combination) => {
      let combinationString = constructCombinationString(board, combination);
      return score +
      (1 - this.isMixed(combinationString)) +
      winningPossibility(combinationString) +
      opponentWinningPossibility(combinationString);
    }, 0);
  }
}
