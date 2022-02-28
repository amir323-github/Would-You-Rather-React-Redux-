import React, { Component } from 'react';
import { connect } from 'react-redux'

class LeaderBoard extends Component {
    
  
    render() {
      const {users}=this.props
       console.log(this.props)
      //  const name =users[authedUser].name
      //  const avatar=users[authedUser].avatarURL
      //  const numberOfAnswers=user

      const getData = Object.values(users).map(user=>({

        numberOfAnswers:Object.values(user.answers).length,

        numberOfQuestions:user.questions.length,

         name:user.name,

         avatar:user.avatarURL,

         id:user.id,
         

         totalScore:Object.values(user.answers).length+user.questions.length

      })).sort((a,b)=>b.totalScore-a.totalScore)

      // const Total =getLeaderBoarddata.totalScore
  
      return (
        
        <div className='center'>
          
          {getData.map((user)=>(
            
           <div className='center' > 
        <img
        src={user.avatar}
        alt={`Avatar of ${user.name}`}
        className='avatar'
           /> 
                        {user.name}

         <h4>Number of Answers is  {user.numberOfAnswers}</h4>
         
         <h4>Number of Questions is  {user.numberOfQuestions}</h4>
         
         <h4> Total Score is  {user.totalScore}</h4>


      </div>
      
   
     
          )).sort((a,b)=>b.totalScore-a.totalScore)}

                 </div>
  
      );
    }
  }
  function mapStateToProps({ users,authedUser,questions }) {
    
   
    
    return {
    users,
    authedUser,
    questions
    
    };
  }
  
  export default connect(mapStateToProps)(LeaderBoard);
  
  