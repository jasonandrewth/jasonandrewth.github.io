class Snake {
  constructor(maxLength) {
    // where we do setup
    this.points = []
    this.maxLength = maxLength
    this.time = 0
  }
  
  push(point) {
    this.points.push(point)
    this.points = this.points.slice(-1 * this.maxLength)
  }
  
  draw() {
    noFill()
    strokeWeight(4)
    stroke("#000000")
    
    beginShape()
   	this.points.forEach(point => {
      vertex(point.x, point.y)
    })
    endShape()
    
  }
}