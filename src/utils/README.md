# Would You Rather Project

When the app loads a login form is show  to login to start. . One logged in the users avatar and name appear o. in the main dashboard view a list of all the questions the user has not answered yet is shown. the dashboard will show all answered and unanswered questions. Clicking on one the the questions will bring you the that questions page with the url questions/:questionId if unanswered the user is prompted to answer the question and once answered the question will show the users answer  . If the question has been previously answered that view will show automatically.

# steps

planning my apps and components making sure which component should connects to the store through connect 

some use react state as newquestion component as it will be used only through this component

one from most important which part of the store should be updated as part of answered questions in the user  reducer store so we can update and know how many questions remain to be answerd

also part of the store how many question made by the user in the user reducer so we can use it finaly to calcale total score in the leader board

first of all sitting up actions, reducers and middlewares

# Features 
i added a loading bar

# How to Run


To run this project please have yarn or npm installed on your machine and run:

npm install
npm start
or
yarn install
yarn start