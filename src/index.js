document.addEventListener("DOMContentLoaded", () => {
  appContent.innerHTML = renderLoginBox()

  const userForm = document.querySelector('#form-login-username')

  userForm.addEventListener('submit', (event) => {
    event.preventDefault()

    async function getAllQuestions() {
      const questionArray = await Adapter.getAllQuestions()
    }

    const username = event.target.username.value
    navBarDiv.innerHTML = renderTopBar()
    appContent.innerHTML = renderOptionBoxes()

  })







})


