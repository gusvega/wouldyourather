import React from 'react'


class HomePage extends React.Component{

    componentDidMount(){
        if(this.props.authedUser === null){
            this.props.history.push(`/login`);    
        }
    }

    render(){
        return <p>Home Page</p>
    }
}
  
  export default HomePage