/* eslint-disable no-undef */

import React from 'react';
import ReactDOM from 'react-dom';
import Graphin, { Utils } from '@antv/graphin';
// 引入Graphin CSS

const data = Utils.mock(10).circle().graphin();

const App = () => {
  return (
    <div>
      <Graphin data={data} />
    </div>
  );
};
const rootElement = document.getElementById('container');
ReactDOM.render(<App />, rootElement);
