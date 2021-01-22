import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'
import './QuestionsContainer.css'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class QuestionsContainer extends React.Component{

    callback(key) {
        console.log(key);
      }
    
    render(){
        return(
            <div className='QuestionsContainer'>
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Answered Questions" key="1" onTabClick={() => console.log('TAB SELECTED')}>
                        <QuestionCard/>
                    </TabPane>
                    <TabPane tab="Unanswered Questions" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>                
            </div>
        )
    }
}

export default QuestionsContainer