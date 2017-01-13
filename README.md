# Chat application

## links
* [api](https://sytac-chat.firebaseapp.com/chat-api.js)
* [api docs](https://sytac-chat.firebaseapp.com/docs/)
* [example (no react)](https://sytac-chat.firebaseapp.com/)

## Excercise

You will create a small chat applications on top of an api that we have already implemented for you. The api is available in the links below. The api is built on top of firebase and already handles authentication and messaging for you. Your job is to create a user interface that displays allows users to sign in and sign out, displays new messages, and allows the user to post a message.

## Tutorial
To help you get started we suggest the following steps:

*Setup*

1. Install https://github.com/facebookincubator/create-react-app
2. Edit index.html
3. Include the JS api in your index.html, as well as https://www.gstatic.com/firebasejs/3.6.1/firebase.js
4. Think about the UI, what different components are there. Draw a wireframe on paper and see how you can divide the interface in the necessary building blocks.

*User authentication*

The first feature of the application is to let the users login.

1. Add a _sign in_ button to your application
2. Hook up the click event to the appropriate api call
3. Hook up the ```onAuth``` event
4. Use the ```isSignedIn``` function to render a signout button when a user is logged in.

*Chat messages*

The next feature we recommend to implement is the message list.

1. Hook up the ```onMessage``` event
2. Think about the right place to store the incoming messages
3. Render all messages on the screen in the correct order.
4. (optional) When messages arrive, we want to scroll down to the bottom in the view.

*Post message*

The next feature will be the post message feature.

1. Create the necessary HTML for the UI, this should probably include a text input.
2. Think about the controlled input in React and see if you can apply it for your message input.
3. Hook up the ```post``` api call to the appropriate submit event.
4. Make sure to clean your message input.

*User list*

The last feature will be to list all users in the chat.

1. Hook up the ```onUserChanges``` changes event
2. Think about the right place to store the users and how you will store them. The api will respond on changes and new users entering the chat. Think of an appropriate data structure to handle this.
3. Render all users on the screen.
4. (optional) Users will have their last online status as a property available. You can use this to indicate that users are online, by for example checking if the user has been online in the last 5 minutes. Indicate which users are currently online.

## Tips

* Try to compose your application out of smaller subcomponents.
* Keep your components small
* Try to minimize components with state. Can you push the state up? Can you move components which don't depend on state down?
* Prefer stateless functions over class based components.
* Prefer to use the functional programming features of the array object over control flow.
* If you are stuck for more than 15 minutes ask for help.
* Don't spend too much time on html/css, if you have time left, it would be nice to first refactor your code to make the React app as good as possible.
* Try some of the ES6 features.
