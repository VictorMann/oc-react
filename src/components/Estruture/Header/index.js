import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserCircle,
  faHeart,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

import { HeaderArea } from './styled';
import { Container } from '../../mainComponents';

import { asset, page } from '../../../helpers';

function Header() {
  return (
    <Container>
      <HeaderArea>

        <div className="ar ar-logo">
          <Link to={page()}>
            <img src={asset('/static/images/logo.png')} alt="" />
          </Link>
        </div>

        <div className="ar ar-search">
          <ul className="list-un">
            <li><Link to="atendimento">Atendimento</Link></li>
            <li><Link to="quem-somos">Quem Somos</Link></li>
            <li><Link to="politica-privacidade">Politica de privacidade</Link></li>
          </ul>
          <form>
            <div className="ss">
              <span>Todos</span>
            </div>
            <input placeholder="O que você deseja encontrar?" />
            <button type="button"></button>
          </form>
        </div>

        <div className="ar ar-cl">
          <div className="cl1">
            <Link to={page('login')}>
              <FontAwesomeIcon icon={faUserCircle} />
              <span>Entre ou<br/> cadastre-se</span>
            </Link>
          </div>
          <div className="cl2">
            <Link to={page('client/account#fav')}>
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <div className="bc">
              <span data-qtd="0">
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
            </div>
          </div>
        </div>

      </HeaderArea>
    </Container>
  );
}

export default Header;