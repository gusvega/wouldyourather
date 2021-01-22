import React from 'react'
import Nav from '../../../Nav/Nav'
import { connect } from 'react-redux'
import './LeaderboardPage.css'
import UsersContainer from '../UsersContainer/UsersContainer';


class Leaderboard extends React.Component {

    componentDidMount() {
        if (this.props.authedUser === '') {
            this.props.history.push(`/`);
        }
    }

    render() {
        return (
            <div>
                <Nav />
                <div className='LeaderboardPage'>

                    <p>LEADER BOARD</p>
                    <UsersContainer/>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        loading: authedUser === null,
        authedUser: authedUser,
        users: users
    }
}

export default connect(mapStateToProps)(Leaderboard)