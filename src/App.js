import React from 'react';
import Panel from './components/Panel/Panel';
import PaintingList from './components/PaintingList/PaintingList';
import paintings from './paintings.json';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Notification from './components/Notification/Notification';
import Layout from './components/Layout/Layout';
import Counter from './components/Counter/Counter';

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
      {' '}
      <ColorPicker options={colorPickerOptions} />
      <Panel title="Latest news">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi
          reprehenderit exercitationem natus dolore consequuntur alias quisquam
          aliquam, laboriosam, commodi recusandae hic nostrum debitis,
          aspernatur repellendus. A voluptate maiores velit dolore impedit
          inventore dolor pariatur? Aliquam eveniet cupiditate nam neque,
          tenetur error officiis aliquid numquam ratione excepturi quod debitis
          enim.
        </p>
        <a href="./index.html">Read...</a>
      </Panel>
      <Panel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquam
          suscipit vero natus quidem! Deleniti consectetur ipsa debitis ducimus
          sint.
        </p>
      </Panel>
      <Notification text="CSS-modules are amazing" type="success" />
      <Notification text="Do not use inline styles too often" type="error" />
      <PaintingList items={paintings} />
      <Counter />
    </Layout>
  );
};

export default App;
