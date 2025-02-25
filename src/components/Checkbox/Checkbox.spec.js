import React from 'react';
import { matches } from './../utils/test-utils';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

function oppsettShallow(props) {
  return shallow(<Checkbox {...props} />);
}

describe('Checkbox komponent', () => {
  it('matcher snapshot', () => {
    matches(<Checkbox>Sjekkboks</Checkbox>);
  });

  it('rendrer Checkbox med default props', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.find('StyledCheckboxBase').prop('boxSide')).toEqual('end');
  });

  it('setter Checkbox med riktige props', () => {
    const wrapper = oppsettShallow({
      checked: true,
      disabled: true,
      boxSide: 'start',
      label: 'checkbox-label',
      name: 'checkbox-name',
      id: 'checkbox-id',
      className: 'checkbox-classname'
    });

    const checkbox = wrapper.find('StyledCheckboxBase');

    expect(checkbox.prop('checked')).toEqual(true);
    expect(checkbox.prop('disabled')).toEqual(true);
    expect(checkbox.prop('boxSide')).toEqual('start');
    expect(checkbox.prop('label')).toEqual('checkbox-label');
    expect(checkbox.prop('name')).toEqual('checkbox-name');
    expect(wrapper.prop('id')).toEqual('checkbox-id');
    expect(checkbox.prop('className')).toContain('checkbox-classname');
  });
});
