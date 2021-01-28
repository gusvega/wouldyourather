import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion, addAnswer } from '../utils/api'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'


export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function submitAnswer(question) {
  return {
    type: SUBMIT_ANSWER,
    question,
  }
}

export function addQuestion(question) {
  console.log('QUESTION: ', question)
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion (question, optionA, optionB) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    console.log('---- handleAddQuestion: ', saveQuestion({question, optionA, optionB, authedUser}))

    dispatch(showLoading())

    return saveQuestion({question, optionA, optionB, authedUser}).then((result) => dispatch(addQuestion(result)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleSubmitAnswer(question, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    addAnswer(authedUser, question, answer)
    dispatch(submitAnswer(question))
  }
}

