import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import ReactSlider from 'react-slider';
import { Area } from './styled';

function SideFilter({ filter, handle }) {

  let dataFilter = '';

  switch (filter.slug) {
    case 'preco':
      dataFilter = <FilterPreco min={filter.values.min} max={filter.values.max} handle={handle} />
      break;
    default:
     dataFilter = <FilterDefault filter={filter} handle={handle} />
  }

  return (
    <Area>
      <header><h4>{filter.nome}</h4></header>
      {dataFilter}
    </Area>
  )
}

export default SideFilter;


const FilterDefault = ({ filter, handle }) => {

  let items = filter.values;

  const fn = key => {
    items[key].active = true;
    
    let data = {
      group: {nome: filter.nome, slug: filter.slug},
      item: items[key]
    };

    handle(data);
  };

  return (
    <ul className="list-un">
      {items.map((item, k) =>
        <li 
          key={k} 
          className={item.active ? 'active' : ''}
          onClick={() => fn(k)}>

            <span>{item.active && <FontAwesomeIcon icon={faCheck} />}</span>
            <label>{item.nome} ({item.qtd})</label>

        </li>
      )}
    </ul>
  )
};


const FilterPreco = ({ min, max, handle }) => {
  const [value, setValue] = useState([min, max]);

  const fn = () => {
    let data = {
      group: {nome: 'Preço', slug: 'preco'},
      item: {nome: `${value[0]}-${value[1]}`, slug: `${value[0]}-${value[1]}`}
    };

    handle(data);
  };
  
  return (
    <>
      <div className="range-preco">
          <span>R$</span>
          <span className="rp pmin">{value[0]}</span> até <span className="rp pmax">{value[1]}</span>
      </div>

      <ReactSlider
          value={value}
          // onBeforeChange={val => console.log('onBeforeChange value:', val)}
          onChange={val => { console.log('onChange value:', val); setValue(val); }}
          // onAfterChange={val => console.log('onAfterChange value:', val)}
          className="slider"
          thumbClassName="thumb"
          trackClassName="track"
          min={min}
          max={max}
          minDistance={500}
          renderThumb={(props, state) => <div {...props}></div>}
      />

      <div>
          <button 
            type="button" 
            className="btnPreco"
            onClick={fn}>
              Aplicar
          </button>
      </div>
    </>
  )
};