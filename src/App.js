import React from 'react';
import Layout from './components/Layout/Layout';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => {
  return (
    <Layout>
      <h1>03-Events and State</h1>
      {/* <Counter initialValue={5} /> */}
      {/* <Dropdown /> */}
      <ColorPicker options={colorPickerOptions} />
    </Layout>
  );
};

export default App;
