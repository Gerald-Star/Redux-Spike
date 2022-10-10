

//REDUX APP METHODS


const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";

const requestingData = () => {
  return { type: REQUESTING_DATA };
};
const receivedData = data => {
  return { type: RECEIVED_DATA, users: data.users };
};

const handleAsync = () => {
  return function(dispatch) {
    // dispatch request action here

    dispatch(requestingData());

    setTimeout(function() {
      let data = {
        users: ["Jeff", "William", "Alice"]
      };
      // dispatch received data action here

      dispatch(receivedData(data));
    }, 2500);
  };
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      };
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);


//creatimg REDUX App

const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {
  switch (action.type) {
      case INCREMENT:
      return state +1;

      case DECREMENT:
      return state -1;

      default:
      return state;
  }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
  return {
    type: INCREMENT
  };
}; // Define an action creator for incrementing

const decAction = () => {
  return {
    type: DECREMENT
  };
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers





//REDUX IMMUTABILITY


const ADD_TO_DO = "ADD_TO_DO";

// A list of strings representing tasks to do:
const todos = [
  "Go to the store",
  "Clean the house",
  "Cook dinner",
  "Learn to code"
];

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      // don't mutate state here or the tests will fail

      return state.concat(action.todo); // this returns a new array
    // or return [...state, action.todo] 

    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = todo => {
  return {
    type: ADD_TO_DO,
    todo
  };
};

const store = Redux.createStore(immutableReducer);


//REDUX IMMUTABILITY WITH SPREAD OPERATOR
//QUESTION: Use the Spread Operator on Arrays to enforce state immutability on array

//QUESTION: Use the spread operator to return a new copy of state when a to-do is added.
//Example of spread operator immutability let newArray = [...myArray, "new Array"];

//Define an action of THINGS_TO_DO
const THINGS_TO_DO = "THINGS_TO_DO";

//Define an immutableReducer with a switch case action.type
//that goes with state and action.type/ in some cases it is counterReducer

const immutableReducer = (state = ["Never mutate state here"], action) => {
    switch (action.type) {
        case "THINGS_TO_DO":

        //dont mutate state here
         let arrMutate = [...state, action.doit]; //mutate state here
         return arrMutate
}
};

const addDoIt = doit => {
    return {
        type: "THINGS_TO_DO",
        doit

    };
};

const store = Redux.createStore(immutableReducer);



// Enforce state immutability in Redux when state is an object 

/*A useful tool for handling objects is the Object.assign() 
utility. Object.assign() takes a target object and source 
objects and maps properties from the source objects to the target object. */

//const newObject = Object.assign({}, obj1, obj2);

//CHALLENGE
/*
The Redux state and actions were modified to handle an object for the state. 
Edit the code to return a new state object for actions with type ONLINE, which 
set the status property to the string online. Try to use Object.assign() to complete the challenge.

*/

const defaultState = {
    user: "Camper",
    status: "online",
    friends: "Emeka"
};

const immutableReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ONLINE":
  // to enforce immutability, return a new state object using Object.assign()

return Object.assign( {}, state, {status: "online"} );

default:
    return state;
    };
};

const wakeUp = () => {

    return {
        type: "ONLINE",
    };
};

const store = Redux.createStore(immutableReducer)