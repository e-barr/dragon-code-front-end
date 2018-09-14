let gameId = null
let score = 0
let username = null

async function getGameInfo(usernameObject) {
  const gameObject = await Adapter.createNewGame(usernameObject) //need to check what stephens names this functionn
  //note: need to check what pablo needs. also object is mispelled?

  gameId = gameObject.gameId

  createLevelQuestions(gameObject.levelQuestions)
  createGridItems(gameObject.gridItems)
  createEventPieces(gameObject.eventPieces)

  char = new Character({ startingX: 450, startingY: 450, fileFolder: 'assets/character', fileName: 'static.gif', width: 50, height: 50 })
}

function increaseScore() {
  let scoreElement = document.querySelector('#score')
  scoreElement.innerText = `${score += 1}`
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
    // gridItemObject.startingX += 400
    // gridItemObject.startingY += 400

    new GridItem(gridItemObject)
  })
}

function createEventPieces(eventPiecesArray) {
  eventPiecesArray.forEach(eventPieceObject => {
    eventPieceObject.startingX *= 25
    eventPieceObject.startingY *= 25

    if (eventPieceObject.fileName === "closed_chest.png") {
      eventPieceObject.width = 25
      eventPieceObject.height = 25
    } else {
      eventPieceObject.width = 50
      eventPieceObject.height = 50
    }

    // debugger;
    // eventPieceObject.startingX += 400
    // eventPieceObject.startingY += 400
    new EventPiece(eventPieceObject)
  })
}
