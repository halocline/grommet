import React from 'react';
import { storiesOf } from '@storybook/react';

import { grommet, Box, Form, FormField, Grommet, Paragraph } from 'grommet';

const LabelHidden = () => (
  <Grommet theme={grommet}>
    <Box align="center" gap="large" pad="medium">
      <Paragraph>
        Sometimes a form&apos;s design may call for input fields without labels.
        Using FormField&apos;s label.hidden property, you can visually hide
        labels, while leaving label elements in the DOM for accessibility.
      </Paragraph>
      <Form>
        <FormField
          id="firstName_id"
          htmlFor="firstName_id"
          name="firstName"
          label={{ text: 'First Name', hidden: true }}
          placeholder="Your first name"
        />
        <FormField
          id="email_id"
          htmlFor="email_id"
          name="email"
          label={{ text: 'Email', hidden: true }}
          placeholder="name@company.com"
        />
      </Form>
    </Box>
  </Grommet>
);

storiesOf('Form', module).add('Hidden Label', () => <LabelHidden />);
