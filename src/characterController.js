const stepSize = 50//window.innerHeight / grid.length;

class Character {
  constructor(){
    this.element = document.createElement('img');
    this.speed = 10;
    this.assets= 'assets/character',
    this.movement = null
    this.element.src = `${this.assets}/static.gif`
    this.element.style.position = 'absolute'
    this.element.style.left = '0px'
    this.element.style.top = '0px'
    this.element.style.width = "50px"
    Character.all().push(this)
    document.body.appendChild(this.element)
  }

  stepEast(){
    return new Promise( resolve => {
      this.walkEast();
      setTimeout( () => {
        this.stop();
        resolve()
      }, stepSize / this.speed * 100)
    })
  }
  
  stepWest(){
    return new Promise( resolve => {
      this.walkWest();
      setTimeout( () => {
        this.stop();
        resolve()
      }, stepSize / this.speed * 100)
    })
  }
  
  stepNorth(){
    return new Promise( resolve => {
      this.walkNorth();
      setTimeout( () => {
        this.stop();
        resolve()
      }, stepSize / this.speed * 100)
    })
  }
  
  stepSouth(){
    return new Promise( resolve => {
      this.walkSouth();
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
    this.element.src = `${this.assets}/static.gif`
  }

  static all(){
    return Character.prototype.all
  }
}

Character.prototype.all = new Array

document.addEventListener("DOMContentLoaded", () => {
  char = new Character
  
  function moveCharacter(e) {

    if (e.keyCode == 39) {
      e.preventDefault()
      char.stepEast()
    } else if (e.keyCode == 40) {
      e.preventDefault()
      char.stepSouth()
    } else if (e.keyCode == 37) {
      e.preventDefault()
      char.stepWest()
    } else if (e.keyCode == 38) {
      e.preventDefault()
      char.stepNorth()
    }
  }
  
  window.addEventListener('keydown', e => moveCharacter(e))
})