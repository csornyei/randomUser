import React, { useEffect } from 'react';
import styles from './App.module.scss';

import UserListContainer from './Components/UserList/UserListContainer';
import Profile from './Components/Profile';

import { useDispatch } from 'react-redux';
import { addUsers } from './state/actions';
import { REQUESTED_USERS } from './utils/constants';
import { getUsers } from './utils/helpers';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(REQUESTED_USERS).then((users) => {
      dispatch(addUsers(users));
    })
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <UserListContainer />
      <Profile />
    </div>
  );
}

export default App;
