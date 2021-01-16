import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Area } from './styled';

import { page } from '../../helpers';


function Breadcrump({ items }) {
  items = items || [];
  return (
    items.length > 0 &&
    <Area>
      <li><FontAwesomeIcon icon={faHome} /></li>
      {items.map((item, key) => 
        <li key={key}>
          {/* se não for o último item coloca como link */}
          {key !== items.length -1
            ? <Link to={page(item.link)}>{item.name}</Link>
            : item.name
          }
        </li>
      )}
    </Area>
  );
}

export default Breadcrump;