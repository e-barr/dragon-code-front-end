document.addEventListener("DOMContentLoaded", () => {
  appContent.innerHTML = renderLoginBox()

  // const Question = buildQuestionClass()

  const userForm = document.querySelector('#form-login-username')

  userForm.addEventListener('submit', (event) => {
    username = event.target.username.value
    event.preventDefault()
    removeCircleAnimation()
    appContent.innerHTML = ``
    navBarDiv.innerHTML = renderTopBar()

    getGameInfo({ username: event.target.username.value });


    Question.getQuestions()
    // (async function getAndRender() {
    //   await getAllQuestions()
    //   renderQuestionAndOptions()
    //   questionEventListener()
    // })()







  })


  // function questionEventListener() {
  //   let questiondiv = document.querySelector('#question')

  //   questiondiv.addEventListener('click', (event) => {
  //     let alertDiv = document.querySelector('#alert-content')
  //     let responseID = event.target.dataset.responseId
  //     let correctAnswer = Question.currentQuestion.isCorrect(Question.currentQuestion.options[responseID])
  //     overlayContent.innerHTML = loadAlert(correctAnswer)
  //     // overlayContent.innerHTML = ''

  //     // Adapter.updateQuestion({ id: Question.currentQuestion.id, gameid: gameId, questionId: Question.currentQuestion.id, responseId: responseID })
  //   })
  // }






})


