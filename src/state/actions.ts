import { Action, Filters, UserData } from "../utils/types"

export const CHANGE_FILTER = "changeFilter";
export const ADD_USERS = "addUsers"

export function changeFilters(newFilters: Filters): Action {
    return {
        type: CHANGE_FILTER,
        payload: newFilters
    }
}

export function addUsers(users: UserData[]): Action {
    return {
        type: ADD_USERS,
        payload: users
    }
}