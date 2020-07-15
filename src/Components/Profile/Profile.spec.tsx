import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Profile from './index';
import { findByTestAttr, getMockStore } from '../../utils/helpers';
import { Provider } from 'react-redux';
import { MockStoreEnhanced } from 'redux-mock-store';

describe('<Profile />', () => {
    let wrapper: ReactWrapper;
    let store: MockStoreEnhanced<any, any>;
    beforeEach(() => {
        const state = {
            selectedUser: {name: "Test user 1", pictures: { thumbnail: "test image1" }}
        };
        store = getMockStore(state);
        wrapper = mount(<Provider store={store}>
                            <Profile />
                        </Provider>)
    });

    describe('render', () => {
        it('should render without error', () => {
            const container = findByTestAttr(wrapper, 'ProfileContainer');
            expect(container.length).toBe(1);
        });

    })
});