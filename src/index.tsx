import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import configureStore from './state/store';
import { State } from './utils/types';


export const initialState : State = {
  filters: {
    ferfi: true,
    no: true
  },
  users: [],
  filteredUsers: [],
  selectedUser: null,
  currentPage: 1
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
