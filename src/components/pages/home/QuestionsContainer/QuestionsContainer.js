import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'
import './QuestionsContainer.css'
import { Tabs } from 'antd';
import { connect } from 'react-redux'


const { TabPane } = Tabs;

class QuestionsContainer extends React.Component{

    

    callback(key) {
        console.log(key);
      }
    
    render(){
        const {users, authedUser, questions} = this.props
        console.log(authedUser)

        return(
            <div className='QuestionsContainer'>
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Answered Questions" key="1" onTabClick={() => console.log('TAB SELECTED')}>
                        {users[authedUser]['answeredQuestions'].map((questionID) => (
                                <div key={questionID}>
                                    <p>{questionID}</p>
                                    {questions[questionID]['text']}
                                </div>
                            ))}
                        <QuestionCard/>
                    </TabPane>
                    <TabPane tab="Unanswered Questions" key="2">
                    {
                        Object.values(questions).filter((question) => question['id'] === "5c9qojr2d1738zlx09afby").map((question) => (
                            <p>{question.text}</p>
                        ))
                    }
                    </TabPane>
                </Tabs>                
            </div>
        )
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

export default connect(mapStateToProps)(QuestionsContainer)