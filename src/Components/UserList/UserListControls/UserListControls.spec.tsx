import React from 'react';
import { mount, ReactWrapper } from 'enzyme'
import UserListControls from './index';
import { findByTestAttr, getMockStore } from '../../../utils/helpers';
import { Provider } from 'react-redux';
import { MockStoreEnhanced } from 'redux-mock-store';
import { changePage, PAGE_CHANGED } from '../../../state/actions';

describe('<UserListControls />', () => {
    let wrapper: ReactWrapper;
    let store: MockStoreEnhanced<any, any>;
    beforeEach(() => {
        const state = {
            currentPage: 1,
            filteredUsers: [1, 2, 3, 4, 5]
        }
        store = getMockStore(state);
        wrapper = mount(<Provider store={store}>
                            <UserListControls />
                        </Provider>)
    });

    describe('render', () => {
        it('should render without error', () => {
            const controlList = findByTestAttr(wrapper, 'UserListControls');
            expect(controlList.length).toBe(1);
        });

        it('should render prev and next navigation buttons', () => {
            const prevButton = findByTestAttr(wrapper, 'PrevButton');
            expect(prevButton.length).toBe(1);
            const nextButton = findByTestAttr(wrapper, 'NextButton');
            expect(nextButton.length).toBe(1);
        });

        it('should render one page button', () => {
            const pageButton = findByTestAttr(wrapper, 'PageButton');
            expect(pageButton.length).toBe(1);
        })
    });

    describe('dispatch', () => {
        it('should dispatch an action', () => {
            store.dispatch(changePage(2));

            const actions = store.getActions();
            expect(actions).toEqual([{type: PAGE_CHANGED, payload: 2}])
        });

    });
});