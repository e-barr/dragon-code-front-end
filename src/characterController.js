class Character {
  constructor(){
    this.element = document.createElement('img');
    this.speed = 15;
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