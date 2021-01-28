import { RECEIVE_QUESTIONS, ADD_QUESTION, SUBMIT_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
    console.log('action.question.id', state)
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                // ...action.question
                [action.question.id]: action.question,

            }
        case SUBMIT_ANSWER:
            return {
                ...state,
                ...action.question
            }
        default:
            return state
    }
}