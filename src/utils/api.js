import {
    _getUsers,
    _getQuestions,
    _addAnswer,
    _addQuestion
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions()
    ]).then(([users, questions]) => ({
      users,
      questions
    }))
  }

  export function addAnswer(authedUser, question, answer){
    // console.log('ADD ANSWER', answer)
    return _addAnswer(authedUser, question, answer)

  }

  export function addQuestion(values){
    _addQuestion(values)
  }