import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'
import './QuestionsContainer.css'
import { Tabs } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";



const { TabPane } = Tabs;


function QuestionsContainer({ users, authedUser, questions, history }) {

    let user = authedUser && users[authedUser]; // safety check for accessing the user
    let userAnsweredQuestions = user && user.answeredQuestions // safety check for fetching the name

    const answeredQuestions = Object.keys(questions).filter(key => !userAnsweredQuestions.includes(key))
    const unAnsweredQuestions = Object.keys(questions).filter(key => userAnsweredQuestions.includes(key))


    if (!userAnsweredQuestions) {
        history.push('/')
    }

    return (
        <div className='QuestionsContainer'>
            <Tabs defaultActiveKey="2" centered>
                <TabPane tab="Answered Questions" key="1" onTabClick={() => console.log('TAB SELECTED')}>
                    {unAnsweredQuestions.sort((questionA, questionB) => {
                        return (questions[questionA]['timestamp'] / 2) - (questions[questionB]['timestamp'] / 2)
                    }).map((questionID) => (
                        <div key={questionID}>
                            <QuestionCard questionInfo={questions[questionID]} />
                        </div>
                    ))}
                </TabPane>
                <TabPane tab="Unanswered Questions" key="2">
                    {answeredQuestions.sort((questionA, questionB) => {
                        return (questions[questionA]['timestamp'] / 2) - (questions[questionB]['timestamp'] / 2)
                    }).map((questionID) => (
                        <div key={questionID}>
                            <QuestionCard questionInfo={questions[questionID]} />
                        </div>

                    ))
                    }
                </TabPane>
            </Tabs>
        </div>
    )
}

function mapStateToProps({ authedUser, users, questions }) {
    return {
        loading: authedUser === null,
        authedUser: authedUser,
        users: users,
        questions: questions,
    }
}

export default withRouter(connect(mapStateToProps)(QuestionsContainer))