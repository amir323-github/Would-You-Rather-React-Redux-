export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }
  
  export function formatUserPoll (question,author,authedUser) {
    // const userdetails = users[question.author]
    const { id,  optionOne ,optionTwo
      , timestamp } = question
    const { name, avatarURL ,answers} = author
  
    return {
      name,
      id,
      timestamp,
      optionOne,
      optionTwo,
      answers,
  
       avatar: avatarURL
   
    }
  }