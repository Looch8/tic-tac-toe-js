// Query selectors
const gameboardDOM = document.querySelector("#gameboard");
const cells = document.querySelectorAll(".cell");

// IIFE Gameboard
const Gameboard = (function () {
	return {
		board: [null, "o", "x", "o", "x", "x", "o", "x", "o"],
	};
})();

// Render the gameboard to DOM
const renderBoard = (() => {
	for (const key in cells) {
		cells[key].textContent = Gameboard.board[key];
	}
})();

// IIFE DisplayController
const DisplayController = (function () {})();

console.log(Gameboard);

function createPlayer(playerName, token, isTurn) {
	return { playerName, token, isTurn };
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
