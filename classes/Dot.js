class Dot {
    constructor(owner, x, y) {
        this.owner = owner; //player who made the dot
        this.x = x; //x pos
        this.y = y; //y pos
        this.color = owner.color    //color of the dot, should match the owner's color
        this.radius = 5 //size of dot, should probably not hard code this
    }

    draw(c) {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }

    getOwner(){
        return this.owner
    }
}