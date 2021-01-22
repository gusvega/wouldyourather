import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'
import './QuestionsContainer.css'

class QuestionsContainer extends React.Component{
    
    render(){
        return(
            <div className='QuestionsContainer'>
                <p>QUESTIONS CONTAINER</p>
                <QuestionCard/>
            </div>
        )
    }
}

export default QuestionsContainer