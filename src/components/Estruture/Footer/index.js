import React from 'react';
import { Link } from 'react-router-dom';
import { FooterArea } from './styled';

import { Container } from '../../mainComponents';
import { page } from '../../../helpers';

function Footer() {
  return (
    <FooterArea>
      <Container margin>
        <div className="foo">
          <div className="foo1">
            <div className="f1">
              <h3 className="foo-title">Produtos</h3>
              <ul className="list-un">
                <li><Link to={page("acessorios")}>Acessórios</Link></li>
                <li><Link to={page("bicicletas")}>Bicletas</Link></li>
                <li><Link to={page("calcados")}>Calçados</Link></li>
                <li><Link to={page("kids")}>Kids</Link></li>
                <li><Link to={page("kits")}>Manutenção</Link></li>
                <li><Link to={page("manutencao")}>Manutenção</Link></li>
                <li><Link to={page("mulheres")}>Mulheres</Link></li>
                <li><Link to={page("pecas")}>Peças</Link></li>
                <li><Link to={page("protecao-e-seguranca")}>Proteção e Segurança</Link></li>
                <li><Link to={page("quadros")}>Quadros</Link></li>
                <li><Link to={page("treinamentos")}>Treiamentos</Link></li>
                <li><Link to={page("vestuario")}>Vestuário</Link></li>
              </ul>
            </div>
            <div className="f2">
              <h3 className="foo-title">Institucional</h3>
              <ul className="list-un">
                <li><Link to={page("quem-somos")}>Sobre a OCiclista</Link></li>
                <li><Link to={page("trabalhe-conosco")}>Trabalhe conosco</Link></li>
                <li><Link to={page("politica-de-troca")}>Política de troca</Link></li>
                <li><Link to={page("politica-de-privacidade")}>Política de privacidade</Link></li>
              </ul>
            </div>
            <div className="f3">
            
              <h3 className="foo-title">Minha Conta</h3>
              <ul className="list-un">
                <li><Link to={page("meus-peidos")}>Meus pedidos</Link></li>
                <li><Link to={page("lista-de-desejos")}>Lista de desejos</Link></li>
                <li><Link to={page("atulizar-perfil")}>Atualizar perfil</Link></li>
              </ul>

              <h3 className="foo-title foo-title--at">Atendimento</h3>
              <p>
                Horário de atendimento: 08:00 às 18:00 de segunda à sexta-feira, 
                horário de Brasília (exceto feriados).
              </p>
              <p>
                atendimento@ociclista.com.br<br />
                (11) 98038-9999
              </p>

            </div>
            <div className="f4">
              <p>
                Juthal Esportes LTDA | CNPJ: 28.231.511/0001-33 | 
                Todos os direitos reservados. Os preços anunciados neste 
                site ou via e-mail promocional podem ser alterados sem prévio aviso. 
                As fotos contidas nesta página são meramente ilustrativas do produto.
              </p>
            </div>
          </div>
          <div className="foo2">
            <h3 className="foo-title">Formas de Pagamento</h3>
            <ul className="list-un flx">
              <li className="foo-pay bol" title="Boleto bancário">Boleto bancário</li>
              <li className="foo-pay visa" title="Cartão Visa">Cartão visa</li>
              <li className="foo-pay master" title="Cartão MasterCard">Cartão MasterCard</li>
              <li className="foo-pay diners" title="Cartão Diners">Cartão Diners</li>
              <li className="foo-pay hiper" title="Cartão Hipercard">Cartão Hipercard</li>
              <li className="foo-pay elo" title="Cartão Elo">Cartão Elo</li>
              <li className="foo-pay america" title="America Express">Cartão America Express</li>
              <li className="foo-pay paypal" title="Paypal">Paypal</li>
            </ul>

            <div className="flx flx-align-center">
              <ul className="list-un flx">
                <li className="foo-safe lets">
                  <a href="https://letsencrypt.org/pt-br/" title="Let’s Encrypt" target="_blank" rel="noreferrer">
                    Let’s Encrypt
                  </a>
                </li>
              </ul>
            </div>

            <address>
              Endereço: Av. Carlos Ferreira Endres, 829<br />
              Vila Endres – Guarulhos – SP<br />
              CEP: 07041-030
            </address>

            <div className="flx flx-align-center">
              <ul className="foo-cx-rede list-un flx">
                <li className="foo-rede face"><a href="##" title="Facebook">Facebook</a></li>
                <li className="foo-rede insta"><a href="https://www.instagram.com/ociclista.com.br/" target="_blank" rel="noreferrer" title="Instagram">Instagram</a></li>
              </ul>
              <span className="foo-logo"></span>
            </div>

          </div>
        </div>
      </Container>
    </FooterArea>
  )
}

export default Footer;