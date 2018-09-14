class EventPiece extends GameObject {
  constructor(options) {
    super(options)
    let { questionId, height, width } = options;
    this.questionId = questionId
    this.height
    this.width
    this.on('collision', character => {
      //note: ask josh about on bug; getting "this.on is not a function"
      // debugger
      pauseGame = true
      character.stop()
      this.element.remove()
      GameObject.all.splice(GameObject.all.indexOf(this), 1)
      this.passThrough = true
      renderQuestionAndOptions(this.questionId, character)
    })
  }

  opens_chest() {
    //note: need to complete logic
  }

  blocks_stairs() {
    //note: need to complete logic
  }
}
