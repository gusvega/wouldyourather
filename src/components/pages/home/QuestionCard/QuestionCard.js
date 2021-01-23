import React from 'react'
import './QuestionCard.css'
import { Skeleton, Card, Avatar } from 'antd';
import {EyeOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'


const { Meta } = Card;

class QuestionCard extends React.Component {

    render() {
        const { loading } = this.props;

        return (
            <>
                <Card
                    style={{ width: 450, marginTop: 16 }}
                    actions={[
                        <EyeOutlined key='view_question'/>
                    ]}
                >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
                </Card>
            </>
        );
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

export default connect(mapStateToProps)(QuestionCard)