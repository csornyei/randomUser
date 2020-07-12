import React from 'react';
import UserListFilters from './UserListFilters';
import UserList from './UserList';
import UserListControls from './UserListControls';

import styles from './UserListContainer.module.scss';
import { useSelector } from 'react-redux';
import { State } from '../utils/types';
import Spinner from '../Spinner';

const UserListContainer : React.FC = props => {

    const numberOfUsers = useSelector((state: State) => state.users.length);

    const content = numberOfUsers === 0 ? <Spinner /> : (<><UserListFilters />
        <UserList />
        <UserListControls />
        </>)

    return (
        <div className={styles.container}>
            {content}
        </div>
    );
}

export default UserListContainer;