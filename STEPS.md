Original Way: 
- Step 1: 
    - create fetch method inside DOMContentLoaded to get all messages from the server. (the final renderMessage method is blank)
- Step 2: 
    - Add constructor for message. 
    - Put everything related to creating HTML elements inside an instance method renderMessage inside Message Class. 
    - create a const renderMessage to get the instance method renderMessage
    - back to step 1 fetch method, and fulfill the renderMessage part in step 1 by referring to renderMessage().
- Step 3: 
    - create a static class fetch method inside Message class to post to server. 
    - select form, add eventlistner(createMessage) for form submission action.
- Step 4:
    - wrap fetch in step 1 inside a fetchMessage function. add setInterval to fetch again after 500 ms.

A better way:
- step 1: put everything related to message inside message class:
    - constructor: only properties
    - instance methods: renderMessage(), everything related to HTML elements inside this.
    - class methods: fetchMessages()[get everything from the server], createMessage()[need to post to server, so a class method].
- step 2: addEventListeners inside index.js:
    - DOMContentLoaded: 
        - fetchMessages(renderMessage inside the last step of fetchMessages) [need to add a new const outside eventlistener to create a new instance and access the instance method renderMessage]
        - setInterval, inside setInterval, use fetchMessages static method.
    - When form is submitted: class method-- createMessage()