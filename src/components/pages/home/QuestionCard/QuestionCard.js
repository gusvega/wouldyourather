import React from 'react'
import './QuestionCard.css'
import { Skeleton, Card, Avatar } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

const { Meta } = Card;

class QuestionCard extends React.Component {

    handleOnClick = (users, authedUser, questionInfo, history) => {

        if (users[authedUser]['answeredQuestions'].includes(questionInfo.id)) {
            history.push({
                pathname: `/answeredquestion/:${questionInfo.id}`,
                questionInfo: questionInfo
            })
        } else {
            history.push({
                pathname: `/unansweredquestion/:${questionInfo.id}`,
                questionInfo: questionInfo
            })
            console.log('questionInfo', questionInfo)
        }

    }

    render(){

        const { loading, users, questionInfo, history, authedUser } = this.props

        let createdBy = questionInfo && questionInfo.createdBy; // safety check to see if this value is available
        let questionText = questionInfo && questionInfo.text; // safety check to see if this value is available
    
        let user = createdBy && users[createdBy]; // safety check for accessing the user
        let userURL = user && user.avatarURL // safety check for fetching the url
        let userName = user && user.name // safety check for fetching the name

        return (
            <>
                <Card
                    style={{ width: 450, marginTop: 16 }}
                    actions={[
                        <p>Click card to view full question</p>
                    ]}
                    hoverable='true'
                    onClick={() => this.handleOnClick(users, authedUser, questionInfo, history)}
                >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                            avatar={
                                <Avatar src={userURL} />
                            }
                            title={`${userName} Asked:`}
                            description={questionText}
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

export default withRouter(connect(mapStateToProps)(QuestionCard))