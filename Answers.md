1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Three JavaScript Array/Object Methods that do not produce side-effects are map(), filter(), and reduce(). The Object.assign() method is used to create a new object while extending the properties of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

An "action" is a plain javacript object, or functions that return plain javacript objects. Actions as function are the trigger for calling reducers, and reducers are pure functions that never produce any side-effects. The store is basically the same as React's state - except wiht Redux the state is now considered/scoped as global, or application-wide.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state only concerns with the component it is encased in. A good time to use component state is when the state in question is only needed within that one component. A good time to use application state is if multiple components need to communicate with the same state source.

4.  What is middleware?

Middleware in the context of Redux is a function that adds additional functionality to Redux.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to handle asynchronous operations inside our action creators.

6.  Which `react-redux` method links up our `components` with our `redux store`?

The connect() method links up our components with the redux store.
