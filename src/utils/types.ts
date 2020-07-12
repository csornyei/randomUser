export type Action = {
    type: string,
    payload: any
}

export type Filters = {
    ferfi: boolean,
    no: boolean,
}

export type UserData = {
    name: string,
    pictures: {
        thumbnail: string,
        normal: string,
    },
    gender: string,
    email: string,
    cell: string,
    postcode: number,
    address: string,
    dateOfBirth: string,
    age: number
}

export type State = {
    filters: Filters,
    users: UserData[],
    filteredUsers: UserData[],
    selectedUser: UserData | null,
    currentPage: number,
}