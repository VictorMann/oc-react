import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Area } from './styled';

import { page, formatMoeda } from '../../helpers';

function ProductItem({ item }) {
  return (
    <Area>
      <Link to={page(`/p/${item.slug}`)}>
        {item.promocao > 0 && <span className="et-promo">-{item.promocao}%</span>}
        <div className="iw">
          <div style={{backgroundImage: `url(${item.image})`}}>
            <img src={item.image} alt={item.nome} />
          </div>
          <div className="product-title">
            <h3>{item.nome}</h3>
          </div>
          <div className="product-rating mb-2">
            {new Array(5).fill(0).map((i,k) =>
              <FontAwesomeIcon key={k} icon={faStar} color={item.votos >= (k+1) ? 'red' : ''} />
            )}
            <span>({item.total_votos})</span>
          </div>
          <div className="product-sale">
            <span className="p-fic">{item.preco_fic > 0 && 'R$' + formatMoeda(item.preco_fic)}</span>
            <span className="valor">R$ {formatMoeda(item.preco)}</span>
            <span>{item.semJuros}</span>
          </div>
        </div>
      </Link>
    </Area>
  );
}

export default ProductItem;