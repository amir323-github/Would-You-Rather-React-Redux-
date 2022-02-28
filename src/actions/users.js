// import { saveQuestionAnswer } from '../utils/api';
// import { addAnswerToQuestion } from '../actions/questions';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADDING_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
export const ADDING_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function addAnswerToUser(authedUser, qid, answer) {
  return {
    type: ADDING_ANSWER_TO_USER,
    authedUser,
    qid,
    answer
  };
}



export function addQuestionToUser(question) {
  return {
    type: ADDING_QUESTION_TO_USER,
    question
  };
}


