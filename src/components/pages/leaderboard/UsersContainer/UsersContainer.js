import React from 'react'
import User from '../User/User'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'

import './UsersContainer.css'

function UsersContainer({ authedUser, users }) {

    return (
        <div className='UsersContainer'>
            {
                Object.values(users).map(user => (

                    <div key={user.id}>
                        <User userID={user.id}/>
                    </div>   
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