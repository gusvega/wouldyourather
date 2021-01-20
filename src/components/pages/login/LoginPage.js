import React from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';
import {setAuthedUser} from '../../../actions/authedUser'




class LoginPage extends React.Component {

    handleSubmit(event) {
        console.log('Select User: ' + event.target.value);
        event.preventDefault();
        // this.props.history.push(`/home`);
        // this.props.dispatch(setAuthedUser(event.target.value))

    }

    handleSelectChange(event) {
        console.log(event.target.value);
    }

    render() {
        const { users } = this.props

        return (
            <div>
                Login Page
                <div>
                    <form>
                        <label>
                            Select User: 
                        </label>
                        <div>
                            <select onChange={this.handleSelectChange}>
                                {Object.keys(users).map((user) => (
                                    <option key={user} value={user}>{user}</option>
                                ))}
                            </select>
                        </div>
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    // console.log(authedUser, users)
    return {
        loading: authedUser === null,
        authedUser: authedUser,
        users: users
    }
}

export default connect(mapStateToProps)(LoginPage)