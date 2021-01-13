import styled from 'styled-components';

export const PageTitle = styled.h1``;

export const Container = styled.div`
display: flex;
justify-content: center;

& > * {
  max-width: 1366px;
  width: 100%;
  ${({ margin }) => {
    if (!margin) return '';
    let fn = m => `margin-left: ${m}; margin-right: ${m};`;
    return typeof margin == 'string' ? fn(margin) : fn('2%');
  }}
}
`;

/**
 *  Cores padrão
 */
export const color = {
  first: '#3b4856',
  second: '#2A2F33',
  third: '#5b6f86'
};