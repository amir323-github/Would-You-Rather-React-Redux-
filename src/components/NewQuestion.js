import React, { Component } from 'react';
import { connect } from 'react-redux'
import {handleSaveQuestion} from "../actions/questions"
// import questions from '../reducers/questions';
import { Redirect } from 'react-router-dom'



class NewQuestion extends Component {

  //using the react state instead of redux because this is the only component will use this state
    state={
      //text start as empty string
      text1:"",
      text2:"",
      toDash:false,
      
      
    }
    //this will take an event and update the text1
    handleChangeMethod=(e)=>{
      //grap the specific value for the text field
      const text1 =e.target.value
     
      //call setState and update the text of our local state
      this.setState(()=>({
        text1

      }))

    }
    //this will take an event and update the text1
    handleChangeMethod2=(e)=>{
      //grap the specific value for the text field
      
      const text2=e.target.value
      //call setState and update the text of our local state
      this.setState(()=>({
        
        text2

      }))

    }
    //using handlesubmitmethod preventing default and adding the question to the store
    handleSubmitMethod=(e)=>{

      e.preventDefault()

      const{text1,text2}=this.state
      const {dispatch}   =this.props
       const author = this.props.authedUser
       
    
console.log(text1,text2)
      dispatch(handleSaveQuestion(text1,text2,author))
      console.log('The New Questions is:',text1,'Or',text2)
      this.setState(()=>({
        text1:"",
        text2:"",
        toDash:true,
        
      }))

    }
  
    render() {
       const {text1,text2,toDash}=this.state
      //  const{question}=this.props
      //  redirect to dashboard if submitted
      if(toDash===true){
        return <Redirect to ="/" />
      }
  
      return (
        <div>
 
       <h2 className='center'>Add New Question</h2>
       
       <form className='new-question' onSubmit={this.handleSubmitMethod}>
         <textarea
         placeholder='Please input your first question'
         value={text1}
         onChange={this.handleChangeMethod}
         className='textarea'
         />
          <textarea
         placeholder='Please input your second question'
         value={text2}
         onChange={this.handleChangeMethod2}
         className='textarea'
         />

         <button 
         
         className='button'
         type='submit'
         disabled={text1===""}
         >Submit</button>
        
       </form>

        </div>
  
      );
    }
  }
       // grap authedUser, users, questions from store passing id as a prop for that component
  function mapStateToProps ({authedUser, users, questions}, { id }) {
    //give me every poll at that id
    const question = questions[id]
    const answeredIds = Object.keys(users[authedUser].answers);
  
    return {
      authedUser,
      question,
      id,
      answeredIds
     
      }
    }
    
  export default connect(mapStateToProps)(NewQuestion)
  
  