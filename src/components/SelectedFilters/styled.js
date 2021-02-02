import styled from 'styled-components';

export const Area = styled.ul`
list-style: none;
margin: 0;
display: flex;
align-items: center;
padding: .5em;
margin-bottom: 1em;
background: #efefef;

li {
  margin-right: .75em;
  line-height: 1.5;
}

.item-filtro {
  display: flex;
  border: 1px solid #c3c3c3;
  padding: .5em;
  text-align: center;
  width: 120px;
  font-size: .85em;
  box-shadow: 1px 1px 3px rgb(0 0 0 / 30%);
}
.content {
    flex: 1;
    overflow: hidden;

    span {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: default;
    }

    .value {
      font-weight: 700;
      text-transform: capitalize;
    }
  }

.close, .limpar {
  cursor: pointer;
}

.close {
  align-self: center;
  text-decoration: none;
  color: inherit;
  font-size: 1.2em;
}
.limpar {
  color: #666;
  text-decoration: underline;
}
`;