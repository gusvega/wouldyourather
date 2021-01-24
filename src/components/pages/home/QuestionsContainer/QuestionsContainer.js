import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'
import './QuestionsContainer.css'
import { Tabs } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";



const { TabPane } = Tabs;


function QuestionsContainer ({users, authedUser, questions}){
    
        const answeredQuestions = Object.keys(questions).filter(key => !users[authedUser]['answeredQuestions'].includes(key))

        if(!users[authedUser]['answeredQuestions']){
            this.props.history.push('/')
        }

        return(
            <div className='QuestionsContainer'>
                <Tabs defaultActiveKey="2" centered>
                    <TabPane tab="Answered Questions" key="1" onTabClick={() => console.log('TAB SELECTED')}>
                        {users[authedUser]['answeredQuestions'].map((questionID) => (
                                <div key={questionID}>
                                    <QuestionCard questionInfo={questions[questionID]}/>

                                </div>
                            ))}
                    </TabPane>
                    <TabPane tab="Unanswered Questions" key="2">
                    {
                        answeredQuestions.map((questionID) => (
                            <div key={questionID}>
                                <QuestionCard questionInfo={questions[questionID]}/>
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