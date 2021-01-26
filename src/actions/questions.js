import { showLoading, hideLoading } from 'react-redux-loading'
import { addQuestion, addAnswer } from '../utils/api'


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

export function saveQuestion(values) {
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

export function handleAddQuestion(values) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    addQuestion(values)
    dispatch(saveQuestion(values))
  }
}