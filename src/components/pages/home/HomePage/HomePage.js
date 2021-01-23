import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../../../store'
import { setAuthedUser } from '../../../../actions/authedUser'
import Nav from '../../../Nav/Nav'
import './HomePage.css'
import QuestionsContainer from '../QuestionsContainer/QuestionsContainer'
class HomePage extends React.Component {

    componentDidMount() {
        if (this.props.authedUser === '') {
            this.props.history.push(`/`);
        }
    }

    onClickHandler() {
        store.dispatch(setAuthedUser(''))
    }

    render() {
        return (
            <div>
                <Nav/>
                <div className='HomePage'>
                    <QuestionsContainer/>
                </div>

            </div>)
    }
}

function mapStateToProps({ authedUser, users, questions }) {
    return {
        loading: authedUser === null,
        authedUser: authedUser,
        users: users,
        questions: questions
    }
}

export default connect(mapStateToProps)(HomePage)


