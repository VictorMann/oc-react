import styled from 'styled-components';
import { color } from '../../mainComponents';

import { asset } from '../../../helpers';

export const HeaderArea = styled.header`
display: flex;
margin: 0 .5%;
margin-top: .3rem;

.ar-logo {
  width: 130px;
  a {
    display: block;
    width: 84px;
  }
}
.ar-search {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    padding-top: 1rem;
    font-size: .8rem;

    a {
      display: inline-block;
      text-decoration: none;
      color: #333;
      margin: 0 .4rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  form {
    display: flex;
    width: 100%;
    justify-content: space-between;
    border: 2px solid ${color.first};
    border-radius: 5px;

    .ss {
      display: flex;
      cursor: pointer;
      background-color: #efefef;

      span {
        display: flex;
        align-self: center;
        border-right: 1px solid #888;
        padding-left: 1rem;

        &::after {
          content: '\u203A';
          display: block;
          margin-left: .7rem;
          margin-right: .5rem;
          width: .8em;
          height: .8em;
          text-align: end;
          transform: rotate(90deg);
        }
      }
    }

    input,
    button {
      outline: none;
    }

    input {
      flex: 1;
      border: none;
      padding: .65rem;
    }

    button {
      border: none;
      background: ${color.first} url(${asset('static/images/search.png')}) no-repeat center;
      background-size: 50%;
      width: 3.5rem;
      cursor: pointer;
    }
  }

}
.ar-cl {
  width: 224px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: ${color.first};
  margin-left: .5rem;
  
  a { color: ${color.first} }

  .cl1 {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      
      svg {
        font-size: 1.5rem;
        margin-right: .5rem;
      }
      span {
        font-size: .8rem;
      }
    }
  }
  .cl2 {
    display: flex;
    font-size: 1.5rem;

    .bc {
      margin-left: 1rem;
      & > span {
        position: relative;
        margin-right: .5rem;
        cursor: pointer;

        &::after {
          content: attr(data-qtd);
          position: absolute;
          top: 55%;
          right: -22%;
          display: inline-block;
          font-size: .7rem;
          font-weight: bold;
          width: .9rem;
          height: .9rem;
          border: 1px solid ${color.first};
          text-align: center;
          border-radius: 50%;
          background-color: white;
        }
      }
    }
  }
}
`;