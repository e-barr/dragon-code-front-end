var fetch = require("node-fetch");

static async getOneQuestion(gameId) {
  let result = await fetch(`${QUESTIONS_API}/game_questions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      game_question: {
        game_id: gameId
      }
    })
  })
    .then(res => res.json())

  debugger
  
  return {
    result
  // note: need to return formatted json result here
}


(async function(){
  console.log("test", await getOneQuestion({
  	"game_question": {
  		"game_id": 4,
      "difficulty_level": 1
  	}
  }))
})()
