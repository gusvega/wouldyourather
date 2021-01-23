import React, { Component, Fragment } from 'react'

import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import LoginPage from './pages/login/LoginPage'
import HomePage from './pages/home/HomePage/HomePage'
import NewQuestionPage from './pages/newQuestion/NewQuestionPage/NewQuestionPage'
import Leaderboard from './pages/leaderboard/LeaderboardPAge/LeaderboardPage'
import AnsweredQuestionPage from './pages/answeredQuestion/AnsweredQuestionPage/AnsweredQuestionPage'
import UnansweredQuestionPage from './pages/unansweredQuestion/UnansweredQuestionPage/UnansweredQuestionPage'


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
                  
                  <Route path='/newquestion' exact component={NewQuestionPage} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
                  <Route path='/answeredquestion' exact component={AnsweredQuestionPage} />
                  <Route path='/unansweredquestion' exact component={UnansweredQuestionPage} />

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
    users: users,
    // questions: questions,
  }
}

export default connect(mapStateToProps)(App)