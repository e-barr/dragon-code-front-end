const stepSize = 50//window.innerHeight / grid.length;
const eventPiecesArray = []

class Character {
  constructor(startingX=0, startingY=0){
    this.element = document.createElement('img');
    this.speed = 10;
    this.assets= 'assets/character',
    this.movement = null
    this.element.src = `${this.assets}/static.gif`
    this.element.style.position = 'absolute'
    this.xLocation = startingX
    this.yLocation = startingY
    this.futureXLocation = startingX
    this.futureYLocation = startingY
    this.element.style.left = `${this.xLocation}px`
    this.element.style.top = `${this.yLocation}px`
    this.element.style.width = "50px"
    document.body.appendChild(this.element)
  }

  futureLocation(direction) {
    this.futureXLocation = this.xLocation
    this.futureYLocation = this.yLocation

    if (direction === "right") {
      this.futureXLocation += stepSize
    } else if (direction === "up") {
      this.futureYLocation -= stepSize
    } else if (direction === "left") {
      this.futureXLocation -= stepSize
    } else if (direction === "down") {
      this.futureYLocation += stepSize
    }
  }

  checkEventPieces(eventPiecesArray) {
    let collisionFlag = false
    console.log(`x: ${this.futureXLocation}, y: ${this.futureYLocation}`)
    eventPiecesArray.forEach(locationTuple => {
      console.log(locationTuple)
      if (collisionFlag == false && locationTuple[0] == this.futureXLocation && locationTuple[1] == this.futureYLocation) {
        console.log("collision!");
        collisionFlag = true
      }
    })
    console.log(collisionFlag);
    return collisionFlag
  }

  stepDirection(direction){
    this.futureLocation(direction)
    let collisionFlag = this.checkEventPieces(eventPiecesArray)

    return new Promise( resolve => {
      if (direction === "right" && !collisionFlag) {
        this.walkEast()
        this.xLocation += stepSize
      } else if (direction === "up" && !collisionFlag) {
        this.walkNorth()
        this.futureYLocation -= stepSize
      } else if (direction === "left" && !collisionFlag) {
        this.walkWest()
        this.futureXLocation -= stepSize
      } else if (direction === "down" && !collisionFlag) {
        this.walkSouth()
        this.futureYLocation += stepSize
      }

      setTimeout( () => {
        this.stop();
        resolve()
      }, stepSize / this.speed * 100)
    })

  }

  walkEast(){
    this.stop()
    this.movement = setInterval(()  =>{
      let currentPosition = parseInt(this.element.style.left)
      this.element.style.left = currentPosition + 1 + 'px'
    }, this.speed)
    this.element.src = `${this.assets}/walkright.gif`
  }

  walkWest(){
    this.stop()
    this.movement = setInterval(()  => {
      let currentPosition = parseInt(this.element.style.left)
      this.element.style.left = currentPosition - 1 + 'px'
    }, this.speed)
    this.element.src = `${this.assets}/walkleft.gif`
  }

  walkNorth(){
    this.stop()
    this.movement = setInterval(()  =>{
      let currentPosition = parseInt(this.element.style.top)
      this.element.style.top = currentPosition - 1 + 'px'
    }, this.speed)
    this.element.src = `${this.assets}/walkup.gif`
  }

  walkSouth(){
    this.stop()
    this.movement = setInterval(()  =>{
      let currentPosition = parseInt(this.element.style.top)
      this.element.style.top = currentPosition + 1 + 'px'
    }, this.speed)
    this.element.src = `${this.assets}/walkdown.gif`
  }

  stop(){
    clearInterval(this.movement)
    this.movement = null
    this.element.src = `${this.assets}/static.gif`
  }
}

document.addEventListener("DOMContentLoaded", () => {
  function renderBoxes(numBoxes) {
    for (let i=0; i < numBoxes; i++) {
      let box = document.createElement('img')
      box.src = 'assets/eventpieces/closed_chest.png'
      box.style.position = 'absolute'
      box.xLocation = 50 * Math.round(Math.random() * 10)
      box.yLocation = 50 * Math.round(Math.random() * 10)
      box.style.left = `${box.xLocation}px`
      box.style.top = `${box.yLocation}px`
      document.body.appendChild(box)
      eventPiecesArray.push([box.xLocation, box.yLocation])
    }
  }

  renderBoxes(5)
  char = new Character(200, 200)

  function moveCharacter(e) {
    console.log(char.element.style.left, char.element.style.top)

    if (!char.movement) {
      if (e.keyCode == 39) {
        e.preventDefault()
        char.stepDirection("right")
      } else if (e.keyCode == 40) {
        e.preventDefault()
        char.stepDirection("down")
      } else if (e.keyCode == 37) {
        e.preventDefault()
        char.stepDirection("left")
      } else if (e.keyCode == 38) {
        e.preventDefault()
        char.stepDirection("up")
      }
    }
  }


  window.addEventListener('keydown', e => moveCharacter(e))
})
