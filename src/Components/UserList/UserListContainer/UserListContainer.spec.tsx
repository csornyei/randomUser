import React from 'react';
import { mount, ReactWrapper } from 'enzyme'
import UserListContainer from './index';
import { findByTestAttr, getMockStore } from '../../../utils/helpers';
import { Provider } from 'react-redux';
import { MockStoreEnhanced } from 'redux-mock-store';

describe('<UserListControls />', () => {
    let wrapper: ReactWrapper;
    let store: MockStoreEnhanced<any, any>;
    beforeEach(() => {
        const state = {
            currentPage: 1,
            filteredUsers: [1, 2, 3, 4, 5],
            users: [1, 2, 3, 4, 5],
            filters: {
                ferfi: true,
                no: true,
            }
        }
        store = getMockStore(state);
        wrapper = mount(<Provider store={store}>
                            <UserListContainer />
                        </Provider>)
    });

    describe('render', () => {
        it('should render without error', () => {
            const container = findByTestAttr(wrapper, 'UserListContainer');
            expect(container.length).toBe(1);
        });

    });
});