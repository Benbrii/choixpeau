import { combineReducers } from 'redux';
import houseReducers from './Housereducers';

export default combineReducers({
  houses: houseReducers,
})
