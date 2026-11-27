import { useState } from 'react';
import Switch from './Switch';

function SwitchDemo(args) {
  const [checked, setChecked] = useState(args.checked);
  return <Switch {...args} checked={checked} onChange={setChecked} />;
}

export default {
  title: 'Atoms/Switch',
  component: Switch,
  args: { checked: false, label: 'Режим', offLabel: 'Вимк.', onLabel: 'Увімк.' },
};

export const Interactive = { render: (args) => <SwitchDemo {...args} /> };
export const On = { args: { checked: true } };
export const WithoutLabels = { args: { offLabel: undefined, onLabel: undefined } };
export const Disabled = { args: { disabled: true } };
