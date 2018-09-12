document.addEventListener("DOMContentLoaded", () => {
  appContent.innerHTML = renderLoginBox()

  const userForm = document.querySelector('#form-login-username')

  userForm.addEventListener('submit', (event) => {
    event.preventDefault()

    // event.target.username.value
    debugger

    async function getAllQuestions() {
      const questionArray = await Adapter.getAllQuestions()
      questionArray.forEach(question => {
        new Question(question)
      })
    }

    async function getOneQuestion(gameId) {

    }


    const username = event.target.username.value
    navBarDiv.innerHTML = renderTopBar()
    appContent.innerHTML = renderOptionBoxes()

  })







})


