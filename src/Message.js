
class Message{

    constructor(content){
        this.content = content
        // this.element = document.createElement('li')
    }

    renderMessage(){
        let ul = document.querySelector('#messages')
        let li = document.createElement('li');
        li.innerText = this.content;
        ul.append(li);
    }

}