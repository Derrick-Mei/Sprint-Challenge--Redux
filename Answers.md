1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

4 ways to return a new array, map, concat, filter, reduce
Object.assign({}, some object you want copied, property you want changed)
You can also use {...originalObject, ...someNewProperty}


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions return a packet in a form of a object that contains what kind of action/type should proceed and also has data that is passed to the reducer.

the reducer receives the packet of data.  Using the passed type and switch case it decides what to do with payload and returns a new object which becomes the new state in the store

the store is a container for the app state.  It has 4 methods, dispatch, getState, subscribe, and changereducer?

it's known as a single source of truth because data in the app can only be accessed via the store thru the connect function and data is only created and the store is replaced but not mutated

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
I'm not too positive.  Application state would be like the store.  You would use application state when you need to have persistent data throughout the app that would be changed.  Component state should be used for things the the store state has no need for like toggling certain functions.


1.  What is middleware?
middleware is softwate that operates between actions and reducers that help us do what we want.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

it allows us to use data asycronously via axio/promises. Using thunk you can return a function containing dispatch as a parameter in the actions versus returning an object.

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect
