1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  Three Array/Methods that can be used to produce no side effects are map, reduce, and filter. Object assign is the method used to extend object properties without mutating. 

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  Actions are some information that is dispatched to the reducer to make changes to the store based on the users event they called. Reducers change the current state and make a new state to be passed to the application. They do not mutate the previous state. The store contains our state for the whole application. So the store holds an inital state, actions get called by the user interacting with the application and they are dispatched to reducers. The reducers will then take the previous state and make a new state that will then be stored as a new state in the store. The store is a single source of truth because it has not mutations of information, instead the data it hols is only stored once.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  Application state is where the state is stored in another area and implemented into the react application when it is needed in a certain component, also can be called global state. Component state is where it state is defined in the component and can only be passed down to its children, also can be called local state. A good time to use Application is when you need the state in multiple components. While component state is good for use in a single component and the state is only need to be passed down as props.

4.  What is middleware?
  Middleware is a checking system that can stop, dispatch, and change the actions being sent to the reducer. The middleware is used to make sure the right information is being sent to the reducers.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  Thunk lets us handle asynchronus operations in our actions. This allows us to call APIs and let the app look for it in the background while the app still runs. If we did not have this, the app would freeze and we would have to wait for the information before we continue. It changes our action-creators because we add axios and promises to them, and based on the response, we will output different information. And now we can also dispatch multiple actions from a single action creator.

6.  Which `react-redux` method links up our `components` with our `redux store`?
  The method that links components and the store is connect.

