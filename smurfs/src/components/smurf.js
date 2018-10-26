import React from 'react';

import XSquare from '../assets/svgs/x-square';

const Smurf = ({ smurf }) => (
  <li>
    <div className="smurf-content">
      <div>ID: {smurf.id}</div>
      <div>{smurf.name}</div>
      <div>Age: {smurf.age}</div>
      <div>Height: {smurf.height}</div>
    </div>
    <XSquare id={smurf.id} />
  </li>
);

export default Smurf;
