import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../utils/types';
import styles from './UserListFilters.module.scss';
import { changeFilters } from '../state/actions';

enum AvailableFilters {
    Ferfi,
    No
}

const UserListFilters : React.FC = props => {

    const dispatch = useDispatch();

    const filters = useSelector((state: State) => state.filters);

    const filterChecked = (filter: AvailableFilters) => {
        switch (filter) {
            case AvailableFilters.Ferfi:
                dispatch(changeFilters({...filters, ferfi: !filters.ferfi}));
                break;
            case AvailableFilters.No:
                dispatch(changeFilters({...filters, no: !filters.no}));
                break;
        }
    }

    return (
        <div className={styles.container}>
            <input
                type="checkbox"
                name="ferfi"
                id="ferfi"
                checked={filters.ferfi}
                onChange={() => {filterChecked(AvailableFilters.Ferfi)} } />
            <label htmlFor="ferfi">Férfi</label>
            <input
                type="checkbox"
                name="no"
                id="no"
                checked={filters.no}
                onChange={() => {filterChecked(AvailableFilters.No)}} />
            <label htmlFor="no">Nő</label>
        </div>
    );
}

export default UserListFilters;