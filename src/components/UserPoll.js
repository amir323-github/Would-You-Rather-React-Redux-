import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatUserPoll,formatDate} from "../utils/helpers"
import { Link } from 'react-router-dom'

class UserPoll extends Component {
    
  
    render() {
      const { question } = this.props
        // id invidual poll does not exist print 404 Error!
      if (question === null) {
        return <p> <h2 className='center'>404 Error !This Question doesn't existd</h2></p>}
        //destructuring some data from question
        const {
          name, avatar, timestamp, optionOne,optionTwo, id, 
      } = question
  console.log(this.props)
  //first setting the image for every poll
  //second build out user poll using data coming from the store
  //build the  name , optionOne , optionTwo , number of votes , and to be able to vote for polls you did not

      return (
        <Link to={`/questions/${id}`} className='userpoll'>
           <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
             /> 
        
         <div className='question-info'>
         <div>
           
           <span>{name}</span>
           
           <div>{formatDate(timestamp)}</div>
           
               
               <option>OptionOne: {optionOne.text}</option>
           
               <option>OptionTwo: {optionTwo.text}</option>
           
          
         </div>

        
          
          <button 
         
         className='button'
         
         >ViewPollDetails</button>
          
        
       </div> 
       </Link>
  
      );
    }
  }
      // grap authedUser, users, questions from store passing id as a prop for that component
  function mapStateToProps ({authedUser, users, questions}, { id }) {
    //give me every poll at that id
    const question = questions[id]
   
  
    return {
      authedUser,
      // use formatUserPoll to format userpoll
      question:question

      ?formatUserPoll(question,users[question.author],authedUser)
    
         : null
      }
    }
    
  export default connect(mapStateToProps)(UserPoll)