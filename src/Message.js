
class Message{

    constructor(content){
        this.content = content;
    }

    renderMessage(){
        let ul = document.querySelector('#messages');
        let li = document.createElement('li');
        li.innerText = this.content;
        ul.append(li);
    }
    //class method for create message. Moved from index.js
    static createMessage(){
        const input = document.querySelector("#message_input");
        const messagesURL = `http://10.185.1.104:3000/messages`;
        //post to server
        fetch(messagesURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                content: input.value
            })
        })
        .then((res) => res.json())
        .then(function (newMessage) {
            //render new message
            renderMessage(newMessage);
        })
    }
    //class method, to fetch all messages.
    static fetchMessages(){
        const messagesURL = `http://10.185.1.104:3000/messages`;
        fetch(messagesURL)
        .then((res) => res.json())
        .then(function (allMessages) {
            //clean the ul everything before renderMessage
            let ul = document.querySelector('#messages')
            ul.innerHTML = ""
            //render message for each message
            allMessages.forEach(renderMessage); //display message
        })
    }

}