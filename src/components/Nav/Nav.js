import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
// import { store } from '../../store'
import {setAuthedUser} from '../../actions/authedUser'

import './Nav.css'



class Nav extends React.Component {
    


    onClickHandler(){
        this.props.dispatch(setAuthedUser(''))
    }

    render(){

    const {authedUser} = this.props

    return (
        <nav className='Nav'>
            <div className="tabset">
                <NavLink className='link' to='/home' exact activeClassName='active'>Home</NavLink>
                <NavLink className='link' to='/newquestion' activeClassName='active'>New Question</NavLink>

                <NavLink className='link' to='/leaderboard' activeClassName='active'>Leader Board</NavLink>
                <div className='userInfo'>Hello, <strong>{authedUser}</strong></div>
                <br></br>
                <NavLink className='signOutButton' to="/login" onClick={this.onClickHandler}>Sign out</NavLink>  
            </div>
        </nav>
    )}
}

function mapStateToProps({ authedUser, users, dispatch }) {
    return {
        loading: authedUser === null,
        authedUser: authedUser,
        users: users,
        dispatch
    }
}

export default connect(mapStateToProps)(Nav)