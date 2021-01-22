import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../../store'
import {setAuthedUser} from '../../../actions/authedUser'
import './Login.css'

class LoginPage extends React.Component {
    
    user_id = ''


    handleSelectChange(user_id) {
        console.log(this.user_id);
        store.dispatch(setAuthedUser(user_id))
        this.props.history.push(`/home`);
    }

    render() {
        const { users } = this.props

        return (
            <div className='LoginPage'>
                Login Page
                <div>
                    <form>
                        <label>
                            Select User: 
                        </label>
                        <div>
                            <select defaultValue='none' onChange={(event) => {
                                this.user_id = event.target.value
                                this.handleSelectChange(this.user_id)

                            }}>
                                <option key='none' value='none' disabled>None</option>
                                {Object.keys(users).map((user) => (
                                    <option key={user} value={user}>{user}</option>
                                ))}
                            </select>
                        </div>
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