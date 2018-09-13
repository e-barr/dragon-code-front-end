var fetch = require("node-fetch");

async function createNewGame(formObject) {
  let gameInfo = await fetch("http://localhost:3000/games", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formObject)
  })
  .then(res => res.json())

  return {
    gameId: gameInfo.id,
    score: gameInfo.score
  }
}


(async function(){
  console.log("test", await createNewGame({
  	"game": {
  		"username": "Erika B"
  	}
  }))
})()
