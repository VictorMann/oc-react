import React from 'react';

function ProductOrder({ val, onChange }) {

  return (
    <select value={val} onChange={e => onChange(e.target.value)}>
      <option value="asc">Menor Preço</option>
      <option value="des">Maior Preço</option>
      <option value="rel">Mais Relevantes</option>
      <option value="ven">Mais Vendidos</option>
      <option value="ava">Melhor Avaliação</option>
    </select>
  );
}

export default ProductOrder;