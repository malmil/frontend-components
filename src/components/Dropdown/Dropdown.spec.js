import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import Dropdown from './Dropdown';

function oppsettShallow(props) {
  return shallow(<Dropdown {...props} />);
}

function oppsettFullDOM(props) {
  return mount(<Dropdown {...props} />);
}

const options = [
  { key: null, text: '' },
  { key: 'Header', text: 'Actions', itemType: Dropdown.ItemType.Header },
  { key: 'A', text: 'Option a' },
  { key: 'B', text: 'Option b' },
  { key: 'C', text: 'Option c' },
  { key: 'D', text: 'Option d' },
  { key: 'E', text: 'Option e' },
  { key: 'divider_2', text: '-', itemType: Dropdown.ItemType.Divider },
  { key: 'Header2', text: 'People', itemType: Dropdown.ItemType.Header },
  { key: 'F', text: 'Option f' },
  { key: 'G', text: 'Option g' },
  { key: 'H', text: 'Option h' },
  { key: 'I', text: 'Option i' },
  { key: 'J', text: 'Option j' }
];

describe('Dropdown komponent', () => {
  it('matcher snapshot', () => {
    const wrapper = oppsettShallow({
      placeholder: 'Select an option',
      options: options
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('rendrer Dropdown label', () => {
    const wrapper = oppsettShallow({
      label: 'Nedtrekksliste'
    });
    const label = wrapper.find('StyledLabelBase');

    expect(label.html()).toContain('labelText');
    expect(label.html()).toContain('Nedtrekksliste');
  });

  it('rendrer Dropdown med hjelpetekst', () => {
    const wrapper = oppsettShallow({
      info: 'Hjelpetekst'
    });
    const helpIcon = wrapper.find('CustomizedIconButton');
    expect(helpIcon.prop('ariaLabel')).toEqual('Info');
    expect(helpIcon.prop('title')).toEqual('Info');

    helpIcon.simulate('click');
    const callout = wrapper.find('Callout');
    expect(wrapper.exists('Callout')).toEqual(true);
    expect(callout.html()).toContain('Hjelpetekst');
    expect(callout.prop('color')).toEqual('lightGreen');
    expect(callout.prop('ariaLabel')).toEqual('Hjelpetekst');
  });

  it('rendrer feilmelding under Dropdown ', () => {
    const wrapper = oppsettShallow({
      errorMessage: 'Feilmelding'
    });

    expect(wrapper.html()).toContain('Feilmelding');
  });

  it('rendrer nedtrekksliste når Dropdown klikkes ', () => {
    const wrapper = oppsettFullDOM({
      options: options
    });

    const input = wrapper.find('KeytipData');
    input.simulate('click');
    expect(wrapper.exists('.ms-Dropdown-optionText')).toEqual(true);
    expect(wrapper.exists('.ms-Dropdown-header')).toEqual(true);
    expect(wrapper.exists('.ms-Dropdown-divider')).toEqual(true);
  });
});
