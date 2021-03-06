import React from 'react';
import { useState } from '@storybook/client-api';

export default {
  title: 'Hooks',
};

export const Checkbox = () => {
  const [on, setOn] = useState(false);
  return (
    <label>
      <input type="checkbox" checked={on} onChange={e => setOn(e.target.checked)} />
      On
    </label>
  );
};

export const Input = () => {
  const [text, setText] = useState('foo');
  return <input value={text} onChange={e => setText(e.target.value)} />;
};
