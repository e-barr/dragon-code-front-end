const Question = (() => {
  const all = []
  return class {
    constructor(question) { //We need to know which data we are going to be using
      this.id = question.id
      this.description = question.description
      this.answer = question.answer
      this.options = question.options
      all.push(this)
    }

    render() {
      return `<div id="question">
    <div id="question-description>
      <h3 class="typewriter text-center text-light">${this.description}</h3>
    </div>
    <div class="text-center" id="question-options">
      ${question.options.map(option => this.optionRender(option))}
    </div>
    </div>`
    }
    //Not sure if the below will work
    optionRender(option) {
      return `<button class="snip1582">${option}</button>`
    }

  }


})