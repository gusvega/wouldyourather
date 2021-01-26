import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from "react-router-dom";
import { Skeleton, Card, Avatar, Radio, Button } from 'antd';
import './UnansweredQuestion.css'

const { Meta } = Card;

function UnansweredQuestion({ questions, users, loading }) {
    const location = useLocation();

    const [value, setValue] = React.useState(1);

    const onChange = e => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };

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
                    <Radio value={1}>{questions[location.questionID].options['a']}</Radio>
                    <br/>
                    <Radio value={2}>{questions[location.questionID].options['b']}</Radio>
                </Radio.Group>
                <br/>
                <br/>
                <Button type="primary">Primary Button</Button>            </Card>
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

export default connect(mapStateToProps)(UnansweredQuestion)