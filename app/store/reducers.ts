import {combineReducers} from '@reduxjs/toolkit';
import entitiesReducer from './entities';

/**
 * @return ReducersMapObject
 */
export default combineReducers({
  entities: entitiesReducer,
});
