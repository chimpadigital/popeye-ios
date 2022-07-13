import {
  USER_ROLE,
  USER_ID,
  
} from "./actions";

const initialState = {
  
  
  userRole: null,
  UserId: null,
 
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  
    case USER_ROLE:
      return {
        ...state,
        userRole: action.payload,
      };
    case USER_ID:
      return {
        ...state,
        UserId: action.payload,
      };
   
    default:
      return state;
  }
}
