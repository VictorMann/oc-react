import React from 'react';
import { Area } from './styled';

function SelectedFilters({ items, handle }) {

  const handleClick = key => handle(items[key]);

  return (
    <Area>
      <li>Filtros:</li>

      {items.map((item, key) => 
        <li key={key} className="item-filtro" data-r="marca">
          <div className="content" title="marca – diamondback">
            <span className="title">{item.nome}</span>
            <span className="value">{item.valor}</span>
          </div>
          <span 
            className="close" 
            title="remover"
            onClick={() => handleClick(key)}>X</span>
        </li>
      )}

      <li>
        <span 
          className="limpar" 
          onClick={() => handleClick(null)}>Limpar filtro</span>
      </li>
    </Area>
  );
}

export default SelectedFilters;