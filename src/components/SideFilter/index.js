import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Area } from './styled';

function SideFilter({ filter, handle }) {

  const [items, setItems] = useState(filter.items);

  const handleClick = key => {
    let _items = [...items];
    _items[key].active = true;
    setItems(_items);

    let data = {
      group: {nome: filter.nome, slug: filter.slug},
      item: items[key]
    };

    handle(data);
  };
  

  return (
    <Area>
      <header><h4>{filter.nome}</h4></header>
      <ul className="list-un">
        {items.map((item, k) =>
          <li 
            key={k} 
            className={item.active ? 'active' : ''}
            onClick={() => handleClick(k)}>

              <span>{item.active && <FontAwesomeIcon icon={faCheck} />}</span>
              <label>{item.nome} ({item.qtd})</label>

          </li>
        )}
      </ul>
    </Area>
  )
}

export default SideFilter;