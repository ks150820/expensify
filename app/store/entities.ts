import {combineReducers} from 'redux';
import Income from './entities/Income';

export default combineReducers({
  incomeReducer: Income,
});
