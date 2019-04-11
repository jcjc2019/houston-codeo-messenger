const messagesURL = `http://10.185.1.104:3000/messages`;

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  
  Message.fetchMessages();

  //get all messages from server. Moved to Message class.
  // const fetchMessages = function(){
  //   fetch(messagesURL)
  //     .then((res) => res.json())
  //     .then(function (allMessages) {
  //       //clean the ul everything before renderMessage
  //       let ul = document.querySelector('#messages')
  //       ul.innerHTML = ""
  //       //render message for each message
  //       allMessages.forEach(renderMessage); //display message
  //     })
  // }

  //submit new message
  //NEED TO put form element inside DOMContentLoaded.
  let messageForm = document.querySelector("#message_form");
  messageForm.addEventListener('submit', function (e) {
    e.preventDefault();
    //create new message to server
    // createMessage();
    Message.createMessage();
  })

  //to re-request the messages every 500 ms and re-render them in the list
  setInterval(function () {
    Message.fetchMessages()
  }, 500)

})

//display message
const renderMessage = function(message){
  message = new Message(message.content);
  message.renderMessage()
}

//create new message, send it to server
// const createMessage = function(){
//   const input = document.querySelector("#message_input");
//   //post to server
//   fetch(messagesURL, {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify({
//       content: input.value
//     })
//   })
//   .then((res) => res.json())
//   .then(function(newMessage) {
//     //render new message
//     renderMessage(newMessage);
//   })
// }
