import React from 'react'
import { NavLink } from 'react-router-dom'
import { store } from '../../store'
import {setAuthedUser} from '../../actions/authedUser'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'

import './Nav.css'


function onClickHandler(){
    store.dispatch(setAuthedUser(''))
}

function Nav ({authedUser, users, history}) {

    if(users[authedUser]['name'] === undefined){
        history.push('/')
    }

    return (
        <nav className='Nav'>
            <div className="tabset">
                <NavLink className='link' to='/home' exact activeClassName='active'>Home</NavLink>
                <NavLink className='link' to='/newquestion' activeClassName='active'>New Question</NavLink>

                <NavLink className='link' to='/leaderboard' activeClassName='active'>Leader Board</NavLink>
                <div className='userInfo'>Hello, <strong>{users[authedUser]['name']}</strong></div>
                <br></br>
                <NavLink className='signOutButton' to="/login" onClick={onClickHandler}>Sign out</NavLink>  

            </div>
        </nav>
    )
}

function mapStateToProps({ authedUser, users }) {
    return {
        loading: authedUser === null,
        authedUser: authedUser,
        users: users,
    }
}

export default withRouter(connect(mapStateToProps)(Nav))