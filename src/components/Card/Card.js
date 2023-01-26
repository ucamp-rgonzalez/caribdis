import { useState } from 'react';

import './Card.css';

function Card(props) {
  const { matched, onClick, hide, value } = props;

  return (
    <div className="card" onClick={onClick}>
      {matched || !hide ? value : '?'}
    </div>
  );
}

export default Card;
