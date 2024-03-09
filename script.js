// Query selectors
// const gameboardDOM = document.querySelector("#gameboard");
const cells = document.querySelectorAll(".cell");
const activePlayer = document.querySelector("#active-player");

// IIFE Gameboard
const Gameboard = (function () {
	return {
		board: [null, null, null, null, null, null, null, null, null],
	};
})();

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

// Handle flow of game
const Game = (function () {
	return {
		// Render the gameboard to DOM
		renderBoard: () => {
			for (const key in cells) {
				cells[key].textContent = Gameboard.board[key];
			}
		},
		// Determine play turn, take turn by placing marker if cell is empty then switch players turn
		handlePlayerTurn: function (position) {
			if (Gameboard.board[position] == null) {
				if (playerOne.isTurn == true) {
					Gameboard.board[position] = playerOne.marker;
					playerOne.isTurn = false;
					playerTwo.isTurn = true;
					activePlayer.textContent = "Player 2";
					activePlayer.style.color = "green";
				} else if (playerTwo.isTurn == true) {
					Gameboard.board[position] = playerTwo.marker;
					playerTwo.isTurn = false;
					playerOne.isTurn = true;
					activePlayer.textContent = "Player 1";
					activePlayer.style.color = "blue";
				}
			}

			Game.renderBoard();

			return {
				renderBoard: Game.renderBoard,
				handlePlayerTurn: Game.handlePlayerTurn,
			};
		},
	};
})();

// TO click cells and call playerturn
function handlePlayerClick() {
	cells.forEach((cell) => {
		cell.addEventListener("click", () => {
			// -1 to deal with Ids in the HTML
			Game.handlePlayerTurn(cell.id - 1);
			console.log(cell.id);
		});
	});
}
handlePlayerClick();

// TODO
function determineWinner() {
	for (let i = 0; i < winConditions.length; i++) {
		let [a, b, c] = winConditions[i];
		console.log(a);
		console.log(b);
		console.log(c);

		if (
			Gameboard.board[a] &&
			Gameboard.board[a] == Gameboard.board[b] &&
			Gameboard.board[a] == Gameboard.board[c]
		) {
			console.log("win");
		}
	}
}
determineWinner();

// So you have a list of 3 indices that you want to confirm have the same non-null value in your board?
