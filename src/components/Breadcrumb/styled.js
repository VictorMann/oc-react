import styled from 'styled-components';
import { color } from '../mainComponents';

export const Area = styled.ul`
display: flex;
list-style: none;
padding: 0;
margin: 0;
margin-top: .75rem;
font-size: .8rem;

li {
  &:not(:last-child)::after {
    content: '>';
    display: inline-block;
    margin: 0 .8rem;
  }
}
a {
  color: ${color.first};
  text-decoration: none;
  color: red;
}
`;