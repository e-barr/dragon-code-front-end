class EventPiece extends GameObject {
  constructor(options) {
    super(options)
    let { questionId } = options;
    this.questionId = questionId
    this.on('collision', character => {
      //note: ask josh about on bug; getting "this.on is not a function"
      // debugger
      renderQuestionAndOptions(this.questionId)
    })
  }

  opens_chest() {
    //note: need to complete logic
  }

  blocks_stairs() {
    //note: need to complete logic
  }
}
