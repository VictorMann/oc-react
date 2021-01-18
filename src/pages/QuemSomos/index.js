import React from 'react';
import { PageArea } from './styled';
import { Container } from '../../components/mainComponents';

import Breadcrumb from '../../components/Breadcrumb';

function Page() {

  let breadCrumb = [{name: 'Quem Somos'}];

  return (
    <Container margin>
      <PageArea>

        <Breadcrumb items={breadCrumb} />
        
        <h1>Quem Somos</h1>
        <p>A nossa História se inicia em Julho de 2017, com a ideia de fornecer ao mercado nacional o que existe de melhor no ciclismo e esportes em geral.</p>
        <p>Nossos valores são Honestidade, Respeito e uma Integração sadia entre a Empresa para com os clientes.</p>
        <p>Fornecer produtos de alto nível de qualidade, para satisfazer as crescentes necessidades e expectativas de nossos clientes.</p>
        <p>Trabalhar com Fornecedores comprometidos com nossa política de qualidade e respeito aos nossos clientes.</p>
      </PageArea>
    </Container>
  )
}

export default Page;