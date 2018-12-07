# Assessing your Redux Fu

- The objective of this challenge is to get you used to answering a few questions about `Redux/Immutability` that are commonly asked in interviews.
- We also have some more reps for you to help hammer in the knowledge you've thus far learned.
- Answers to your written questions will be recorded in _Answers.md_
- This is to be worked on alone but you can use outside resources. You can _reference_ any old code you may have, and the React Documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something.

## Start by forking and cloning this repository.

## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

[x] 1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
[x] 1. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
[x] 1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
[x] 1. What is middleware?
[x] 1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
[x] 1. Which `react-redux` method links up our `components` with our `redux store`?

## Initializing Project - READ THIS CAREFULLY, you have two apps here. A server, and a client.

[x] _ `cd` into the forked copy of this repo.
[x] _ **RUN** `yarn` or `npm install` to retrieve all `server-side` the dependencies.
[x] _ **LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.
[x] _ **RUN** `yarn start` or `npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
[x] _ After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an empty Array `[]` returned to you. This is an array that your **API** will be using to store our Smurf Data.
[x] _ **LOOK** at your `smurfs` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
[x] \* We've added a typical `redux` file structure for:

```
src
  - components
  - reducers
    - index.js
  - actions
    - index.js
```

[x] _ **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
[x] _ **cd** into `smurfs` and run `yarn` or `npm install` to retrieve the client side dependencies.
[x] \* **RUN** `yarn start` or `npm start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.

## Project Description

[x] - For today's challenge you're going to be building a `React/Redux` application that interfaces with the same `smurfs` api you played with last week. The key differences here are that you're going to be wiring up Redux. and `redux-thunk`

## API Design - This is how you'll interface with the API and what is required from every endpoint.

### GET '/smurfs'

[x] - To retrieve an array all the smurfs in the Smurf DB simply write a get to the endpoint `'/smurfs'`.
[x] - Because `Redux-Thunk` is wired up as a middleware for this project. Be sure to utilize thunks when appropriate:

```js
return dispatch => {
  dispatch({ type: FOO_ACTION_TYPE });
  promise.then(({ data }) => {
    dispatch({ type: ANOTHER_ACTION_TYPE, payload: data });
  });
};
```

- Your response from the server should be an array of smurfs.

```js
[
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  }
];
```

### POST '/smurfs'

[x] - To add a smurf to the Smurf DB you'll need all three fields. `name`, `age`, and `height`.

- Example:

```js
{
  name: 'Brainey',
  age: 200,
  height: '5cm'
}
```

[x] - If a smurf is created correctly, you should see a response that is an array of smurfs with unique id's assigned to each smurf.
[x] - Initially Brainey will be in the array, but it takes more than one smurf to make the village. Be sure to add a few smurfs to populate our smurf village.
[x] - **HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.
[x] - Example of object created in Smurf DB:

```js
[
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  },
  {
    name: "Sleepy",
    age: 200,
    height: "5cm",
    id: 1
  }
];
```

## STRETCH PROBLEM

- The following two endpoints are here for you if you'd like to push yourselves a little further.

### PUT '/smurfs/123', where 123 is the Id of the smurf you want to modify

- For this endpoint to work, you'll need an `id` added to the URL, and at least one field to update on the Smurf object. `name` `age` `height`.
- Example:

```js
input:
{
  id: 1,
  name: 'Grumpy'
}
output:
[
  {
    name: 'Grumpy',
    age: 30,
    height: '3cm',
    id: 1
  },
  {
    name: 'Sleepy',
    age: 211,
    height: '2cm',
    id: 0
  }
]
```

### DELETE '/smurfs/123', where 123 is the Id of the smurf you want to remove

[x] - For this endpoint to work, all you need is an id sent up as part of the request url.

[x] - If your delete worked, you'll get a an array back with all of the smurfs but with your requested smurf removed.
[x] - You don't need any input beyond the url parameter of the smurf, so if we send up a delete request to `/smurfs/123` then you'll remove the smurf by that id.

- Example:

```js
output: [
  {
    name: "Sleepy",
    age: 200,
    height: "5cm",
    id: 1
  }
];
```
