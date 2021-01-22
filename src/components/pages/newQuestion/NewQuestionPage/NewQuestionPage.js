import React from 'react'
import { connect } from 'react-redux'

import Nav from '../../../Nav/Nav'
import NewQuestionCard from '../NewQuestionCard/NewQuestionCard';
import './NewQuestionPage.css'

class NewQuestion extends React.Component{

    componentDidMount() {
        if (this.props.authedUser === '') {
            this.props.history.push(`/`);
        }
    }

    render(){
        return (
            <div>
                <Nav/>
                <div className='NewQuestionPage'>
                    <p>NEW QUESTION</p>
                    <NewQuestionCard/>
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

export default connect(mapStateToProps)(NewQuestion)