document.addEventListener("DOMContentLoaded", () => {
  appContent.innerHTML = renderLoginBox()
  // const Question = buildQuestionClass()

  const userForm = document.querySelector('#form-login-username')

  userForm.addEventListener('submit', (event) => {
    // debugger
    event.preventDefault()

    getGameInfo({ username: event.target.username.value });

    (async function getAndRender() {
      await getAllQuestions()
      renderQuestionAndOptions()
      questionEventListener()
    })()



  })


  function questionEventListener() {
    let questiondiv = document.querySelector('#question')

    questiondiv.addEventListener('click', (event) => {
      let questionId = event.target.dataset.questionId.split('-')[1]
      let currentQuestion = Question.all.find(question => question.id === parseInt(questionId))
      let correctAnswer = currentQuestion.isCorrect(event.target.innerText)
      let responseID = event.target.dataset.responseId

      Adapter.updateQuestion({ gameid: gameid, questionId: currentQuestion.id, responseId: responseID })
    })
  }






})


