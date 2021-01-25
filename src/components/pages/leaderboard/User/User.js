import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import './User.css'
import { Skeleton, Card, Avatar } from 'antd';

const { Meta } = Card;

function User({ loading, users, questions, userID }) {

    useEffect(() => {
        console.log('Score: ', userID)
      });
    
    const score = (users[userID]['answeredQuestions'].length + users[userID]['questionsCreated'].length) / 2
    console.log('SCORE: ', score)



    return (
        <div className='User'>
            <Card
                style={{ width: 450, marginTop: 16 }}
                hoverable='true'
            >
                <Skeleton loading={loading} avatar active>
                    <Meta
                        avatar={
                            <Avatar src={users[userID]['avatarURL']} />
                        }
                        title={users[userID]['name']}
                        description={`Score: ${score}`}
                    />
                </Skeleton>
                <br />
                <p>Questions Asked: {users[userID]['answeredQuestions'].length} </p>
                <p>Questions Answered: {users[userID]['questionsCreated'].length} </p>

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

export default connect(mapStateToProps)(User)