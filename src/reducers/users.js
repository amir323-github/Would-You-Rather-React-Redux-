import {
  RECEIVE_USERS,
  ADDING_ANSWER_TO_USER,
  ADDING_QUESTION_TO_USER
} from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        //everything was on it which is empty state={}
        ...state,
        // all the users which we grabing them from action
        ...action.users
      };
    case ADDING_ANSWER_TO_USER:
      const { authedUser, qid, answer } = action;
console.log(authedUser,qid,answer)
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };
    case ADDING_QUESTION_TO_USER:
       const { question } = action;

      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat(question.id)
        }
      };
    default:
      return state;
  }
}
