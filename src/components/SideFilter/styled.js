import styled from 'styled-components';

export const Area = styled.div`
position: relative;
color: #3b4856;
padding-bottom: .75em;
font-size: .9em;
padding-right: 1em;

&::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  border: 1px solid white;
}

& ul li,
input,
label { cursor: pointer }

& input { display: none }

& ul li {
  display: flex;
  margin-bottom: .75em;

  &:hover {
    color: #0079fb;
  }

  &.active span {
    color: white;
    background: #0079fb;
    border-color: #0079fb;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border: 1px solid #3b4856a8;
    vertical-align: middle;
    margin-right: .3em;
    font-size: .8em;
    text-align: center;
    line-height: 1.2;
  }
}
`;