import React from 'react';
import { PageArea } from './styled';
import { Container } from '../../components/mainComponents';

import Breadcrumb from '../../components/Breadcrumb';

function Page() {

  let breadCrumb = [{name: 'Trabalhe Conosco'}];

  return (
    <Container margin>
      <PageArea>

        <Breadcrumb items={breadCrumb} />
        
        <h1>Trabalhe Conosco</h1>
        <h3>Envio de Cúrriculo</h3>
        <p>
          Envie seu currículo para futuras oportunidades na OCiclista. 
          Mande email para: <a href="mailto:contato@ociclista.com.br" className="link-contact">contato@ociclista.com.br</a>
        </p>
      </PageArea>
    </Container>
  )
}

export default Page;