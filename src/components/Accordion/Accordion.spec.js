import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

function oppsettShallow(props1, props2) {
  return shallow(
    <Accordion {...props1}>
      <AccordionItem {...props2} />
    </Accordion>
  );
}

function oppsettMount(props1, props2) {
  return mount(
    <Accordion {...props1}>
      <AccordionItem {...props2}>
        <p>Her vises innhold</p>
      </AccordionItem>
    </Accordion>
  );
}

describe('Accordion komponent', () => {
  it('matcher snapshot', () => {
    const wrapper = oppsettMount();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('rendrer accordion med riktig props', () => {
    const wrapper = oppsettShallow(
      {
        processList: true
      },
      {
        toggleContent: true,
        toggleButtonText: 'Hvorfor holde brukertest?',
        stepId: 'step-1-1'
      }
    );

    const accordionItem = wrapper.find('AccordionItem');

    expect(accordionItem.prop('toggleContent')).toEqual(true);
    expect(accordionItem.prop('toggleButtonText')).toEqual(
      'Hvorfor holde brukertest?'
    );
    expect(accordionItem.prop('stepId')).toEqual('step-1-1');
    expect(accordionItem.prop('stepNumber')).toEqual(1);
  });

  it('rendrer steg i en prosessListe', () => {
    const wrapper = oppsettMount(
      {
        processList: true
      },
      {
        stepId: 'step-1-1'
      }
    );

    const accordionItem = wrapper.find('AccordionItem');
    const stepLine = accordionItem.find('span').first();
    expect(stepLine.html()).toContain('stepLine');
    expect(accordionItem.html()).toContain('stepNumber');
    expect(accordionItem.html()).not.toContain('toggleButton');
  });

  it('rendrer ekspanderbar knapp', () => {
    const wrapper = oppsettMount(
      {
        processList: true
      },
      {
        toggleContent: true,
        toggleButtonText: 'Åpne steg',
        stepId: 'step-1-1'
      }
    );

    const accordionItem = wrapper.find('AccordionItem');
    const Button = accordionItem.find('button');

    expect(Button.html()).toContain('toggleButton');
    expect(Button.text()).toContain('Åpne steg');
  });

  it('viser innhold når ekspanderbar klikkes', () => {
    const wrapper = oppsettMount(
      {},
      {
        toggleContent: true,
        toggleButtonText: 'Åpne steg',
        stepId: 'step-2-1',
        title: 'Tittel',
        subtitle: 'Undertittel'
      }
    );

    const accordionItem = wrapper.find('AccordionItem');
    let Button = accordionItem.find('button[aria-controls]');

    Button.simulate('click');
    Button = wrapper.find('button');

    expect(accordionItem.html()).toContain('Her vises innhold');
    expect(Button.prop('aria-expanded')).toBe(true);
    expect(Button.html()).toContain('toggleButtonOpen');
    expect(wrapper.find('h1').text()).toContain('Tittel');
    expect(wrapper.text()).toContain('Undertittel');
  });
});
