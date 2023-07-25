/*
 *  Each element in the array represents a square on the game board.
 *  0 = empty square
 *  -n = a player with ID n is currently drawing on this square
 *  n = a player with ID n of the player who owns this square
*/

// Game board data
const rows = 8;
const columns = 18;
var gameboard;

// Initialize game data
function initGame()
{
    gameboard = new Array(rows);
    for (var i = 0; i < rows; i++)
    {
        gameboard[i] = new Array(columns);
        for (var j = 0; j < columns; j++)
        {
            gameboard[i][j] = 0;
        }
    }
}

// Check if a player can draw on square
// Returns 1 if player can draw, 0 if the square is already occupied, 
// -1 if square is being drawn on by another player
function canDraw(row, column)
{
    if (gameboard[row][column] == 0)
        return 1;
    else if (gameboard[row][column] < 0)
        return -1;
    else
        return 0;
}

// Set a square to be drawn on by a player
function startDrawing(row, column, playerID)
{
    gameboard[row][column] = -playerID;
}

// Claim a square for a player
// Retunrs true if successful, false if the square invalid
function claimSquare(row, column, playerID)
{
    if(gameboard[row][column] == -playerID)
    {
        gameboard[row][column] = playerID;
        return true;
    }
    return false;
}

// Debug: Print current gameboard state
function printGameboard()
{
    var occupied = 0;
    var free = 0;


    console.log("=======================================");
    for (var i = 0; i < rows; i++)
    {
        process.stdout.write('| ');
        for (var j = 0; j < columns; j++)
        {
            if(gameboard[i][j] == 0)
                free++;
            else
                occupied++;
            process.stdout.write(`${gameboard[i][j]} `);
        }
        process.stdout.write('|\n');
    }
    console.log("=======================================");
    console.log(`Occupied squares: ${occupied}, Free squares: ${free}`);
}

initGame();
printGameboard();

module.exports = {
    initGame,
    printGameboard,
    canDraw,
    startDrawing,
    claimSquare
};