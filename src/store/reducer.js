import { combineReducers } from "redux";
import { reducer as header_reducer } from '../components/header/store';

const reducer = combineReducers({
  header: header_reducer
});

export default reducer;
