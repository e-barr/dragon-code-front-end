let gameId = null
let score = 0

async function getGameInfo(usernameObject) {
  const gameObject = await Adapter.createNewGame(usernameObject) //need to check what stephens names this functionn
  //note: need to check what pablo needs. also object is mispelled?

  gameId = gameObject.gameId

  createLevelQuestions(gameObject.levelQuestions)
  createGridItems(gameObject.gridItems)
  createEventPieces(gameObject.eventPieces)
  
  char = new Character({startingX: 400, startingY: 400, fileFolder: 'assets/character', fileName: 'static.gif'})
}

async function getOneQuestion(gameId) {
  // debugger
  let questionObject = await Adapter.getOneQuestion(gameId)
  debugger
  let tempQuestion = new Question(questionObject)
}

function createLevelQuestions(questionArray) {
  questionArray.forEach(questionObject => {
    new Question(questionObject)
  })
}

function createGridItems(gridItemArray) {
  gridItemArray.forEach(gridItemObject => {
    gridItemObject.startingX *= 25
    gridItemObject.startingY *= 25
    gridItemObject.startingX += 400
    gridItemObject.startingY += 400

    new GridItem(gridItemObject)
  })
}

function createEventPieces(eventPiecesArray) {
  eventPiecesArray.forEach(eventPieceObject => {
    eventPieceObject.startingX *= 25
    eventPieceObject.startingY *= 25
    eventPieceObject.startingX += 400
    eventPieceObject.startingY += 400
    new EventPiece(eventPieceObject)
  })
}
