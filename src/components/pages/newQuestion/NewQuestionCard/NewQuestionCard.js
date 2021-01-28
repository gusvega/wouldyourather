import React from 'react'
import './NewQuestionCard.css'
import { Form, Input, Button } from 'antd';
import { Skeleton, Card } from 'antd';
import {store} from '../../../../store'
import {handleAddQuestion} from '../../../../actions/questions'
import { useHistory } from "react-router-dom";



const { Meta } = Card;


function NewQuestionCard({ loading }) {

    const history = useHistory()

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = (values) => {
        store.dispatch(handleAddQuestion(values.question, values.optionA, values.optionB))
        history.push('/home')

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className='NewQuestionCard'>

            <Card
                style={{ width: 450, marginTop: 16 }}
                hoverable='true'
            >
                <Skeleton avatar loading={loading} active>
                    <Meta

                        title={`Create new question`}
                    />
                </Skeleton >
                <br />
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}

                    onFinishFailed={onFinishFailed}>

                    <Form.Item
                        label="Question: "
                        name="question"
                        rules={[{ required: true, message: 'Please input your question!' }]}>

                        <Input.TextArea />

                    </Form.Item>

                    <Form.Item
                        label="Option 1: "
                        name="optionA"
                        rules={[{ required: true, message: 'Please input an option!' }]}>

                        <Input />

                    </Form.Item>

                    <Form.Item
                        label="Option 2: "
                        name="optionB"
                        rules={[{ required: true, message: 'Please input an option!' }]}>

                        <Input />

                    </Form.Item>

                    <Form.Item {...tailLayout}>

                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>

                    </Form.Item>
                </Form>
            </Card>



        </div>
    )
}

export default NewQuestionCard