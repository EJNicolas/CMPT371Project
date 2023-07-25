const colors = ['red', 'lavender', 'green', 'rose', 'torquise', 'yellow']

class Player {
    constructor(playerNum , radius, color) {
      this.playerNum = playerNum; //player number, can be used to identify multiple players from each other
      this.radius = radius  //radius of the dot that follow's around the player's mouse
      this.color = colors[(playerNum % colors.length)-1]; // Cycle through colors array / player's color
      this.x = 0; //x pos
      this.y = 0; //y pos
      this.score = 0; //player score
      this.image = new Image();
      this.image.src = `../assets/pencil-${this.color}.png`;
    }
  
    draw(c) {
      const scaleFactor = 3; // make pencil bigger
      const shiftAmount = -20; //shift diagonally up to match cursor point
      c.drawImage(this.image, this.x - this.radius * scaleFactor - shiftAmount, this.y - this.radius * scaleFactor + shiftAmount, this.radius * 2 * scaleFactor, this.radius * 2 * scaleFactor);
  }

    setPosition(x, y){
      this.x = x
      this.y = y
    }

    getPlayerNum(){
      return this.playerNum
    }

  }