import initialState from "./initialState";
import {
  GET_USER,
  GET_USERS,
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  NEW_CLIENT_ERROR,
  NEW_CLIENT_SUCCESS
} from "../actions/actionTypes";

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
    // Get user action
    case GET_USERS:
    //Get users action
    case LOGGING_IN: {
      return {
        ...state,
        loggingIn: true
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        loggingIn: false,
        user: action.payload,
        error: null
      };
    }

    case LOGIN_FAILED: {
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    }

    case NEW_CLIENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false
      };
    }
    case NEW_CLIENT_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }

    default:
      return state;
  }
}
