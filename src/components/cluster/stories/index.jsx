import React from 'react';
import readme from '../README.md';

import { Cluster } from '../Cluster';

export default {
  title: 'Components/Cluster',
  component: Cluster,
  parameters: {
    notes: { readme },
  },
  argTypes: {
    align: {
      control: { type: 'inline-radio' },
      description: '`--cluster--align`',
      options: ['start', 'center', 'end'],
      table: { defaultValue: { summary: 'flex-start' } },
      type: { name: 'string', required: false },
    },
    gap: {
      control: { type: 'inline-radio' },
      description: '`--cluster--gap`',
      options: [-2, -1, 0, 1, 2, 3, 4],
      table: { defaultValue: { summary: 'var(--s2)' } },
      type: { name: 'number', required: false },
    },
    justify: {
      control: { type: 'inline-radio' },
      description: '`--cluster--justify`',
      options: ['start', 'center', 'end', 'space-between'],
      table: { defaultValue: { summary: 'flex-start' } },
      type: { name: 'string', required: false },
    },
    tagName: {
      table: { disable: true },
    },
  },
  args: {
    align: 'start',
    gap: 2,
    justify: 'start',
  },
};

export const Default = (args) => {
  return (
    <Cluster tagName="ul" {...args}>
      <li>Lorem ipsum</li>
      <li>dolor sit</li>
      <li>amet consectetur</li>
      <li>adipisicing elit</li>
      <li>sed do</li>
    </Cluster>
  );
};

export const ExampleHeader = (args) => {
  return (
    <Cluster gap={args.gap} justify="space-between" align="center">
      <div>LOGO</div>
      <Cluster tagName="ul" gap={args.gap}>
        <li>Lorem ipsum</li>
        <li>dolor sit</li>
        <li>amet consectetur</li>
        <li>adipisicing elit</li>
        <li>sed do</li>
      </Cluster>
    </Cluster>
  );
};
ExampleHeader.storyName = 'Example : Header';
ExampleHeader.argTypes = {
  justify: { table: { disable: true } },
  align: { table: { disable: true } },
};
