import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  

  render() {
     

    return (
      
<nav className='nav'>

      <ul>
        <li>
          <NavLink to='/'exact activeClassName='active' >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active' >
            New Question
          </NavLink>
          </li>
          <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
      </ul>
    </nav>
          
 
               
    );
  }
}
    


export default Nav
