import React, { Fragment } from 'react';

import { SmurfEditForm, SmurfAddForm } from './components';
import { SmurfsListView } from './views';

const App = () => (
  <Fragment>
    <h1>SMURFS! 2.0 W/ Redux</h1>
    <SmurfAddForm />
    <SmurfEditForm />
    <SmurfsListView />
  </Fragment>
);

export default App;
