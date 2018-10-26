import React from 'react';
import { connect } from 'react-redux';

import { deleteSmurf } from '../../actions';

const XSquare = ({ id, deleteSmurf }) => {
  const handleClick = () => {
    deleteSmurf(id);
  };

  return (
    <div className="x-square" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="9" x2="15" y2="15" />
        <line x1="15" y1="9" x2="9" y2="15" />
      </svg>
    </div>
  );
};

export default connect(
  null,
  { deleteSmurf }
)(XSquare);
