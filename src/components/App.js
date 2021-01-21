import React, { Component, Fragment } from 'react'

import { handleInitialData } from '../actions/shared'
import {setAuthedUser} from '../actions/authedUser'
import { connect } from 'react-redux'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import LoginPage from './pages/login/LoginPage'
import HomePage from './pages/home/HomePage'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            {this.props.loading === true
              ? null
              : <div> 
                  <Route path='/home' component={HomePage} />
                  <Route path='/login' exact component={LoginPage} />

                  <Route exact path="/">
                    {this.props.authedUser ? <Redirect to="/home" /> : <Redirect to="/login" />}
                  </Route>

                </div>}
          </div>

        </Fragment>
      </Router>
    );
  }
  
}

function mapStateToProps ({ authedUser, users }) {
  return {
    loading: authedUser === null,
    users: users
  }
}

export default connect(mapStateToProps)(App)