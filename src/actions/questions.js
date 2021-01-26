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

export function addQuestion(values) {
  return {
    type: ADD_QUESTION,
    values,
  }
}

export function handleSubmitAnswer(question, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    addAnswer(authedUser, question, answer)
    dispatch(submitAnswer(question))
  }
}

export function handleAddQuestion (text, optionA, optionB) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      text,
      author: authedUser,
      options: {
        a: optionA,
        b: optionB
      }
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}