import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductArea, PageArea } from './styled';
import { Container } from '../../components/mainComponents';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import api from '../../helpers/api';

import Breadcrumb from '../../components/Breadcrumb';

function Page() {
  const { slug } = useParams();

  const [produto, setProduto] = useState();
  const [breadcrumb, setBreadcrumb] = useState();

  useEffect(() => {
    const getProduto = async () => {
      let data = await api.getProduto(slug).then(data => data.data);
      setProduto(data.prod);
      setBreadcrumb(data.breadcrumb);
    };
    getProduto();
  }, [slug]);

  return (
    <>
      <ProductArea>
        <Container margin>
          <div className="product-area">

            <Breadcrumb items={breadcrumb} />

            <div className="product-cx flx">
              <section className="product-fig">

                {produto &&
                  <div id="imagem_principal" style={{"backgroundImage": `url(${produto.img})`}}>
                    <img src={produto.img} alt={produto.nome} />
                  </div>
                }

                {produto &&
                  <div className="product-pp-carr">
                    <div className="my-gallery flx" itemscope>
                      {produto.imgs.map((i, k) =>
                        <figure key={k} className="product--l" itemprop="associatedMedia" itemscope style={{"backgroundImage": `url(${i.nome})`}}>
                          <a href="javascript:;" itemprop="contentUrl">
                            <img src={i.nome} itemprop="thumbnail" />
                          </a>
                        </figure>
                      )}
                    </div>
                  </div>
                }

              </section>
              <section className="product-info">
                <div className="product-cx-title">
                  <h1 className="product-title">{produto.nome}</h1>
                  <div className="product-sku">
                    <span className="item-sku" data-r={produto.sku}>(Cod. {produto.sku})</span>
                    <div className="dinline-block">
                      <ul className="list-un product-rating">
                        {new Array(5).fill().map((i,k) =>
                          <li key={k} className={(k + 1) <= produto.votos ? 'active' : ''}>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                        )}
                      </ul>
                    </div>
                    <span>({produto.total_votos}) avaliações</span>
                  </div>
                </div>
              </section>
            </div>

          </div>
        </Container>
      </ProductArea>

      <Container margin>
        <PageArea>
          <h1>Teste Produto: {slug}</h1>
      </PageArea>
    </Container>
    </>
  );
}

export default Page;