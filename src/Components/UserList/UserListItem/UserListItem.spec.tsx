import React from 'react';
import { mount, ReactWrapper } from 'enzyme'
import UserListItem from './index';
import { findByTestAttr, getMockStore } from '../../../utils/helpers';
import { Provider } from 'react-redux';

describe('<UserListItem />', () => {
    describe('render', () => {

        let wrapper: ReactWrapper;
        beforeEach(() => {
            const props = {
                index: 1,
                user: {
                    name: "Test user",
                    pictures: {
                        thumbnail: "test image",
                    },
                }
            };
            wrapper = mount(<Provider store={getMockStore()}>
                                <UserListItem {...props} />
                            </Provider>)
        })

        it('should render without error', () => {
            const listItem = findByTestAttr(wrapper, 'UserListItem');
            expect(listItem.length).toBe(1);
        });

        it('should render an image', () => {
            const img = findByTestAttr(wrapper, 'userImage');
            expect(img.length).toBe(1);
        });

        it('should render a h2', () => {
            const h2 = findByTestAttr(wrapper, 'userName');
            expect(h2.length).toBe(1);
        })
    });
});