import React from 'react';

import styles from './Profile.module.scss';
import { useSelector } from 'react-redux';
import { State } from '../../utils/types';

const Profile : React.FC = props => {

    const selectedUser = useSelector((state: State) => state.selectedUser);

    let profileContent;

    if (!!selectedUser) {
        profileContent =
        <div className={styles.content}>
            <div className={styles.contentProfilePic}>
                <img src={selectedUser.pictures.normal} alt="Profile"/>
            </div>
            <div className={styles.contentBasic}>
                <h1> {selectedUser.name} </h1>
                <h4>  {selectedUser.age} ({selectedUser.dateOfBirth}) </h4>
                <h4> {selectedUser.gender} </h4>
            </div>
            <div className={styles.contentContacts}>
                <p> {selectedUser.email} </p>
                <p> {selectedUser.cell} </p>
                <p> {selectedUser.address} </p>
            </div>
        </div>;
    } else {
        profileContent = <h1>Select a user</h1>
    }

    return (
        <div className={styles.container} data-test="ProfileContainer">
            <h1>Profile</h1>
            {profileContent}
        </div>
    );
}

export default Profile;