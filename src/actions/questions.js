import { saveQuestion } from '../utils/api';
 import { addQuestionToUser } from '../actions/users';
import { saveQuestionAnswer } from '../utils/api';
import {addAnswerToUser} from '../actions/users'
// import { showLoading, hideLoading } from 'react-redux-loading'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
//voting
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';
//making a question
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}
//votin
export function addAnswerToQuestion(authedUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authedUser,
    qid,
    answer
  };
}
//adding a question to the store

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch )=> {
    //  const { id } = getState()
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      question => {
        dispatch(addQuestion(question));
         dispatch(addQuestionToUser(question));
      }
    );
  };
}



export function handleAddAnswerToQuestion ({authedUser, qid, answer}) {
  return (dispatch) => {
    // optimistic ui update , before backend gets actions
      // dispatch(addAnswerToQuestion(authedUser, qid, answer))

    return saveQuestionAnswer(authedUser, qid, answer).then(()=>{
      dispatch(addAnswerToQuestion(authedUser, qid, answer))
      dispatch(addAnswerToUser(authedUser, qid, answer));
  
     
      })
  }
} 

