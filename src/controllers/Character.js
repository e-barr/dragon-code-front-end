const stepSize = 1//window.innerHeight / grid.length;

class Character extends GameObject {
  constructor(options){
    super(options)
    let { speed } = options;
    this.speed = speed;
    this.movement = null
    window.addEventListener('keydown', e => this.move(e))
    window.addEventListener('keyup', e => this.stop())
  }


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

  checkEventPieces(direction) {
    let collisionFlag = false
    let { futureXLocation, futureYLocation } = this.futureLocation(direction)
    let myLeft = futureXLocation
    let myRight = futureXLocation + parseInt(this.element.style.width)
    let myTop = futureYLocation
    let myBottom = futureYLocation + parseInt(this.element.style.width)

    GameObject.all.forEach(pageObject => {
      if(pageObject === this) return;
      let pageObjectLeft = pageObject.x
      let pageObjectRight = pageObject.x + pageObject.width
      let pageObjectTop = pageObject.y
      let pageObjectBottom = pageObject.y + pageObject.height

      if (
        ((myLeft >= pageObjectLeft && myLeft <= pageObjectRight) || (myRight >= pageObjectLeft && myRight <= pageObjectRight) || (myLeft <= pageObjectLeft && myRight >= pageObjectRight))
          &&
        ((myTop <= pageObjectBottom && myTop >= pageObjectTop) || (myBottom <= pageObjectBottom && myBottom >= pageObjectTop) || (myTop <= pageObjectTop && myBottom >= pageObjectBottom))
      ) {
        pageObject.emit('collision', this)
        // note: ask Josh why emit is not a function when run in this scope

        if (!pageObject.passThrough) {
          collisionFlag = true
        }
      }
    })
    return collisionFlag
  }

  walkRight(){
    this.stop()
    this.movement = setInterval(()  =>{
      if(!this.checkEventPieces('right')) this.x += 1;
    }, this.speed)
    this.element.src = `${this.assets}/walkright.gif`
  }

  walkLeft(){
    this.stop()
    this.movement = setInterval(()  => {
      if(!this.checkEventPieces('left'))  this.x -= 1
    }, this.speed)
    this.element.src = `${this.assets}/walkleft.gif`
  }

  walkUp(){
    this.stop()
    this.movement = setInterval(()  =>{
      if(!this.checkEventPieces('up')) this.y -= 1
    }, this.speed)
    this.element.src = `${this.assets}/walkup.gif`
  }

  walkDown(){
    this.stop()
    this.movement = setInterval(()  =>{
      if(!this.checkEventPieces('down')) this.y += 1
    }, this.speed)
    this.element.src = `${this.assets}/walkdown.gif`
  }

  stop(){
    clearInterval(this.movement)
    this.movement = null
    this.element.src = `${this.assets}/static.gif`
  }

  move(e) {
    if (!this.movement) {
      if (e.key == 'ArrowUp') {
        e.preventDefault()
        this.walkUp()
      } else if (e.key == "ArrowRight") {
        e.preventDefault()
        this.walkRight()
      } else if (e.key == "ArrowDown") {
        e.preventDefault()
        this.walkDown()
      } else if (e.key == "ArrowLeft") {
        e.preventDefault()
        this.walkLeft()
      }
    }
  }

  // stop(){
  //   this.stop()
  // }
}
