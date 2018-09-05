1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  * Object.assign
  * concat
  * the spread (...) operator
  * map and reduce but will return a new array. but when  used on an array inside an object, they can mutate the object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  * action = is the function you will call when you wanted to dispatch information to the reducer.
  * reducers = reducers change what is in the store
  * store = the store is application state

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  * Application state is a state that any component in your app can subscribe to. It us useful for holding information that multipule components might need access too
  * Component state is state that kept at a component lvl. component state can be passed down to other components. best use is if your state does not every need to travel very far from the component holding the state

4.  What is middleware?
  * in redux, middleware sits between action and reducer.  It will look at data traveling between the two and can make changes before it hits the reducer. this is where thunk and logger live.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  * redux-thunk is what allows us to make async state changes.  it gives our actions access to the redux methods dispatch and getState. this allows us to pass functions from our action instead of just objects.

6.  Which `react-redux` method links up our `components` with our `redux store`?
 * connect 
