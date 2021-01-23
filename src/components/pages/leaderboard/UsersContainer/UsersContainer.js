import React from 'react'
import User from '../User/User'
import './UsersContainer.css'

class UsersContainer extends React.Component{
    render(){
        return (
            <div className='UsersContainer'>
                <User/>
            </div>
        )
    }
}

export default UsersContainer