let gameId = null
let score = 0

async function getGameInfo(usernameObejct) {
  const gameObject = await Adapter.createNewGame(usernameObejct) //need to check what stephens names this functionn

  gameId = gameObject.gameId

}


async function getOneQuestion(gameId) {
  // debugger
  let questionObject = await Adapter.getOneQuestion(gameId)
  debugger
  let tempQuestion = new Question(questionObject)
}