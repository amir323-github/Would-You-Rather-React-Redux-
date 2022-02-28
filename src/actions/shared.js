import { getInitialData } from '../utils/api';
import { receiveQuestions } from '../actions/questions';
import { receiveUsers } from '../actions/users';
// import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

// const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
  return (dispatch) => {
    //showing loading bar till dispatching users,questions
    dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
      //adding questions to the store
      dispatch(receiveQuestions(questions));
      //adding questions to the store
      dispatch(receiveUsers(users));
      //temporary using tyler as authed user
      //  dispatch(setAuthedUser(null));
      //hide loading bar after dsipatching users,questions
      dispatch(hideLoading())
    });
  };
}
// function addAnswerToQuestion(authUser, qid, answer) {
//   return {
//     type: ADD_ANSWER_TO_USER,
//     authUser,
//     qid,
//     answer
//   };
// }


//next using reducers to handle this dispatching