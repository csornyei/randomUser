export type Action = {
    type: string,
    payload: any
}

export type Filters = {
    ferfi: boolean,
    no: boolean,
}

export type State = {
    filters: Filters
}