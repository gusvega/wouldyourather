import React from 'react'
import Nav from '../../../Nav/Nav'
import AnsweredQuestion from '../AnsweredQuestion/AnsweredQuestion'
import './AnsweredQuestionPage.css'

class AnsweredQuestionPage extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <div className='AnsweredQuestionPage'>
                    <p>ANSWERED QUESTION PAGE</p>
                    <AnsweredQuestion/>
                </div>
            </div>
        )
    }
}

export default AnsweredQuestionPage