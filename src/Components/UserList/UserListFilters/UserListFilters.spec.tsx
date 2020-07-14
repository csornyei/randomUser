import React from 'react';
import { mount, ReactWrapper } from 'enzyme'
import UserListFilters from './index';
import { findByTestAttr, getMockStore } from '../../../utils/helpers';
import { Provider } from 'react-redux';
import { MockStoreEnhanced } from 'redux-mock-store';
import { changeFilters, CHANGE_FILTER } from '../../../state/actions';

describe('<UserListFilters />', () => {
    let wrapper: ReactWrapper;
    let store: MockStoreEnhanced<any, any>;
    beforeEach(() => {
        store = getMockStore({ filters: {
            ferfi: true,
            no: true,
        }});
        wrapper = mount(<Provider store={store}>
                            <UserListFilters />
                        </Provider>)
    })
    describe('render', () => {

        it('should render without error', () => {
            const listItem = findByTestAttr(wrapper, 'UserListFilters');
            expect(listItem.length).toBe(1);
        });

        it('should render two checkboxes', () => {
            const checkboxes = findByTestAttr(wrapper, 'FilterCheckbox');
            expect(checkboxes.length).toBe(2);
        });

        it('should render two labels', () => {
            const labels = findByTestAttr(wrapper, 'Label');
            expect(labels.length).toBe(2);
        });
    });

    describe('dispatch', () => {
        it('should dispatch action', () => {
            const payload = {ferfi: false, no: false}
            store.dispatch(changeFilters(payload));

            const actions = store.getActions();
            const expectedPayload = { type: CHANGE_FILTER, payload: payload};
            expect(actions).toEqual([expectedPayload]);
        });
    });
});