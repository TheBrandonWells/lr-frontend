import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import itemReducer from "./itemReducer";


const rootReducer = combineReducers({
  itemReducer,
  form: formReducer
});

export default rootReducer;
