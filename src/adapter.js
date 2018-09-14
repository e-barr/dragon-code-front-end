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

  static async getTenQuestions() {
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

    let formattedLevelQuestions = gameInfo.questions.map(questionObject => {
      let formattedOptions = {
        1: questionObject.options[1],
        2: questionObject.options[2],
        3: questionObject.options[3]
      }

      return {
        id: questionObject.id,
        text: questionObject.text,
        answer: questionObject.answer,
        option: formattedOptions
      }
    })

    let formattedGridItems = gameInfo.grid_spaces.map(gridItemObject => ({
      id: gridItemObject.id,
      levelId: gridItemObject.level_id,
      passThrough: gridItemObject.pass_through,
      startingX: gridItemObject.x_coor,
      startingY: gridItemObject.y_coor,
      width: gridItemObject.width,
      height: gridItemObject.height,
      fileFolder: gridItemObject.image_src,
      fileName: gridItemObject.file_name
    }))

    let formattedEventPieces = gameInfo.event_pieces.map(eventPieceObject => ({
      id: eventPieceObject.id,
      questionId: eventPieceObject.question_id,
      passThrough: false,
      startingX: eventPieceObject.x_coor,
      startingY: eventPieceObject.y_coor,
      width: eventPieceObject.width,
      height: eventPieceObject.height,
      fileFolder: eventPieceObject.image_src,
      fileName: eventPieceObject.file_name
    }))

    return {
      gameId: gameInfo.id,
      score: gameInfo.score,
      levelQuestions:formattedLevelQuestions,
      gridItems: formattedGridItems,
      eventPieces: formattedEventPieces
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
        //note: The object data that needs to updated
        //gameid, questionid, responseID
      })
    })
  }
}
