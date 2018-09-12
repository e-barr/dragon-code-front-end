var fetch = require("node-fetch");

async function createNewGame(formObject) {
  gameInfo = await fetch("https://localhost:3000/games", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formObject)
  })
    .then(res => {debugger})
    .catch(console.log)
  
  return await {
    gameId: gameInfo.id,
    score: gameInfo.score
  }
}

console.log(createNewGame({
	"game": {
		"username": "Erika B"
	}
}))