import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../../../store'
import {handleSubmitAnswer} from '../../../../actions/questions'
import { useLocation } from "react-router-dom";
import { Skeleton, Card, Avatar, Radio, Button } from 'antd';
import { withRouter } from "react-router-dom";

import './UnansweredQuestion.css'

const { Meta } = Card;

function UnansweredQuestion({ questions, users, loading, history }) {
    const location = useLocation();

    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const onSubmit = () => {
        store.dispatch(handleSubmitAnswer(questions[location.questionID], value))
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
                            <Avatar src={users[questions[location.questionID].createdBy]['avatarURL']} />
                        }
                        title={`${users[questions[location.questionID].createdBy]['name']} Asked:`}
                        description={questions[location.questionID].text}
                    />
                </Skeleton>
                <br />
                <p>Options: </p>
                <Radio.Group onChange={onChange} value={value}>
                    <Radio value={'a'}>{questions[location.questionID].options['a']}</Radio>
                    <br />
                    <Radio value={'b'}>{questions[location.questionID].options['b']}</Radio>
                </Radio.Group>
                <br />
                <br />
                <Button type="primary" onClick={onSubmit}>Primary Button</Button>
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

export default withRouter(connect(mapStateToProps)(UnansweredQuestion))