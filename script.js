// Query selectors
// const gameboardDOM = document.querySelector("#gameboard");
const cells = document.querySelectorAll(".cell");

// IIFE Gameboard
const Gameboard = (function () {
	return {
		board: [null, null, null, null, null, null, null, null, null],
	};
})();

// Render the gameboard to DOM
const renderBoard = () => {
	for (const key in cells) {
		cells[key].textContent = Gameboard.board[key];
	}
};
renderBoard();

// IIFE DisplayController
const DisplayController = (function () {})();

function createPlayer(playerName, marker, isTurn) {
	return { playerName, marker, isTurn };
}
const playerOne = createPlayer("player One", "x", true);
const playerTwo = createPlayer("player Two", "o", false);

// Winning conditions to compare against
const winConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function placeMarker(marker) {
	if (Gameboard.board[key] == null) {
	}
}

// Determine play turn, take turn by placing marker then switch players turn
function takeTurn(position) {
	if (playerOne.isTurn == true) {
		Gameboard.board[position] = playerOne.marker;
		playerOne.isTurn = false;
		playerTwo.isTurn = true;
	} else if (playerTwo.isTurn == true) {
		Gameboard.board[position] = playerTwo.marker;
		playerTwo.isTurn = false;
		playerOne.isTurn = true;
	}
}

takeTurn(1);
takeTurn(3);
takeTurn(4);
console.log(Gameboard.board);

// Checking if board has 'x' or 'o' in the winning conditions subarrays

// function placeToken(token) {
// 	// if (
// 	// 	Gameboard.board[token] == Gameboard.board["x"] ||
// 	// 	Gameboard.board[token] == Gameboard.board["o"]
// 	// ) {
// 	// 	console.log("that space is taken");
// 	// }
// 	return {

//     }
// }

function game() {
	// Check which players turn it is (Start with playerOne)
	placeToken();
	// Player chooses array element to place their token
	// if board.arrayElement == '' place token ie board.arrayElement = player.token
	// Else if board.arrayElement == 'x' or 'o'
	// return null
}
