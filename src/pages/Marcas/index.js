import React, { useState, useEffect } from 'react';
import { PageArea } from './styled';
import { Container } from '../../components/mainComponents';
import api from '../../helpers/api';

import Breadcrumb from '../../components/Breadcrumb';
import ItemMarca from '../../components/ItemMarca';

function Page() {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    api.marcas().then(data => setMarcas(data.data));
  }, []);

  let breadCrumb = [{name: 'marcas'}];

  return (
    <Container margin>
      <PageArea>

        <Breadcrumb items={breadCrumb} />
        
        <h1>Marcas</h1>
        {marcas.length > 0 &&
          <ul className="list-marcas list-un">
            {marcas.map(item => 
              <ItemMarca key={item.slug} item={item} />
            )}
          </ul>
        }
      </PageArea>
    </Container>
  )
}

export default Page;