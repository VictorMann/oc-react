import styled from 'styled-components';

export const PageTitle = styled.h1``;

export const Container = styled.div`
display: flex;
justify-content: center;

& > * {
  max-width: 1366px;
  width: 100%;
}
`;

/**
 *  Cores padrão
 */
export const color = {
  first: '#3b4856',
  second: '#2A2F33'
};