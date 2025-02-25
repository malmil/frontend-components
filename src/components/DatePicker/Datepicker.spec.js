import React from 'react';
import { matches } from './../utils/test-utils';
import { shallow, mount } from 'enzyme';

import DatePicker from './DatePicker';

function oppsettShallow(props) {
  return shallow(<DatePicker {...props} />);
}

function oppsettMount(props) {
  return mount(<DatePicker {...props} />);
}

describe('DatePicker komponent', () => {
  it('matcher snapshot', () => {
    matches(<DatePicker />);
  });

  it('rendrer datovelger med riktige props ', () => {
    const wrapper = oppsettShallow({
      id: 'my-id',
      label: 'Ukenummer',
      ariaLabel: 'Datovelger',
      placeholder: 'dd.mm.åååå',
      info:
        'Du kan skrive inn dato i feltet, eller velge en dato ved hjelp av datovelgeren, enten med mus eller bruk tastaturet'
    });

    const styledDatePickerBase = wrapper.find('StyledDatePickerBase');
    const StyledLabelBase = wrapper.find('StyledLabelBase');

    expect(styledDatePickerBase.prop('ariaLabel')).toEqual('Datovelger');
    expect(styledDatePickerBase.prop('placeholder')).toEqual('dd.mm.åååå');
    expect(wrapper.find('CustomizedIconButton').length).toBe(1);
    expect(wrapper.first().prop('id')).toEqual('my-id');
    expect(StyledLabelBase.containsMatchingElement('Ukenummer')).toBeTruthy();
  });

  it('rendrer en hjeletekst når hjelpeikon blir klikket', () => {
    const wrapper = oppsettShallow({
      info: 'Hjelpetekst'
    });

    const helpIcon = wrapper.find('CustomizedIconButton');

    helpIcon.simulate('click');

    expect(
      wrapper.find('Callout').containsMatchingElement('Hjelpetekst')
    ).toBeTruthy();
  });

  it('sender inn egendefinerete feilmeldinger når disse er satt ', () => {
    const wrapper = oppsettMount({
      isRequiredErrorMessage: 'Dette feltet er påkrevd i testen',
      isOutOfBoundsErrorMessage:
        'Datoen er ikke innenfor gyldig periode i testen',
      invalidInputErrorMessage: 'Ikke gyldig format i testen'
    });

    const datePicker = wrapper.find('DatePicker');

    expect(datePicker.prop('isRequiredErrorMessage')).toEqual(
      'Dette feltet er påkrevd i testen'
    );
    expect(datePicker.prop('isOutOfBoundsErrorMessage')).toEqual(
      'Datoen er ikke innenfor gyldig periode i testen'
    );
    expect(datePicker.prop('invalidInputErrorMessage')).toEqual(
      'Ikke gyldig format i testen'
    );
    expect(wrapper.instance().props.isRequiredErrorMessage).toEqual(
      'Dette feltet er påkrevd i testen'
    );
    expect(wrapper.instance().props.isOutOfBoundsErrorMessage).toEqual(
      'Datoen er ikke innenfor gyldig periode i testen'
    );
    expect(wrapper.instance().props.invalidInputErrorMessage).toEqual(
      'Ikke gyldig format i testen'
    );
  });

  it('setter datovelger i readonly modus', () => {
    const wrapper = oppsettMount({
      readonlyMode: true
    });

    expect(wrapper.find('StyledDatePickerBase').prop('readonlyMode')).toEqual(
      true
    );
    expect(
      wrapper
        .find('TextFieldBase')
        .find('input')
        .prop('disabled')
    ).toEqual('disabled');
  });
});
