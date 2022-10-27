import { combineReducers, createStore } from 'redux';
import HomePageReducer from '../pages/home/screen/reducer';

const rootReducer = combineReducers({
    HomePageReducer
})

const store = createStore(rootReducer);

export default store;