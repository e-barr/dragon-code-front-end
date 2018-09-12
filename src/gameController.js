let gameId = null
let score = 0

async function getGameInfo(usernameObejct) {
  const gameInfo = await Adapter.getGame(usernameObejct) //need to check what stephens names this functionn
  gameId = gameInfo.id
}

async function getAllQuestions() {
  const questionArray = await Adapter.getAllQuestions()
  questionArray.forEach(question => {
    new Question(question)
  })
}

async function getOneQuestion(gameId) {

}