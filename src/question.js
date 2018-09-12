const Question = (() => {
  return class {
    all = []
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
      ${question.options.map(option => optionRender(option))}
    </div>
    </div>`
    }

    // optionRender(option) {
    //   return `<button class="snip1582">Tim Berners-Lee</button>`
    // }

  }
  optionRender(option) {
    return `<button class="snip1582">${option}</button>`
  }

})