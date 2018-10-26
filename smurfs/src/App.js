import React, { Fragment } from 'react';

import { SmurfForm } from './components';
import { SmurfsListView } from './views';

const App = () => (
  <Fragment>
    <h1>SMURFS! 2.0 W/ Redux</h1>
    <SmurfForm />
    <SmurfsListView />
  </Fragment>
);

export default App;
