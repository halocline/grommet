import React from 'react';
import renderer from 'react-test-renderer';
import styled from 'styled-components';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import { Grommet } from '../../Grommet';
import { Form } from '../../Form';
import { FormField } from '..';
import { TextInput } from '../../TextInput';

const CustomFormField = styled(FormField)`
  font-size: 40px;
`;

describe('FormField', () => {
  test('default', () => {
    const component = renderer.create(
      <Grommet>
        <FormField />
        <FormField>
          <TextInput />
        </FormField>
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('label', () => {
    const component = renderer.create(
      <Grommet>
        <FormField label="test label" />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('help', () => {
    const component = renderer.create(
      <Grommet>
        <FormField help="test help" />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('error', () => {
    const component = renderer.create(
      <Grommet>
        <FormField error="test error" />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('info', () => {
    const component = renderer.create(
      <Grommet>
        <FormField info="test info" />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('htmlFor', () => {
    const component = renderer.create(
      <Grommet>
        <FormField htmlFor="test-id" />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('margin', () => {
    const component = renderer.create(
      <Grommet>
        <FormField margin="medium" />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('empty margin', () => {
    const component = renderer.create(
      <Grommet>
        <FormField margin="none" />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('pad', () => {
    const component = renderer.create(
      <Grommet>
        <FormField pad />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('abut', () => {
    const component = renderer.create(
      <Grommet
        theme={{
          formField: {
            border: {
              color: 'border',
              error: {
                color: {
                  dark: 'white',
                  light: 'status-critical',
                },
              },
              size: 'large',
              position: 'outer',
              side: 'all',
            },
            margin: { bottom: 'small' },
          },
        }}
      >
        <FormField htmlFor="test-id" />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('abut with margin', () => {
    const component = renderer.create(
      <Grommet
        theme={{
          formField: {
            border: {
              color: 'border',
              error: {
                color: {
                  dark: 'white',
                  light: 'status-critical',
                },
              },
              size: 'large',
              position: 'outer',
              side: 'all',
            },
            margin: { bottom: 'small' },
          },
        }}
      >
        <FormField margin="medium" htmlFor="test-id" />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('custom formfield', () => {
    const component = renderer.create(
      <Grommet>
        <CustomFormField htmlFor="test-id" />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('disabled', () => {
    const component = renderer.create(
      <Grommet>
        <FormField disabled /> {/* don't use FormField without Form */}
        <Form>
          <FormField disabled />
        </Form>
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('required', () => {
    const component = renderer.create(
      <Grommet>
        <FormField required /> {/* don't use FormField without Form */}
        <Form>
          <FormField required />
        </Form>
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should visually hide label, yet stay in DOM for screen readers', () => {
    const { container, getByText } = render(
      <Grommet>
        <Form>
          <FormField
            id="hiddenLabel_id"
            htmlFor="hiddenLabel_id"
            name="hiddenLabel"
            label={{ text: 'I am a visually hidden label', hidden: true }}
            placeholder="Your first name"
          />
          <FormField
            id="visibleLabel_id"
            htmlFor="visibleLabel_id"
            name="visibleLabel"
            label="I am a visible label"
            placeholder="name@company.com"
          />
        </Form>
      </Grommet>,
    );
    const tree = container.firstChild;
    expect(tree).toMatchSnapshot();

    const hiddenLabel = getByText('I am a visually hidden label');
    const hiddenLabelStyle = window.getComputedStyle(hiddenLabel);
    // Hidden labels are styled as a 1x1 pixel with negative margin
    // Testing for that styling. See
    // https://www.w3.org/WAI/tutorials/forms/labels/#note-on-hiding-elements
    // for background on approach.
    expect(hiddenLabelStyle.height).toBe('1px');
    expect(hiddenLabelStyle.width).toBe('1px');
    expect(hiddenLabelStyle.margin).toBe('-1px');

    const visibleLabel = getByText('I am a visible label');
    const visibleLabelStyle = window.getComputedStyle(visibleLabel);
    expect(visibleLabelStyle.margin).not.toBe('-1px');
  });
});
