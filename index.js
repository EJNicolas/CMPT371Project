const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

let playerCount = 1
const localPlayer = new Player(playerCount, 10, 'red')
const players = []
const dots = []
const squares = []

let animationId
let isDrawing = false
let x;
let y;

//change these to adjust how many rows, columns and size of the squares will be
let rows = 8
let columns = 18
let squareLength = 100

function createGrid(){
    for (let i = squareLength; i < squareLength * columns; i+=squareLength){
        for(let q = squareLength; q < squareLength * rows; q+=squareLength){
            squares.push(new Square(i, q, squareLength))
        }
    }
}

function start() {
    players.push(localPlayer)
    createGrid()
}

//draw dots, players and squares. Runs every frame so could use this to update game logic too
function update(){
    frameId = requestAnimationFrame(update)

    c.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < dots.length; i++){
        dots[i].draw(c)
    }

    for (let i = 0; i < players.length; i++){
        players[i].draw(c)
    }

    for (let i = 0; i < squares.length; i++){
        squares[i].draw(c)
        // if(squares[i].checkCollision(localPlayer.x, localPlayer.y) && isDrawing){

        // }
    }
}

//event listener for clicking checks if the local player is starting to draw
canvas.addEventListener("mousedown", (e) => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
});

//event listener for moving mouse around
canvas.addEventListener("mousemove", (e) => {
    //adds a new dot to the dots array to be drawn
    if (isDrawing) {
        x = e.offsetX;
        y = e.offsetY;
        dots.push(new Dot(localPlayer, x, y, localPlayer.color))
    }

    //constantly update's the local player's position
    localPlayer.x = e.offsetX
    localPlayer.y = e.offsetY
});

//event listener for releasing click. Stops the local player from drawing
canvas.addEventListener("mouseup", (e) => {
    if (isDrawing) {
        dots.push(new Dot(localPlayer, x, y, localPlayer.color))
        isDrawing = false;
    }
});

//run methods
start()
update()
