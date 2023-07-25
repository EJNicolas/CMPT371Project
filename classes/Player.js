class Player {
    constructor(playerNum , radius, color) {
      this.playerNum = playerNum; //player number, can be used to identify multiple players from each other
      this.radius = radius  //radius of the dot that follow's around the player's mouse
      this.color = color  //player's color
      this.x = 0; //x pos
      this.y = 0; //y pos
      this.score = 0; //player score
    }
  
    draw(c) {
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      c.fillStyle = this.color
      c.fill()
    }

    setPosition(x, y){
      this.x = x
      this.y = y
    }

    getPlayerNum(){
      return this.playerNum
    }

  }