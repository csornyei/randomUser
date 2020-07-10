import React from 'react';
import styles from './App.module.scss';

import UserListContainer from './UserList/UserListContainer';
import Profile from './Profile/Profile';

function App() {

  return (
    <div className={styles.app}>
      <UserListContainer />
      <Profile />
    </div>
  );
}

export default App;
