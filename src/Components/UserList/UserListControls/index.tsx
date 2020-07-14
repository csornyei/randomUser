import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './UserListControls.module.scss';
import { State } from '../../../utils/types';
import { USERS_ON_PAGE, CONTROL_ITEM_SHOW } from '../../../utils/constants';
import { changePage } from '../../../state/actions';

const UserListControls : React.FC = props => {

    const dispatch = useDispatch();

    const currentPage = useSelector((state: State) => state.currentPage);
    const numberOfUsers = useSelector((state: State) => state.filteredUsers.length);
    const numberOfPages = Math.floor(numberOfUsers / USERS_ON_PAGE) | 1;

    const setPage = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= numberOfPages) {
            dispatch(changePage(pageNumber))
        }
    }

    const pageButtons = [];

    const getNumberedPageButton = (pageNumber: number) => {
        const buttonClasses = currentPage === pageNumber ? [styles.listItem, styles.listItemCurrent].join(' ') : styles.listItem;
        return <li
            key={pageNumber}
            className={buttonClasses}
            onClick={() => setPage(pageNumber)}
            data-test="PageButton"
            >{pageNumber}</li>;
    }

    pageButtons.push(<li
        key="prev"
        className={currentPage === 1 ? [styles.listItem, styles.listItemInactive].join(' ') : styles.listItem}
        onClick={() => setPage(currentPage - 1)}
        data-test="PrevButton"
        >Prev</li>);

    if (numberOfPages <= CONTROL_ITEM_SHOW) {
        for(let index = 1; index <= numberOfPages; index++) {
            pageButtons.push(getNumberedPageButton(index));
        }
    } else {
        if (currentPage <= Math.ceil(CONTROL_ITEM_SHOW / 2)) {
            for(let index = 1; index <= CONTROL_ITEM_SHOW; index++) {
                pageButtons.push(getNumberedPageButton(index))
            }
        } else if (currentPage >= numberOfPages - Math.floor(CONTROL_ITEM_SHOW / 2)) {
            for(let index = numberOfPages - CONTROL_ITEM_SHOW; index <= numberOfPages; index++) {
                pageButtons.push(getNumberedPageButton(index))
            }
        } else {
            for(let index = currentPage - Math.floor(CONTROL_ITEM_SHOW / 2); index <= currentPage + Math.floor(CONTROL_ITEM_SHOW / 2); index++) {
                pageButtons.push(getNumberedPageButton(index))
            }
        }
    }

    pageButtons.push(<li
        key="last"
        className={currentPage === numberOfPages ? [styles.listItem, styles.listItemInactive].join(' ') : styles.listItem}
        onClick={() => setPage(currentPage + 1)}
        data-test="NextButton"
        >Next</li>);

    return (
        <ul className={styles.list} data-test="UserListControls">
            {pageButtons}
        </ul>
    );
}

export default UserListControls;