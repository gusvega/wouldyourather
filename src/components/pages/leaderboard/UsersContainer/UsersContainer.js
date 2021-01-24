import React from 'react'
import User from '../User/User'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'

import './UsersContainer.css'

function UsersContainer({ authedUser, users }) {

    const answeredQuestionsTotal = Object.values(users).map(user => user['answeredQuestions']).sort()
    console.log(answeredQuestionsTotal)

    const questionsCreated = Object.values(users).map(user => user['questionsCreated']).sort()
    console.log(questionsCreated)



    return (
        <div className='UsersContainer'>
            <User />
            {
                Object.values(users).map(user => user['answeredQuestions']).sort().map(question => (

                    <p>{question.length}</p>

                ))
            }

        </div>
    )
}

function mapStateToProps({ authedUser, users }) {
    return {
        loading: authedUser === null,
        authedUser: authedUser,
        users: users,
    }
}

export default withRouter(connect(mapStateToProps)(UsersContainer))

// Object.values(users).map(user => (
//     <div>
//         <p>User: {user['name']} {user['answeredQuestions'].length}</p>
//         <br/>
//     </div>
// ))