import styled from 'styled-components';

export const Area = styled.li`

a {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 196px;
  height: 196px;
  border-radius: 50%;
  border: 1px solid #eee;
  text-decoration: none;
  color: #888;
  margin: .75em;
  background: white url(${props => props.image}) no-repeat center;
  background-size: contain;
  font-size: .75rem;
  transition: .2s;

  &:hover {
    box-shadow: 0 0 3px #ddd;
  }
  
  span {
    display: inline-block;
    margin-bottom: 1.4em;
  }
}
`;