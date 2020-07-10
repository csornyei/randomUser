import { createStore } from 'redux';
import { reducer } from "./reducer";
import { State } from '../utils/types';
import { initialState } from '..';


const configureStore = (state: State = initialState) => {
    return createStore(reducer, state)
}

export default configureStore;