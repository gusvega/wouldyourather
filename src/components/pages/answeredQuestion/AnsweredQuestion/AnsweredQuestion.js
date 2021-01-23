import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from "react-router-dom";
import { Skeleton, Card, Avatar } from 'antd';
import './AnsweredQuestion.css'

const { Meta } = Card;

function AnsweredQuestion ({questions, users, loading}){
    const location = useLocation();

        return(
            <div className='AnsweredQuestion'>

                <Card
                    style={{ width: 450, marginTop: 16 }}
                    hoverable = 'true'              
                >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                            avatar={
                                <Avatar src={users[questions[location.questionID].createdBy]['avatarURL']} />
                            }
                            title={`${users[questions[location.questionID].createdBy]['name']} Asked:`} 
                            description={questions[location.questionID].text}
                        />
                    </Skeleton>
                    <br/>
                    <p>Results: </p>
                    <p>results</p>
                </Card>
            </div>
        )
}

function mapStateToProps({ authedUser, users, questions }) {
    return {
        loading: authedUser === null,
        users: users, 
        questions: questions,
    }
}

export default connect(mapStateToProps)(AnsweredQuestion)