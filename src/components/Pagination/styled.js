import styled from 'styled-components';

export const Area = styled.ul`
display: flex;
list-style: none;
padding: 0;
margin: 0;

a, span {
  display: table-cell;
  width: 2em;
  height: 2em;
  border: 1px solid #b9b9b9;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
  margin-right: .2em;
  cursor: pointer;

  &:hover {
    background: #ddeaff;
  }

  &.active {
    background: #0079fb;
    color: white;
  }

  &.disabled {
    background-color: #ccc;
  }
}
`;