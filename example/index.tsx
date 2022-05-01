import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AdBox } from '../.';

const App = () => {
  return (
    <div>
      <AdBox label="Example Ad"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
