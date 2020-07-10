import { Action, Filters } from "../utils/types"

export const CHANGE_FILTER = "changeFilter"

export function changeFilters(newFilters: Filters): Action {
    return {
        type: CHANGE_FILTER,
        payload: newFilters
    }
}