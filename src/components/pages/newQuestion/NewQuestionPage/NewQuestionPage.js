import React from 'react'
import { connect } from 'react-redux'
import Nav from '../../../Nav/Nav'
import NewQuestionCard from '../NewQuestionCard/NewQuestionCard';
import './NewQuestionPage.css'

function NewQuestion ({authedUser, history}){

        if (authedUser === '') {
            history.push(`/`);
        }

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

function mapStateToProps({ authedUser, users }) {
    return {
        loading: authedUser === null,
        authedUser: authedUser,
    }
}

export default connect(mapStateToProps)(NewQuestion)