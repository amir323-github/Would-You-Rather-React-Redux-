import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserPoll from './UserPoll';
import { Link } from 'react-router-dom'


class Dashboard extends Component {
    
  
    render() {
       //Log questionId that been asked from the store through mapstatetoprops and connect()
      console.log(this.props)
      const {authedUser,unanswered,users}=this.props
      return (
      
    
       
<div>
<h3 className='center'><strong className='upper'>Hello..{authedUser}</strong></h3>
<div className='center'>
<img
          src={users[authedUser].avatarURL}
          alt={`Avatar of ${users[authedUser].name}`}
          className='avatar'
             /> 
             </div>
  <button>
<Link to='/login'  >
    <h4 >LogOut</h4>
          </Link>
          </button>
   <div>
        
 <ul className='dashboard-list'>
 <Link to='/answered'  >
            <h2 className='center'>Answered</h2>
          </Link>
          <h2 className='center' ><span className='center1' > Unaswered</span></h2>
  { unanswered.map((question) => (
     <li key={question.id}>
          <UserPoll id={question.id}/>
     </li>
   ))}
 </ul>
</div>
       

</div>


  
      );
    }
  }
  //taking from the store specific data (questions,users,authedUsers)
      function mapStateToProps ({ questions,users,authedUser },{id}) {
        const question=questions[id]
        //grap all questions ids that been answered by the authedUser
        const answeredIds = Object.keys(users[authedUser].answers);
        return {
          question,
          users,
          authedUser,
          answeredIds,

   //now grap all of the different IDS of our questions and call .sort so they all sorted by their timestamp
          questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    // now grap all answered questions and sort them by timestamp
             unanswered :Object.values(questions)
            .filter(question => !answeredIds.includes(question.id))
            .sort((a, b) => b.timestamp - a.timestamp),

            
        }
      }

      
      export default connect(mapStateToProps)(Dashboard)