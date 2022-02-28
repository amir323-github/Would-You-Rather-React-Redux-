import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserPoll from './UserPoll';
import { Link } from 'react-router-dom'


class Answered extends Component {
    
  
    render() {
       //Log questionId that been asked from the store through mapstatetoprops and connect()
      console.log(this.props)
      const {authedUser,answered,users}=this.props

      console.log(answered)
      return (
       
    
       
<div>
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
        <ul className='dashboard-list'>
        <h2 className='center' ><span className='center1' > Answered</span></h2>
        <Link to='/'  >
    <h2 className='center'>Unaswered</h2>
          </Link>
    
    
         { answered.map((question) => (
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

            answered :Object.values(questions)
            .filter(question => answeredIds.includes(question.id))
            .sort((a, b) => b.timestamp - a.timestamp)
            
        }
      }

      
      export default connect(mapStateToProps)(Answered)