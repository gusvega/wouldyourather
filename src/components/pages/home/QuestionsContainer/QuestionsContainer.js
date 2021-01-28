import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'
import './QuestionsContainer.css'
import { Tabs } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";



const { TabPane } = Tabs;


function QuestionsContainer({ users, authedUser, questions, history }) {

    let user = authedUser && users[authedUser]; 
    let userAnsweredQuestions = user && user.answeredQuestions 
    
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

                        let timestampA = questions && questions[questionA].timestamp 
                        let timestampB = questions && questions[questionB].timestamp 


                        return (timestampA / 2) - (timestampB / 2)
                    }).map((questionID) => (
                        <div key={questionID}>
                            <QuestionCard questionInfo={questions[questionID]} />
                        </div>
                    ))}
                </TabPane>
                <TabPane tab="Unanswered Questions" key="2">
                    {answeredQuestions.sort((questionA, questionB) => {

                        let timestampA = questions && questions[questionA].timestamp 
                        let timestampB = questions && questions[questionB].timestamp 

                        return (timestampB / 2) - (timestampA / 2)
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