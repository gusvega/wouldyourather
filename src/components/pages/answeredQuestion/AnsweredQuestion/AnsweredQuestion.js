import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from "react-router-dom";
import { Skeleton, Card, Avatar, Progress } from 'antd';
import './AnsweredQuestion.css'

const { Meta } = Card;

function AnsweredQuestion({ questions, users, loading }) {
    const location = useLocation();
    const numberA = questions[location.questionID]['answers'].filter(a => a === 'a').length
    const numberB = questions[location.questionID]['answers'].filter(a => a === 'b').length
    const totalAnswers = questions[location.questionID]['answers'].length
    
    const percentA = (numberA/totalAnswers) * 100
    const percentB = (numberB/totalAnswers) * 100

    // const porcentageA = questions[location.questionID].['answers']

    return (
        <div className='AnsweredQuestion'>

            <Card
                style={{ width: 450, marginTop: 16 }}
                hoverable='true'
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
                <br />
                <p>Results: </p>
                <Progress percent={percentA} />
                <p>{questions[location.questionID].options['a']}</p>

                <Progress percent={percentB} status="active" />
                <p>{questions[location.questionID].options['b']}</p>

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