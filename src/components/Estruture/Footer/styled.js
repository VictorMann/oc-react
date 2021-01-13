import styled from 'styled-components';
import { color } from '../../mainComponents';
import { asset } from '../../../helpers';

const corTexto = '#d9d9d9';

export const FooterArea = styled.div`
background-color: ${color.second};
padding-top: 3rem;

.foo {
  display: flex;
  font-size: 13px;
  color: ${corTexto};
  line-height: 1.4;
}
.foo-title {
  color: ${color.third};
}
.foo-title--at {
  margin-top: 4em;
}
.foo1,
.foo2 {
  min-height: 50vh;
}

.foo1 {
  width: 60%;
  display: flex;
  flex-wrap: wrap;

  .f1,.f2,.f3 {
    flex: 1;
  }

  .f4 {
    width: 100%;
    text-align: justify;
    font-size: .85em;
    color: #89959f;
    

    p {
      border-top: 1px dotted #89959f;
      padding: 1rem 0;
    }
  }

  ul a {
    display: inline-block;
    color: ${corTexto};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
.foo2 {
  width: 40%;
  margin-left: 3%;
  .foo-pay {
    margin-right: 5px;
    width: 50px;
    height: 22px;
    text-indent: -9999px;

    background-position: 0 0;
    background-repeat: no-repeat;
    background-image: url(${asset('static/images/sprint.png')});
  }
  .foo-pay.bol {background-position-y: 0;width: 42px;}
  .foo-pay.visa {background-position-y: -209px;width: 50px}
  .foo-pay.master {background-position-y: -182px;width: 35px}
  .foo-pay.diners {background-position-y: -92px;width: 32px}
  .foo-pay.hiper {background-position-y: -155px;width: 50px}
  .foo-pay.elo {background-position-y: -123px;width: 24px}
  .foo-pay.america {
    background-position-y: -546px;
    background-position-x: -1px;
    width: 26px;
    margin-right: 9px;
  }
  .foo-pay.paypal {background-position-y: -233px; width: 40px}
  .foo-safe {
    text-indent: -9999px;
    width: 100px;
    height: 30px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-image: url(${asset('static/images/sprint.png')});
    margin: 3em 0;
  }
  .foo-safe.lets {
    background-position-y: -492px;
    width: 127px;
    height: 48px;
    display: flex;

    a {
      flex: 1;
      display: block;
    }
  }
  address {
    font-style: normal;
    margin-bottom: 2.2rem;
  }

  .foo-rede {
    display: flex;
    text-indent: -9999px;
    width: 33px;
    height: 33px;
    margin-right: 10px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-image: url(${asset('static/images/sprint.png')});
    opacity: .2;

    a {
      flex: 1;
      display: block;
    }

    &.face {background-position-y: -262px}
    &.insta {background-position-y: -300px;}

  }
  .foo-logo {
    display: block;
    width: 153px;
    height: 34px;
    background-position: 0px -332px;
    background-repeat: no-repeat;
    background-image: url(${asset('static/images/sprint.png')});
    background-size: 150px;
    margin-left: 7em;
    opacity: 0.4;
  }
}
`;