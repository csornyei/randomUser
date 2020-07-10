import React from 'react';
import styles from './UserListItem.module.scss';

const UserListItem = (props: {index: number}) => {


    const classes = props.index % 2 === 0 ? [styles.item, styles.itemEven] : [styles.item, styles.itemOdd];

    return (
        <div className={classes.join(' ')}>
            User List Item
        </div>
    );
}

export default UserListItem;