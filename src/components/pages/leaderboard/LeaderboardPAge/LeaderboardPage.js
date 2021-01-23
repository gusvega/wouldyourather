import React from 'react'
import Nav from '../../../Nav/Nav'
import { connect } from 'react-redux'
import './LeaderboardPage.css'
import UsersContainer from '../UsersContainer/UsersContainer';


function Leaderboard ({authedUser}) {

        return (
            <div>
                <Nav />
                <div className='LeaderboardPage'>
                    <UsersContainer/>
                </div>
            </div>
        )
}

function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null,
        authedUser: authedUser,
    }
}

export default connect(mapStateToProps)(Leaderboard)