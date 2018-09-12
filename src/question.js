
const Question = (() => {
  // var hidden = Symbol()
  class Question {
    constructor(question) { //We need to know which data we are going to be using
      this.id = question.id
      this.content = question.content
      this.answer = question.answer
      this.options = question.options
      Question.all.push(this)
    }
    render() {
      return `<div id="question" class="text-center container overlay">
    <div id="question-description" class="container">
      <h5 class="typewriter text-white">${this.content}</h5>
    </div>
    <div class="text-center" data-question-id="question-${this.id}" id="question-options">
      ${this.options.map((option, i) => this.optionRender(option, i))}
    </div>
    </div>`
    }

    optionRender(option, i) {
      return `<button class="snip1582" data-question-id="question-${this.id}" data-response-id=${i}>${option}</button>`
    }

    isCorrect(playerAnswer) {
      return this.answer === playerAnswer
    }
  }
  Question.all = []

  return Question


})();