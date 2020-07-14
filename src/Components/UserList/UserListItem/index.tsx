import React from 'react';
import styles from './UserListItem.module.scss';
import { UserData, State } from '../../../utils/types';
import { selectUser } from '../../../state/actions';
import { useDispatch, useSelector } from 'react-redux';

const UserListItem = (props: {index: number, user: UserData}) => {

    const classes = props.index % 2 === 0 ? [styles.item, styles.itemEven] : [styles.item, styles.itemOdd];

    const dispatch = useDispatch();
    const selectedUser = useSelector((state: State) => state.selectedUser);

    if (selectedUser === props.user) {
        classes.push(styles.itemSelected)
    }

    const userClicked = (user: UserData) => {
        dispatch(selectUser(user))
    }

    return (
        <div className={classes.join(' ')} onClick={() => userClicked(props.user)} data-test="UserListItem" >
            <img src={props.user.pictures.thumbnail} alt={props.user.name} className={styles.userImage} data-test="userImage" />
            <h2 className={styles.userText} data-test="userName" >{props.user.name}</h2>
        </div>
    );
}

export default UserListItem;