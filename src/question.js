const Question = (() => {
  return class {
    all = []
    constructor(question) { //We need to know which data we are going to be using
      this.id = question.id
      this.description = question.description
      this.answer = question.answer
      this.option1 = question.option1
      this.option2 = question.option2
      this.option3 = question.option3

    }

    render() {
      return `` //we need to get the data to know what to render
    }


  }
})