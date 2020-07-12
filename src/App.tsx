import React, { useEffect, Dispatch } from 'react';
import styles from './App.module.scss';

import UserListContainer from './UserList/UserListContainer';
import Profile from './Profile/Profile';
import { dateParser, postcodeChecker } from './utils/helpers';
import { useDispatch } from 'react-redux';
import { addUsers } from './state/actions';
import { REQUESTED_USERS } from './utils/constants';

function getUsers(userCount: number, dispatch: Dispatch<any>) {
  fetch(`https://randomuser.me/api/?results=${userCount}`).then((response) => {
    response.json().then((data) => {
      const users= data.results.filter((user: any) => postcodeChecker(user.location.postcode)).map((user: any) => {
        const name = `${user.name.first} ${user.name.last}`;
        const pictures = {
          thumbnail: user.picture.thumbnail,
          normal: user.picture.medium
        };
        const address = `${user.location.street.name} ${user.location.street.number}, ${user.location.city}, ${user.location.country}, ${user.location.postcode}`;

        const dateOfBirth = dateParser(new Date(Date.parse(user.dob.date)));

        console.log(postcodeChecker)

        return {
          name,
          pictures,
          gender: user.gender,
          email: user.email,
          cell: user.cell,
          postcode: user.location.postcode,
          address,
          dateOfBirth,
          age: user.dob.age
        }
      });
      dispatch(addUsers(users));
    })
  })
}

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(REQUESTED_USERS, dispatch);
  }, []);

  return (
    <div className={styles.app}>
      <UserListContainer />
      <Profile />
    </div>
  );
}

export default App;
