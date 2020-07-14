import { Action, Filters, UserData } from "../utils/types";
export const CHANGE_FILTER = "changeFilter";
export const ADD_USERS = "addUsers";
export const USER_SELECTED = "userSelected";
export const PAGE_CHANGED = "pageChanged";

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

export function selectUser(user: UserData): Action {
    return {
        type: USER_SELECTED,
        payload: user
    }
}

export function changePage(pageNumber: number): Action {
    return {
        type: PAGE_CHANGED,
        payload: pageNumber
    }
}