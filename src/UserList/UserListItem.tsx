import React from 'react';
import styles from './UserListItem.module.scss';
import { UserData } from '../utils/types';

const UserListItem = (props: {index: number, user: UserData}) => {

    const classes = props.index % 2 === 0 ? [styles.item, styles.itemEven] : [styles.item, styles.itemOdd];

    return (
        <div className={classes.join(' ')}>
            <img src={props.user.pictures.thumbnail} alt={props.user.name}/>
            {props.user.name}
        </div>
    );
}

export default UserListItem;