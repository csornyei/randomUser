import React from 'react';

import styles from './Profile.module.scss';
import { useSelector } from 'react-redux';
import { State } from '../utils/types';

const Profile : React.FC = props => {

    const selectedUser = useSelector((state: State) => state.selectedUser);

    let profileContent;

    if (!!selectedUser) {
        profileContent =  <ul>
            <li> {selectedUser.name} </li>
            <li> {selectedUser.postcode} </li>
        </ul>;
    } else {
        profileContent = <h1>Select a user</h1>
    }

    return (
        <div className={styles.container}>
            <h1>Profile</h1>
            {profileContent}
        </div>
    );
}

export default Profile;