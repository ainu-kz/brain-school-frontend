import React from 'react';

function FilterOfficeItem(props) {
  return (
    <li
      onClick={() => props.onClick(props.office)}
      className={`filter-office-item ${
          // eslint-disable-next-line react/destructuring-assignment
        props.activeOffice === props.office ? '_active' : ''
      }`}
    >
      {props.office}
    </li>
  );
}

export default FilterOfficeItem;
