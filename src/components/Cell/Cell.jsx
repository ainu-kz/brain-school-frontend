import React, { useState, useEffect } from 'react';
import './styles.scss';

export const Cell = ({
    id,
    src,
    name,
    imageName,
    onMouseEnter,
    onMouseLeave
  }) => {
  const [status, setStatus] = useState(false);

  const handleChangeImage = () => {
    setStatus(!status);

    return status;
  };

  const handlePseudoSelector = () => (status ? '_before' : '_after');

  const formatCellNumber = (number) => {
    if (number < 10) {
      return 0 + number;
    }

    return number;
  };

  const checkBackground = () => name !== imageName && handleChangeImage();

  useEffect(() => checkBackground(), [imageName]);

  return (
    <div
      id={id}
      className={`cell ${
        name !== imageName ? handlePseudoSelector() : '_active'
      }`}
      style={
        name !== imageName
          ? { background: `url("${src}") no-repeat 0 0 fixed` }
          : null
      }
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p className="cell__number">{formatCellNumber(id)}</p>
      <p className="cell__name">{name}</p>
      <span className="cell__letter">{name[0]}</span>
      <svg className="cell__diagonal">
        <line className="cell__line" x1="100%" y1="0" x2="0" y2="100%" />
      </svg>
    </div>
  );
};
