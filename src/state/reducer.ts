import { Reducer } from "redux";
import { Action, State } from '../utils/types';
import { initialState } from "..";
import { CHANGE_FILTER, ADD_USERS, USER_SELECTED } from "./actions";

export const reducer: Reducer<State, any> = (state: State | undefined = initialState, action: Action) => {
    switch (action.type) {
        case CHANGE_FILTER:
            return {
                ...state,
                filters: action.payload
            };
        case ADD_USERS:
            return {
                ...state,
                users: [...state.users, ...action.payload]
            }
        case USER_SELECTED:
            return {
                ...state,
                selectedUser: action.payload
            }
        default:
            return state
    }
}
