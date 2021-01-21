import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../../store'
import {setAuthedUser} from '../../../actions/authedUser'
import { NavLink } from 'react-router-dom'




class HomePage extends React.Component{

    componentDidMount(){
        if(this.props.authedUser === ''){
            this.props.history.push(`/`);    
        }
    }

    onClickHandler(){
        // this.props.history.push('/login');

        store.dispatch(setAuthedUser(''))
    }

    render(){
        return (
            <div>
                <p>Home Page</p>
                <p>{this.props.authedUser}</p>
                <NavLink to="/login" onClick={this.onClickHandler}>Sign out</NavLink>
            </div>)
    }
}
  
function mapStateToProps({ authedUser, users }) {
    return {
        loading: authedUser === null,
        authedUser: authedUser,
        users: users
    }
}

export default connect(mapStateToProps)(HomePage)