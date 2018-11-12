1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?  
    array.map(), array.filter(), and array.reduce() do not produce side-effects. We can use Object.assign or return a new object while using a spread operator on another object to extend its properties.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?  
    An action is an object that contains a type property and a payload. The type property is a descriptive name of the action, and the payload contains the data. Actions are sent to reducers.  
    Reducers receive actions and return a new state object.  
    The store holds the state and is called the single source of truth because it contains the entire state in an object tree.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?  
    Application state is global, and component state is local. Application state is used when a component needs to access part of the state such as an array of names. Component state is useful for dealing with user input.

4.  What is middleware?  
    Middleware is mostly used for dealing with asynchronous actions. It receives dispatch and getState functions and returns an action.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?  
    Redux-thunk allows us to work with asynchronous data by giving our action creators the ability to dispatch action based on conditions or delay them.

6.  Which `react-redux` method links up our `components` with our `redux store`?  
    connect()
