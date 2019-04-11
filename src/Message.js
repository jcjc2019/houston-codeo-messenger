
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

}