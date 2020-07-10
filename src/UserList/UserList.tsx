import React from 'react';
import UserListItem from './UserListItem';
import styles from './UserList.module.scss'

const UserList : React.FC = props => {

    const users = [1, 2, 3, 4, 5, 6];

    const listItems = users.map((user, idx) => {
        return <UserListItem index={idx} key={idx}/>
    })

    return (
        <div className={styles.container}>
            {listItems}
        </div>
    );
}

export default UserList;