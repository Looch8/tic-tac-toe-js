// IIFE Gameboard
const Gameboard = (function () {
	const board = ["", "", "", "", "", "", "", "", ""];
	return {
		board,
	};
})();

console.log(Gameboard);

function createPlayer(playerName, token) {
	return { playerName, token };
}
const playerOne = createPlayer("player One", "x", true);
const playerTwo = createPlayer("player Two", "o", false);

console.log(playerOne.token);

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

Gameboard.board[8] = "o";
Gameboard.board[4] = "o";
Gameboard.board[0] = "o";

// Checking if board has 'x' or 'o' in the winning conditions subarrays
const checkWin = function () {
	for (let i = 0; i < winConditions.length; i++) {
		if (
			Gameboard.board[winConditions[i][0]] == "x" &&
			Gameboard.board[winConditions[i][1]] == "x" &&
			Gameboard.board[winConditions[i][2]] == "x"
		) {
			console.log("Player One Wins!");
		} else if (
			Gameboard.board[winConditions[i][0]] == "o" &&
			Gameboard.board[winConditions[i][1]] == "o" &&
			Gameboard.board[winConditions[i][2]] == "o"
		) {
			console.log("Player Two Wins!");
		}
	}
};
checkWin();

console.log(winConditions);

console.log(Gameboard);

console.log(playerOne, playerTwo);

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

// IIFE DisplayController
// const DisplayController = (function () {})();

// You’re going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects, and you’re probably going to want an object to control the flow of the game itself.
// Your main goal here is to have as little global code as possible. Try tucking as much as you can inside factories. If you only need a single instance of something (e.g. the gameboard, the displayController etc.) then wrap the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances.
// In this project, think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects. Take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!
// If you’re having trouble, Building a house from the inside out is a great article that lays out a highly applicable example both of how you might approach tackling this project as well as how you might organize and structure your code.
