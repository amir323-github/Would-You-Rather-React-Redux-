import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
// import Login from './Login';
 import Nav from './Nav';
// import Home from './Home'
 import LeaderBoard from './LeaderBoard';
 import NewQuestion from './NewQuestion';
 import LoadingBar from 'react-redux-loading'
 import QuestionPage from './QuestionPage';
import Answered from './Answered';
import Login from './Login';

// now console loge sshould see the store

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    
    return (

     
 //Routing Our App 
<Router>
{/*Using Fragment acting like a div but not gonna add a div to the DOM*/}
<Fragment>
<LoadingBar/>
      <div className='container' >
        
        <Nav/>
{/*do not render dashboard until it finish loading , authedUser is assigned a value*/}
        {this.props.stillLoading===true 
        ?<Login/>
        : <div>
          <Route path ="/" exact component={Dashboard}/>
          <Route path ="/add" component={NewQuestion}/>
          <Route path ="/leaderboard"component={LeaderBoard}/>
          <Route path ="/questions/:id"component={QuestionPage}/>
          <Route path ="/answered" component={Answered }/>
          <Route path ="/login" component={Login }/>
     
          </div>}
      </div>
      </Fragment>
</Router>
    
    );
  }
}



//grab autheduser from the store
function mapStateToProps({ authedUser }) {
  return {
   stillLoading: authedUser===null
  };
}

export default connect(
   mapStateToProps,
  
)(App);
