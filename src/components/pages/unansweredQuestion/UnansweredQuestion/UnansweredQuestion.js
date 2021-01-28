import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../../../store'
import {handleSubmitAnswer} from '../../../../actions/questions'
import { useLocation, useHistory } from "react-router-dom";
import { Skeleton, Card, Avatar, Radio, Button } from 'antd';

import './UnansweredQuestion.css'

const { Meta } = Card;

function UnansweredQuestion({ questions, users, loading, authedUser }) {
    const location = useLocation();
    const history = useHistory()

    console.log('QUESTION ID: ', location.questionInfo.id)

    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value)

        setValue(e.target.value);
    };

    const onSubmit = () => {
        // console.log('question', questions[location.questionInfo.id])
        store.dispatch(handleSubmitAnswer(questions[location.questionInfo.id], value))
        history.push('/home')
    }

    return (
        <div className='AnsweredQuestion'>

            <Card
                style={{ width: 450, marginTop: 16 }}
                hoverable='true'
            >
                <Skeleton loading={loading} avatar active>
                    <Meta
                        avatar={
                            <Avatar src={users[questions[location.questionInfo.id].createdBy]['avatarURL']} />

                        }
                        title={`${users[questions[location.questionInfo.id].createdBy]['name']} Asked:`}
                        description={questions[location.questionInfo.id].text}
                    />
                </Skeleton>
                <br />
                <p>Options: </p>
                <Radio.Group onChange={onChange} value={value}>
                    <Radio value={'a'}>{questions[location.questionInfo.id].options['a']}</Radio>
                    <br />
                    <Radio value={'b'}>{questions[location.questionInfo.id].options['b']}</Radio>
                </Radio.Group>
                <br />
                <br />
                <Button type="primary" onClick={onSubmit}>Submit</Button>
            </Card>
        </div>
    )
}

function mapStateToProps({ authedUser, users, questions, dispatch }) {
    return {
        loading: authedUser === null,
        users: users,
        questions: questions,
        dispatch
    }
}

export default connect(mapStateToProps)(UnansweredQuestion)