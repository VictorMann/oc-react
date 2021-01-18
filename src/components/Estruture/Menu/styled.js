import styled from 'styled-components';
import { color } from '../../mainComponents';
import { Link } from 'react-router-dom';

import { asset } from '../../../helpers';

export const MenuArea = styled.nav`
background-color: ${color.first};
color: white;

.btn-nav {
  display: inline-block;
  text-transform: uppercase;
  font-weight: bold;
  padding: .8em;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    margin: 0 .3rem;
  }

  &::before {
    background: url(${asset('static/images/geral/ciclista-white.png')}) no-repeat center;
    background-size: contain;
  }

  &::after {
    background: url(${asset('static/images/geral/arrow-point-to-right-white.png')}) no-repeat center;
    background-size: 50%;
  }
}
.btn-mar {
  display: inline-block;
  background-color: transparent;
  border: 1px solid #ddd;
  color: #fff;
  padding: .5rem;
  text-decoration: none;
  border-radius: 3px;
  margin-left: 3em;
  margin-right: 3em;
  cursor: pointer;
  transition: .2s;

  &:hover {
    color: orange;
    border-color: orange;
  }
}
`;

const AreaMenuItem = styled.li`
a {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    padding: .6rem;

    &:hover {
      background-color: #323e4a;
    }

    &::before {
      content: '';
      display: inline-block;
      width: 2em;
      height: 2em;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url(${props => props.image});
      vertical-align: middle;
      margin-right: .2em;
    }
  }
`;
export const MenuItem = ({name, link, image}) => {
  return (
    <AreaMenuItem image={image}>
      <Link to={link}>{name}</Link>
    </AreaMenuItem>
  )
};