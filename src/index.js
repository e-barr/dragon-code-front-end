document.addEventListener("DOMContentLoaded", () => {
  appContent.innerHTML = renderLoginBox()

  const userForm = document.querySelector('#form-login-username')

  userForm.addEventListener('submit', (event) => {
    event.preventDefault()

    getGameInfo({ username: event.target.username.value })

    getAllQuestions()




    const username = event.target.username.value
    navBarDiv.innerHTML = renderTopBar()
    appContent.innerHTML = renderOptionBoxes()

  })







})


