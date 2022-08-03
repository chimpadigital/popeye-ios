import {
  USER
  
} from "./actions";

const initialState = {
  
  
  User: null,

};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  
    case USER:
      return {
        ...state,
        User: action.payload,
      };
   
    default:
      return state;
  }
}
