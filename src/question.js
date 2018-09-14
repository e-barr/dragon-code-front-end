const Question = (() => {
  // var hidden = Symbol()
  class Question {
    constructor(question) { //We need to know which data we are going to be using
      this.id = question.id
      this.description = question.description
      this.answer = question.answer
      this.options = question.options
      Question.all.push(this)
    }
    render() {
      let arr = this.options.map((option, i) => this.optionRender(option, i))
      let arr2 = shuffleOptions(arr)

      return `<div id="question" class="text-center container">
    <div id="question-description" class="container">
      <h5 class="typewriter text-white">${this.description}</h5>
    </div>
    <div class="text-center" data-question-id="question-${this.id}" id="question-options">
      ${arr2.join(',')}
    </div>
    </div>`
    }

    optionRender(option, i) {
      return `<button class="snip1582" data-question-id="question-${this.id}" data-response-id=${i}>${option}</button>`
    }



    isCorrect(playerAnswer) {
      return this.answer === playerAnswer
    }

    static getOneQuestion(questionID) {



      let newQuestion = this.all.find((question) => { return question.id === questionID })
      this.currentQuestion = newQuestion
      this.asked.push(newQuestion)
      this.currentOptions = newQuestion.options
      return newQuestion

    }

    static shuffleQuestions() {
      let arr = this.all
      let j, x, i;
      for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
      this.all = arr
    }

    static async getQuestions() {
      const questionArray = await Adapter.getAllQuestions()
      questionArray.forEach(question => {
        new Question(question)
      })
    }




  }


  Question.all = []
  Question.asked = []
  Question.currentQuestion = null
  Question.currentOptions = null
  return Question
})();


function questionEventListener() {
  let questiondiv = document.querySelector('#question')

  questiondiv.addEventListener('click', (event) => {
    let alertDiv = document.querySelector('#alert-content')
    let responseID = event.target.dataset.responseId
    let correctAnswer = Question.currentQuestion.isCorrect(Question.currentQuestion.options[responseID])
    overlayContent.innerHTML = loadAlert(correctAnswer)
    // overlayContent.innerHTML = ''

    // Adapter.updateQuestion({ id: Question.currentQuestion.id, gameid: gameId, questionId: Question.currentQuestion.id, responseId: responseID })
  })
}

function shuffleOptions(arr) {
  let j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr
}