let gameId = null
let score = 0

async function getGameInfo(usernameObejct) {
  const gameObject = await Adapter.createNewGame(usernameObejct) //need to check what stephens names this functionn
  debugger
  gameId = gameObject.id
}

async function getAllQuestions() {
  const questionArray = await Adapter.getAllQuestions()
  questionArray.forEach(question => {
    new Question(question)
  })
}

async function getOneQuestion(gameId) {

}