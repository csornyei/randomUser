import React from 'react';
import UserListFilters from './UserListFilters';
import UserList from './UserList';
import UserListControls from './UserListControls';

import styles from './UserListContainer.module.scss';

const UserListContainer : React.FC = props => {
    return (
        <div className={styles.container}>
            <h1>User List</h1>
            <UserListFilters />
            <UserList />
            <UserListControls />
        </div>
    );
}

export default UserListContainer;