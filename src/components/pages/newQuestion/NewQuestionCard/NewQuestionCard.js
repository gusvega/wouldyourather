import React from 'react'
import './NewQuestionCard.css'
import { Form, Input, Button } from 'antd';
import { Skeleton, Card } from 'antd';
import { handleAddQuestion } from '../../../../actions/questions'


const { Meta } = Card;

function NewQuestionCard({ loading }) {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = (values) => {
        console.log('Success:', values);
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
                        rules={[{ required: true, message: 'Please input your a question!' }]}>

                        <Input.TextArea />

                    </Form.Item>

                    <Form.Item
                        label="Option 1: "
                        name="username"
                        rules={[{ required: true, message: 'Please input an option!' }]}>

                        <Input />

                    </Form.Item>

                    <Form.Item
                        label="Option 2: "
                        name="password"
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