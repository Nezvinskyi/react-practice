import React from 'react';
import Panel from './components/Panel';
import Logo from './components/Logo';
import PaintingList from './components/PaintingList';
import paintings from './paintings.json';

const App = () => {
  return (
    <div>
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
      <Logo text="Main component - container of the application" />
      <PaintingList items={paintings} />
    </div>
  );
};

export default App;
