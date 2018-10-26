import React from 'react';

import Smurf from './smurf';

const SmurfsList = ({ smurfs }) => {
  const renderSmurfs = () => smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />);

  return <ul>{renderSmurfs()}</ul>;
};

export default SmurfsList;
