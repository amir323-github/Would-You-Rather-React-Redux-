import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatUserPoll,formatDate} from "../utils/helpers"
import {handleAddAnswerToQuestion } from "../actions/questions" 
import { Redirect } from 'react-router-dom'

class UserPollDetails extends Component {

  state={
    radio:null,
    radio1:null,
    radio2:null,
    toDash:false,
    toAnswer:false
  };

  handleChangeValue=(e)=>{
    const radio =e.target.value
    const radio1 = radio
     
    //call setState and update the radio of our local state
    this.setState(()=>({
      radio1

    }))
  }
  handleChangeValue2=(e)=>{
    const radio =e.target.value
    const radio2 = radio
     
    //call setState and update the radio of our local state
    this.setState(()=>({
      radio2

    }))
  }

    // this.setState({radio:e.target.value})
  

   handleSubmitValue=(e)=>{
    e.preventDefault()
     const{radio1,radio2}=this.state
     const {dispatch,qid,authedUser}=this.props
     let answer = null
// if radio1 is a thing set answer = radio1 else = radio2
  radio1
  ? answer=radio1
  : answer = radio2

 
    console.log(qid,authedUser,answer)

     dispatch(handleAddAnswerToQuestion({authedUser,qid,answer}))

     this.setState({toDash:true,radio:null})
   }
handleReturn=()=>{
  this.setState({toAnswer:true})
}

   
    
  
    render() {
      const {toAnswer}=this.state
      // //  redirect to dashboard if submitted
      // if(toDash===true){
      //   return <Redirect to ="/" />
      // }
       //  redirect to Answered if submitted
       if(toAnswer===true){
        return <Redirect to ="/answered" />
      }


      const { question,answeredIds ,authedUser} = this.props
        // id invidual poll does not exist print 404 Error!
      if (question === null) {
        return <p> <h2 className='center'>404 Error !This Question doesn't existd</h2></p>}
        //destructuring some data from question
        const {
          name, avatar, timestamp, optionOne,optionTwo,
      } = question
  console.log(this.props)
  //first setting the image for every poll
  //second build out user poll using data coming from the store
  //build the  name , optionOne , optionTwo , number of votes , and to be able to vote for polls you did not

      return (
        // <Link to={`/question/${id}`} className='userpoll'>
        <div className='userpoll'>
           <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
             /> 
        
         <div className='question-info'>
         <div>
           
           <span>{name}</span>
           
           <div>{formatDate(timestamp)}</div>
           
 
           <br></br>
<span className='yourvote'>
           {question.optionOne.votes.includes(authedUser)

?"OptionOne is Your Vote"

:null

}
</span>
 <br></br>
   <input
   id="optionOne"
  
   name="questionone"

   type="radio"

   value="optionOne"
   disabled={this.state.radio2||answeredIds.includes(question.id)}

  onChange={this.state.radio2
    ?null
    
    :this.handleChangeValue}
   
   />
<label htmlFor ="questionOne" className='butt'>optionOne: {optionOne.text}</label>
<br></br>


<span>{this.state.radio1
  ?"Current Votes  "+((optionOne.votes.length+1)/3*100).toFixed(2)
  :"History Votes  "+(optionOne.votes.length/3*100).toFixed(2)} %</span>
  <div>
  <span>{this.state.radio1
  ?"Current Votes  "+parseInt( optionOne.votes.length+1)
  :"History Votes  "+optionOne.votes.length} /3</span>
  </div>
<br></br>
<span className='yourvote'>
{question.optionTwo.votes.includes(authedUser)

?"OptionTwo is Your Vote"

:null

}
</span>
<br></br>

<input 

   id="optionTne"
  
   name="questiontwo"

   type="radio"

   value="optionTwo"
   disabled={this.state.radio1||answeredIds.includes(question.id)}

  onChange={this.state.radio1
    ?null

    
    :this.handleChangeValue2}  
   
   
   />
<label  htmlFor ="questionTwo" className='butt'>optionTwo: {optionTwo.text}</label>
<br></br>


<span>{this.state.radio2
  ?"Current Votes  "+((optionTwo.votes.length+1)/3*100).toFixed(2)
  :"History Votes  "+(optionTwo.votes.length/3*100).toFixed(2)} %</span>

<div>
  <span>{this.state.radio2
  ?"Current Votes  "+parseInt(optionTwo.votes.length+1)
  :"History Votes  " +optionTwo.votes.length} /3</span>
  </div>
 

</div>


   <button 
   
    className='but'
  //  type='submit'
   onClick={this.handleSubmitValue}
  disabled={answeredIds.includes(question.id)}
   >Submit Your Vote</button>

   <button 
   className='but'
   onClick={this.handleReturn}
   disabled={!answeredIds.includes(question.id)}
   
   >
    Already Voted Please Return
   </button>
  
 

  

       </div> 
       </div>
       
  
      );
    }
  }
      // grap authedUser, users, questions from store passing id as a prop for that component
  function mapStateToProps ({authedUser, users, questions}, {id}) {
    
    //give me every poll at that id
    const question = questions[id]
    const answeredIds = Object.keys(users[authedUser].answers);
    
   
  
    return {
     qid: id,
      authedUser,
      answeredIds,
      // use formatUserPoll to format userpoll
      question:question

      ?formatUserPoll(question,users[question.author],authedUser)
    
         : null
      }
    }
    
  export default connect(mapStateToProps)(UserPollDetails)