const stepSize = 1//window.innerHeight / grid.length;
const eventPiecesArray = []

class Character {
  constructor(startingX=0, startingY=0){
    this.element = document.createElement('img');
    this.speed = 10;
    this.assets= 'assets/character',
    this.movement = null
    this.element.src = `${this.assets}/static.gif`
    this.element.style.position = 'absolute'
    this.x = startingX
    this.y = startingY
    this.element.style.width = "50px"
    this.element.style.height = "50px"
    document.body.appendChild(this.element)
  }
  
  get x(){
    return parseInt(this.element.style.left)
  }
  
  set x(value){
    this.element.style.left = value + 'px'
  }
  
  get y(){
    return parseInt(this.element.style.top)
  }
  
  set y(value){
    this.element.style.top = value + 'px'
  }
  
  get height() {return parseInt(this.element.style.height)}
  
  set height(value) {this.element.style.height = value + 'px'}
  
  get width() {return parseInt(this.element.style.width)}
  
  set width (value) {this.element.style.width = value + 'px'}
  
  //note change all to NESW

  futureLocation(direction) {
    let futureXLocation = this.x
    let futureYLocation = this.y
  
    if (direction === "right") {
      futureXLocation += stepSize
    } else if (direction === "up") {
      futureYLocation -= stepSize
    } else if (direction === "left") {
      futureXLocation -= stepSize
    } else if (direction === "down") {
      futureYLocation += stepSize
    }
    
    return { futureXLocation, futureYLocation }
  }

  checkEventPieces(eventPiecesArray, direction) {
    let collisionFlag = false
    let { futureXLocation, futureYLocation } = this.futureLocation(direction)
    let myLeft = futureXLocation
    let myRight = futureXLocation + parseInt(this.element.style.width)
    let myTop = futureYLocation
    let myBottom = futureYLocation + parseInt(this.element.style.width)
    
    eventPiecesArray.forEach(pageObject => {
      let pageObjectLeft = pageObject.x
      let pageObjectRight = pageObject.x + pageObject.width
      let pageObjectTop = pageObject.y
      let pageObjectBottom = pageObject.y + pageObject.height
      
      if (
        
        ((myLeft >= pageObjectLeft && myLeft <= pageObjectRight) || (myRight >= pageObjectLeft && myRight <= pageObjectRight) || (myLeft <= pageObjectLeft && myRight >= pageObjectRight)) 
          &&
        ((myTop <= pageObjectBottom && myTop >= pageObjectTop) || (myBottom <= pageObjectBottom && myBottom >= pageObjectTop) || (myTop <= pageObjectTop && myBottom >= pageObjectBottom))
      ) {
        collisionFlag = true
      }
    })
    return collisionFlag
  }

  walkRight(){
    this.stop()
    this.movement = setInterval(()  =>{
      if(!this.checkEventPieces(eventPiecesArray, 'right')) this.x += 1;
    }, this.speed)
    this.element.src = `${this.assets}/walkright.gif`
  }

  walkLeft(){
    this.stop()
    this.movement = setInterval(()  => {
      if(!this.checkEventPieces(eventPiecesArray, 'left'))  this.x -= 1
    }, this.speed)
    this.element.src = `${this.assets}/walkleft.gif`
  }

  walkUp(){
    this.stop()
    this.movement = setInterval(()  =>{
      if(!this.checkEventPieces(eventPiecesArray, 'up')) this.y -= 1
    }, this.speed)
    this.element.src = `${this.assets}/walkup.gif`
  }

  walkDown(){
    this.stop()
    this.movement = setInterval(()  =>{
      if(!this.checkEventPieces(eventPiecesArray, 'down')) this.y += 1
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
      box.style.width = "30px"
      document.body.appendChild(box)
      eventPiecesArray.push({x: box.x, y: box.y, width: parseInt(box.style.width), height: parseInt(box.style.width)})
    }
  }

  function renderCharacters() {
    let wizard = document.createElement('img')
    wizard.src = 'assets/eventpieces/wizard.gif'
    wizard.style.position = 'absolute'
    wizard.xLocation = 50 * Math.round(Math.random() * 10)
    wizard.yLocation = 50 * Math.round(Math.random() * 10)
    wizard.style.left = `${wizard.xLocation}px`
    wizard.style.top = `${wizard.yLocation}px`
    wizard.style.width = "60px"
    document.body.appendChild(wizard)
    
    let minotaur = document.createElement('img')
    minotaur.src = 'assets/eventpieces/minotaur.gif'
    minotaur.style.position = 'absolute'
    minotaur.xLocation = 50 * Math.round(Math.random() * 10)
    minotaur.yLocation = 50 * Math.round(Math.random() * 10)
    minotaur.style.left = `${minotaur.xLocation}px`
    minotaur.style.top = `${minotaur.yLocation}px`
    minotaur.style.width = "50px"
    document.body.appendChild(minotaur)
    
    let dragon = document.createElement('img')
    dragon.src = 'assets/eventpieces/dragon.gif'
    dragon.style.position = 'absolute'
    dragon.xLocation = 50 * Math.round(Math.random() * 10)
    dragon.yLocation = 50 * Math.round(Math.random() * 10)
    dragon.style.left = `${dragon.xLocation}px`
    dragon.style.top = `${dragon.yLocation}px`
    dragon.style.width = "90px"
    document.body.appendChild(dragon)
  }

  renderBoxes(5)
  renderCharacters()
  char = new Character(200, 200)

  function moveCharacter(e) {
    if (!char.movement) {
      if (e.key == 'ArrowUp') {
        e.preventDefault()
        char.walkUp()
      } else if (e.key == "ArrowRight") {
        e.preventDefault()
        char.walkRight()
      } else if (e.key == "ArrowDown") {
        e.preventDefault()
        char.walkDown()
      } else if (e.key == "ArrowLeft") {
        e.preventDefault()
        char.walkLeft()
      }
    }
  }

  function stopCharacter(){
    char.stop()
  }

  window.addEventListener('keydown', e => moveCharacter(e))
  window.addEventListener('keyup', e => stopCharacter())
})
