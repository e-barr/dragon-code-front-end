const QUESTIONS_API = 'http://localhost:3000'

// const Adapter = (() => {
class Adapter {
  static async getAllQuestions() {
    let result = await fetch(QUESTIONS_API)
    let questions = await result.json()
    return questions.map(question => ({
      id: question.id,
      description: question.description,
      answer: question.answer,
      options: [question.answer, question.option1, question.option2, question.option3]
    }))
  }

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

    let questionObject = result.json()
    // note: need to return formatted json result here
  }

  static async createNewGame(formObject) {
    let gameInfo = await fetch(`${QUESTIONS_API}/games`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        game: {
          username: formObject.username
        }
      })
    })
      .then(res => res.json())

    return {
      gameId: gameInfo.id,
      score: gameInfo.score
    }
  }

  static updateQuestion(questionObject) {
    fetch(`${QUESTIONS_API}/${questionObject.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        //The object data that needs to updated
      })
    })
  }


}
// })