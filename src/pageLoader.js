const userNameForm = document.querySelector('#create-username')
const appContent = document.querySelector('#app-content')
const navBarDiv = document.querySelector('#nav-bar')



function renderOptionBoxes(question) {

  return `
    `
}

function renderTopBar() {
  return `<nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">
          <i class="fa fa-home"></i>
          Home
          <span class="sr-only">(current)</span>
          </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fa fa-envelope-o">
            <span class="badge badge-danger">11</span>
          </i>
          Messages
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">
          <i class="fa fa-envelope-o">
            <span class="badge badge-danger">11</span>
          </i>
          Disabled
        </a>
      </li>
    </ul>

  </div>
</nav>`
}

function renderLoginBox() {
  return `<div class="container">
<div id="login" class="signin-card text-center">
  <div class="logo-image">
  <img src="img/dragon.png" alt="Logo" title="Logo" width="138">
  </div>
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
</div>`
}