import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './state/store';
import { State } from './utils/types';

export const initialState : State = {
  filters: {
    ferfi: true,
    no: true
  },
  users: [],
  filteredUsers: [],
  selectedUser: null
}


// DONE - userek lekerese
// DONE - userek listazasa
// DONE - userek szurese
// DONE - iranyitoszamban legalabb ket prim
// TODO - pagination
// TODO - teszteles
// TODO - profil oldal

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
