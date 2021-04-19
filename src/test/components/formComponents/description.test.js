import React from 'react';
import { mount } from 'enzyme';

import Description from '../../../components/FormComponents/Description';

describe('Description component', () => {
  describe('should render correctly', () => {
    const Content = () => <h1>Cosi</h1>;
    let initialProps;
    let getStateSpy;

    beforeEach(() => {
      getStateSpy = jest.fn();
      initialProps = {
        // eslint-disable-next-line react/display-name
        Content,
        className: 'classa',
        name: 'description',
        formOptions: {
          getState: getStateSpy,
        },
      };
    });

    it('content', () => {
      const wrapper = mount(<Description {...initialProps} />);
      expect(wrapper.find(Content)).toHaveLength(1);
    });
  });
});
