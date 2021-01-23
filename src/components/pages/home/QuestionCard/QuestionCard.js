import React from 'react'
import './QuestionCard.css'
import { Skeleton, Card, Avatar } from 'antd';
import {EyeOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'


const { Meta } = Card;

class QuestionCard extends React.Component {

    render() {
        const { loading, users } = this.props;

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
                                <Avatar src={users[this.props.questionInfo.createdBy]['avatarURL']} />
                            }
                            title={`${users[this.props.questionInfo.createdBy]['name']} Asked:`} 
                            description={this.props.questionInfo.text.substring(0,40).concat(' ...')}
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