import React from 'react';

const UserListFilters : React.FC = props => {
    return (
        <>
            <h1>Filters</h1>
            <input type="checkbox" name="ferfi" id="ferfi" checked/>
            <label htmlFor="ferfi">Férfi</label>
            <input type="checkbox" name="no" id="no" checked/>
            <label htmlFor="no">Nő</label>
        </>
    );
}

export default UserListFilters;