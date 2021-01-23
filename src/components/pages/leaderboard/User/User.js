import React from 'react'
import { connect } from 'react-redux'

import './User.css'
import { Skeleton, Card, Avatar } from 'antd';

const { Meta } = Card;

function User({ loading, users, questions }) {
    return (
        <div className='User'>
            <Card
                style={{ width: 450, marginTop: 16 }}
                hoverable='true'
            >
                <Skeleton loading={loading} avatar active>
                    <Meta
                        avatar={
                            <Avatar src='' />
                        }
                        title='User Name'
                        description='Score: '
                    />
                </Skeleton>
                <br />
                <p>Questions Asked: </p>
                <p>Questions Answered: </p>

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