import React from 'react';
import UserListItem from '../UserListItem';
import styles from './UserList.module.scss'
import { useSelector } from 'react-redux';
import { State } from '../../../utils/types';
import { USERS_ON_PAGE } from '../../../utils/constants';

const UserList : React.FC = props => {

    const filteredUsers = useSelector((state: State) => state.filteredUsers);
    const currentPage = useSelector((state: State) => state.currentPage);


    const userIndexStart = currentPage * USERS_ON_PAGE - 1
    let usersToShow;
    if (filteredUsers.length > userIndexStart + USERS_ON_PAGE) {
       usersToShow = filteredUsers.slice(userIndexStart, userIndexStart + USERS_ON_PAGE);
    } else {
        usersToShow = filteredUsers.slice(userIndexStart)
    }

    const listItems = usersToShow.map((user, idx) => {
        return <UserListItem index={idx} key={idx} user={user}/>
    })

    return (
        <div className={styles.container} data-test="UserList">
            {listItems}
        </div>
    );
}

export default UserList;