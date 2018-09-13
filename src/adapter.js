const QUESTIONS_API = 'http://localhost:3000'

class Adapter {
  static async getAllQuestions() {
    let result = await fetch(`${QUESTIONS_API}/questions`)
    let questions = await result.json()
    return questions.map(question => ({
      id: question.id,
      description: question.content,
      answer: question.answer,
      options: [question.answer, question.option1, question.option2, question.option3]
    }))
  }

  static async get10Questions() {
    let responseId = await fetch()
    let questions = await result.json()
    return questions.map(question => ({
      id: question.id,
      content: question.content,
      answer: question.answer,
      options: [question.answer, question.option1, question.option2, question.option3]
    }))
  }

  // static async getOneQuestion(gameId) {
  //   let result = await fetch(`${QUESTIONS_API}/game_questions`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       game_question: {
  //         game_id: `${gameId}`
  //       }
  //     })
  //   }).then(res => res.json())
  // }

  // return {
  //   result
  // // note: need to return formatted json result here

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
        game_id: questionObject.gameId,
        question_id: questionObject.questionId,
        user_answer: questionObject.responseId
        //The object data that needs to updated
        //gameid, questionid, responseID
      })
    })
  }
}
