import React from 'react';
import ReactDom from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const link = React.createElement(
  'a',
  { href: 'reactjs.org', target: '_blank' },
  'this is a link',
);

console.log(link);

ReactDom.render(link, document.getElementById('root'));
