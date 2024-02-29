import { combineReducers } from 'redux-immutable';
import { reducer as header_reducer } from '../components/header/store';
import { reducer as detail_reducer } from '../pages/detail/store';
import { reducer as home_reducer } from '../pages/home/store';

const reducer = combineReducers({
  header: header_reducer,
  home: home_reducer,
  detail: detail_reducer,
});

export default reducer;
