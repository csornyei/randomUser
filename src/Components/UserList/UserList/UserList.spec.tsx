import React from 'react';
import { ReactWrapper, mount } from 'enzyme'
import UserList from './index';
import { findByTestAttr, getMockStore } from '../../../utils/helpers';
import { Provider } from 'react-redux';
import { MockStoreEnhanced } from 'redux-mock-store';

describe('<UserList/>', () => {
    let wrapper: ReactWrapper;
    let store: MockStoreEnhanced<any, any>;
    beforeEach(() => {
        const state = {
            currentPage: 1,
            filteredUsers: [
                {name: "Test user 1", pictures: { thumbnail: "test image1", }},
                {name: "Test user 2", pictures: { thumbnail: "test image2", }},
                {name: "Test user 3", pictures: { thumbnail: "test image3", }},
            ],
            users: [
                {name: "Test user 1", pictures: { thumbnail: "test image1", }},
                {name: "Test user 2", pictures: { thumbnail: "test image2", }},
                {name: "Test user 3", pictures: { thumbnail: "test image3", }},
            ],
            filters: {
                ferfi: true,
                no: true,
            }
        }
        store = getMockStore(state);
        wrapper = mount(<Provider store={store}>
                            <UserList />
                        </Provider>)
    });

    describe('render', () => {
        it('should render without error', () => {
            const container = findByTestAttr(wrapper, 'UserList');
            expect(container.length).toBe(1);
        });

    });
});