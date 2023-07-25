class Square {
    constructor(x, y, l) {
        this.x = x; //x pos
        this.y = y; //y pos
        this.l = l  //square length
        this.locked = false;    //locked is if the player has fully colored it in
        this.owner = null;  //the player who owns this square
    }

    draw(c) {
        if(this.locked){    //fill in the square with the owner's color if its locked
            c.beginPath()
            c.lineWidth = "4";
            c.strokeStyle = 'black'
            c.fillStyle = this.owner.color
            c.rect(this.x, this.y, this.l, this.l)
            c.stroke()
            c.fill()
        } else{ //show outline only
            c.beginPath()
            c.lineWidth = "4";
            c.strokeStyle = 'black'
            c.rect(this.x, this.y, this.l, this.l)
            c.stroke()
        }
    }

    setOwner(player){
        this.owner = player
    }

    getOwner(){
        return this.owner
    }

    lockSquare(player){
        this.locked = true
        this.owner = player
    }

    unlockSquare(){
        this.locked = false
        this.owner = null
    }

    //checks if some position is inside this square
    checkCollision(x, y){
        if(this.x < x && x < this.x + this.l && this.y < y && y < this.y + this.l){
            return true
        } else {
            return false
        }
    }


}