import React from 'react';
import { Link } from 'react-router-dom';
import { Area } from './styled';

import { page, asset } from '../../helpers';

function ItemMarca({ item }) {
  return (
    <Area image={asset('static/images/wids/marcas/' + item.image)}>
      <Link to={page(`busca?marca=${item.slug}`)} alt={item.nome} title={item.nome}>
        <span>{item.nome}</span>
      </Link>
    </Area>
  )
}

export default ItemMarca;