const userNameForm = document.querySelector('#create-username')
const appContent = document.querySelector('#app-content')
const navBarDiv = document.querySelector('#nav-bar')
const overlayContent = document.querySelector('#overlay-content')




function renderQuestionAndOptions(questionId) {
  let currentQuestion = Question.getOneQuestion(questionId)
  overlayContent.innerHTML = currentQuestion.render()
  overlayContentOn()
  questionEventListener()
}
function renderTopBar() {
  return `<nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">

  <h3 class="navbar-brand" href="#">Dragon Code</h3>
  <div text>
  <img src="img/dragon-introwhite.png" alt="Logo" title="Logo" class="bar-dragon">
  </div>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  </div>
  <div class="navbar">
    <ul class="navbar-nav">

      <div class="card"><div class="card-body" id="score"><h3 class="text-danger">SCORE</h3></></div></div>
    </ul>
  </div>
</nav>`
}
function renderLoginBox() {
  return `< div class="container" >
    <div id="login" class="signin-card text-center">
      <div class="logo-image" id="logo-image">
        <h1 class="display1 text-light code-title">C<span><img src="img/dragon-intro2white.png" alt="Logo" title="Logo" width="138"></span>DE</h1>
  </div>
  <br>
        <h1 class="display1 text-light">Create a Game Name</h1>

        <form action="" method="" class="" role="form" id="form-login-username">
          <div class="form-group">
            <input id="username" class="form-control" name="username" type="text" size="18" alt="login" required />
            <span class="form-highlight"></span>
            <span class="form-bar"></span>

          </div>
          <div>
            <button class="btn btn-block btn-info ripple-effect" type="submit" name="Submit" alt="sign in">Start Game</button>
          </div>
    </div>
  </form>
    </div>
</div > `
}

function overlayContentOn() {
  document.getElementById("overlay-content").style.display = "block";
}

function overlayContentOff() {
  document.getElementById("overlay-content").style.display = "none";
}

function removeCircleAnimation() {
  let loaderDiv = document.querySelector('#loader')
  loaderDiv.innerHTML = ''
}

function loadAlert(correctBool) {
  let successOrFailureAlert = correctBool ? 'alert-success' : 'alert-danger'

  function headerText() { return correctBool ? 'Well Done!' : 'Try again!' }
  function paragraphText() { return correctBool ? `You are correct the right answer is ${Question.currentQuestion.answer} ` : `The correct answer was ${Question.currentQuestion.answer} ` }

  return `<div class="alert ${successOrFailureAlert} alert-dismissible fade show" role="alert" >
  <h4 class="alert-heading">${headerText()}</h4>
  <hr>
    <p>${paragraphText()}.</p>

    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onclick="overlayContentOff()">
      <span aria-hidden="true">&times;</span>
    </button>
</div>`
}



