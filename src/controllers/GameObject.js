class GameObject extends EventEmitter {
  constructor({startingX=0, startingY=0, width=25, height=25, fileFolder, fileName, passThrough=false}) {
    super()
    this.element = document.createElement('img')
    this.passThrough = passThrough
    this.assets = fileFolder
    this.element.src = `${this.assets}/${fileName}`
    this.element.style.position = 'absolute'
    this.width = width
    this.height = height
    this.x = startingX
    this.y = startingY
    document.body.appendChild(this.element)
    GameObject.all.push(this)
  }

  get x() {return parseInt(this.element.style.left)}
  get y() {return parseInt(this.element.style.top)}
  get height() {return parseInt(this.element.style.height)}
  get width() {return parseInt(this.element.style.width)}

  set x(value) {this.element.style.left = value + 'px'}
  set y(value) {this.element.style.top = value + 'px'}
  set height(value) {this.element.style.height = value + 'px'}
  set width (value) {this.element.style.width = value + 'px'}
}

GameObject.all = [];
