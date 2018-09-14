  char = new Character({startingX: 200, startingY: 200, fileFolder: 'assets/character', fileName: 'static.gif'})

  let randomCoordinate = 50 * Math.round(Math.random() * 10)

  for (let i=0; i<5; i++) {
    new EventPiece(randomCoordinate, randomCoordinate, 30, 30, 'assets/eventpieces', 'closed_chest.png')
  }

  let wizard = new EventPiece(randomCoordinate, randomCoordinate, 60, 60, 'assets/eventpieces', 'wizard.gif')
  let minotaur = new EventPiece(randomCoordinate, randomCoordinate, 50, 50, 'assets/eventpieces', 'minotaur.gif')
  let dragon = new EventPiece(randomCoordinate, randomCoordinate, 120, 120, 'assets/eventpieces', 'dragon.gif')
