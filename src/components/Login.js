import { connect } from 'react-redux'
import React, { Component } from 'react';
import {setAuthedUser} from "../actions/authedUser"
import { Redirect } from 'react-router-dom'


class Login extends Component {

   state={

    UserSelectedID:null,
    toDash:false
   }
    handleUserOption=(e)=>{
      const UserSelectedID= e.target.value
      // const {users}=this.props
      this.setState({UserSelectedID})


    }
    handleLogin=()=>{
      const { UserSelectedID}=this.state
const {dispatch}=this.props
dispatch(setAuthedUser(UserSelectedID))
this.setState({toDash:true})

    }

 
    
  
    render() {
      const {toDash}=this.state
      //  redirect to dashboard if submitted
      if(toDash===true){
        return <Redirect to ="/" />
      }

       const {UserID,users}=this.props
  
      return (
       <div> 
        <h2 className='center'>Please Choose a User</h2>

     <div className='center'>
        <img
          src={"data:image/jpeg;base64,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"}
            
            
         alt={`Avatar of `}
          // className='avatar'
             /> 
             </div>

        <div  className='center'>
          <select 
          onChange={this.handleUserOption}
          
          >
            <option value = "" hidden>

              select a user

            </option>
            {
              UserID.map((userid)=>(

                <option key={users[userid].id} value={users[userid].id}  >

           {users[userid].name}

                </option>
              )
              
              )
            }
          </select>
         <div>
          <button
          className='button'
          onClick={this.handleLogin}
          >
            Login
          </button>
          </div> 
          </div>
          </div> 
      );
    }
  }
    function mapStateToProps({users})  {
     const UserID =Object.keys(users)

      return{

        UserID,
        users
      }
    }
  
  export default connect(mapStateToProps) (Login)
  




