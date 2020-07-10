import React from 'react';
import UserListItem from './UserListItem';
import styles from './UserList.module.scss'
import { useSelector } from 'react-redux';
import { State } from '../utils/types';

const UserList : React.FC = props => {

    const users = useSelector((state: State) => state.users);

    const listItems = users.map((user, idx) => {
        return <UserListItem index={idx} key={idx} user={user}/>
    })

    return (
        <div className={styles.container}>
            {listItems}
        </div>
    );
}

export default UserList;