
import React from 'react';

const Band = ({ band, deleteBand }) => {
  return (
    <div>
      <li>{band.name}<button onClick={() => deleteBand(band.id)}>DELETE</button></li>
    </div>
  );
}

export default Band;
