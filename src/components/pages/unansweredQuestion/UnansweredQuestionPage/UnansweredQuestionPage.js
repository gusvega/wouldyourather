import React from 'react'
import Nav from '../../../Nav/Nav'
import './UnansweredQuestionPage.css'
import UnansweredQuestion from '../UnansweredQuestion/UnansweredQuestion'

class UnansweredQuestionPage extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <div className='UnansweredQuestionPage'>
                    <UnansweredQuestion/>
                </div>
            </div>
        )
    }
}

export default UnansweredQuestionPage