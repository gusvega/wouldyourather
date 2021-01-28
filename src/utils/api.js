import {
    _getUsers,
    _getQuestions,
    _addAnswer,
    _saveQuestion
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
    return _addAnswer(authedUser, question, answer)

  }

  export function saveQuestion (info) {
    console.log('--- saveQuestion : values', _saveQuestion(info))
    return _saveQuestion(info)
  }