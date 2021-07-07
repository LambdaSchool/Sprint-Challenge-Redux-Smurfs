1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of
another object?
Array.filter, Array.map, and Array.concat. We use Object.assign to create a new object while extending the properties of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in
a redux application?
Actions are the payloads of info that describe what's happening in the application and communicate that to the reducer. Reducers take the information from
actions and return a new state based off the information from the actions and the old state. The store holds all the state and is updated by the reducer. The
store is the single source of truth because it's used to store all the state and is always accessible in the app.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Component state lives inside the component, and can only be updated within that component and passed down to children with props. Application state can be
accessed from anywhere in the application and is kept in the redux store. Component state is good for short term state changes, and Application state
is good for long-term changes.

4.  What is middleware?
Middleware is a piece of software used to extend functionality of another piece of software. Thunk and Logger are examples of middleware.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk is a middleware package that is plugged into redux to allow us to use redux asynchronously.

6.  Which `react-redux` method links up our `components` with our `redux store`?
connect()
