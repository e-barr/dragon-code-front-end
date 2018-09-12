const QUESTIONS_API = 'localhost:3000'

const Adapter = (() => {
  return class {
    static async getAllQuestions() {
      let result = await fetch(QUESTIONS_API)
      let questions = await result.json()
      return questions.map(question => ({
        id: question.id,
        description: question.description,
        answer: question.answer,
        options =[question.answer, question.option1, question.option2, question.option3]
      }))
    }

    static async getOneQuestion(gameId) {
      let result = await fetch(`${QUESTIONS_API}/game_questions`)
      let questionObject = await result.json()
      debugger
    }
    
    static async createNewGame(formObject) {
      await fetch
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
})