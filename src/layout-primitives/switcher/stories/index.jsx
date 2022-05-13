import React from 'react';
import readme from '../README.md';

import { Switcher } from '../Switcher';
import { Decorator } from '../../decorator/Decorator';

export default {
  title: 'Layout Primitives/Switcher',
  component: Switcher,
  parameters: {
    notes: { readme },
  },
  argTypes: {
    gap: {
      control: { type: 'inline-radio' },
      description: 'Gap. Set by CSS var `--gap` or `data-layout` attribute `-gap:x`.',
      options: [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7],
      table: { defaultValue: { summary: 'var(--s1)' } },
      type: { name: 'number', required: false },
    },
    threshold: {
      control: { type: 'text' },
      description:
        'If the box size is smaller than this value, it switches to one column. Set by CSS var `--threshold`.',
      table: { defaultValue: { summary: 'var(--measure)' } },
      type: { name: 'string', required: false },
    },
  },
  args: {
    gap: 1,
    threshold: 'var(--measure)',
  },
};

export const Default = (args) => {
  return (
    <Switcher {...args}>
      <Decorator backgroundColor="#decc00">Lorem ipsum</Decorator>
      <Decorator backgroundColor="#bfb6a8">dolor sit</Decorator>
      <Decorator backgroundColor="#edede6">amet consectetur</Decorator>
    </Switcher>
  );
};
