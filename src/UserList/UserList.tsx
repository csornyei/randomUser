import React from 'react';
import UserListItem from './UserListItem';

const UserList : React.FC = props => {

    const users = [1, 2, 3, 4, 5, 6];

    const listItems = users.map((user) => {
        return <UserListItem />
    })

    return (
        <>
            {listItems}
        </>
    );
}

export default UserList;