import { Reducer } from "redux";
import { Action, State } from '../utils/types';
import { initialState } from "..";
import { CHANGE_FILTER } from "./actions";

export const reducer: Reducer<State, any> = (state: State | undefined = initialState, action: Action) => {
    switch (action.type) {
        case CHANGE_FILTER:
            return {
                ...state,
                filters: action.payload
            };
        default:
            return state
    }
}
