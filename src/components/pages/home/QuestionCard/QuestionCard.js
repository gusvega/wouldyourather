import React from 'react'
import './QuestionCard.css'
import { Skeleton, Card, Avatar } from 'antd';
import {EyeOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

const { Meta } = Card;


function QuestionCard ({loading, users, questionInfo, history, authedUser}) {

        return (
            <>
                <Card
                    style={{ width: 450, marginTop: 16 }}
                    actions={[
                        <EyeOutlined key='view_question'/>
                    ]}
                    hoverable = 'true'
                    onClick={() => {
                        if(users[authedUser]['answeredQuestions'].includes(questionInfo.id)){
                            history.push({
                                pathname: `/answeredquestion/:${questionInfo.id}`,
                                questionID:  questionInfo.id 
                            })
                        }else{
                            history.push({
                                pathname: `/unansweredquestion/:${questionInfo.id}`,
                                questionID:  questionInfo.id 
                            })
                        }
                        

                    }}                
                >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                            avatar={
                                <Avatar src={users[questionInfo.createdBy]['avatarURL']} />
                            }
                            title={`${users[questionInfo.createdBy]['name']} Asked:`} 
                            description={questionInfo.text.substring(0,40).concat(' ...')}
                        />
                    </Skeleton>
                </Card>
            </>
        );
}

function mapStateToProps({ authedUser, users, questions }) {
    return {
        loading: authedUser === null,
        authedUser: authedUser,
        users: users, 
        questions: questions
    }
}

export default withRouter(connect(mapStateToProps)(QuestionCard))