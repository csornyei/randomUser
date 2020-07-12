import { Reducer } from "redux";
import { Action, State } from '../utils/types';
import { initialState } from "..";
import { CHANGE_FILTER, ADD_USERS, USER_SELECTED } from "./actions";
import { filterUsers } from "../utils/helpers";

export const reducer: Reducer<State, any> = (state: State | undefined = initialState, action: Action) => {
    switch (action.type) {
        case CHANGE_FILTER:
            return {
                ...state,
                filters: action.payload,
                filteredUsers: filterUsers(state.users, action.payload),
            };
        case ADD_USERS:
            const allUsers = [...state.users, ...action.payload]
            return {
                ...state,
                users: allUsers,
                filteredUsers: filterUsers(allUsers, state.filters)
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
