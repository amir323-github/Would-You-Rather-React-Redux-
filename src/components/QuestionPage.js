import React, { Component } from 'react';
import { connect } from 'react-redux'
// import UserPoll from './UserPoll';
import UserPollDetails from './UserPollDetails';
// import NewQuestion from './NewQuestion';


class QuestionPage extends Component {

 
    
  
    render() {
       console.log(this.props)

       const {id}=this.props
  
      return (
        
        <div>
            <UserPollDetails id={id}/>
            {/* <NewQuestion id ={id}/> */}

  </div>
      );
    }
  }
      function mapStateToProps({authedUser,questions,users},props){
          const {id}=props.match.params
          return{
              id
          }

      }
  
  export default connect(mapStateToProps) (QuestionPage)