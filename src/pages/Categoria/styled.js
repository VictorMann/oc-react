import styled from 'styled-components';

export const PageArea = styled.div`

.horizontal-slider {

  .thumb {
    background-color: black;
    color: white;
  }

  .track {
    background-color: grey;
    height: 5px;

    &.track-1 {
      background-color: red;
    }
  }
}




.cx {
  display: flex;
  margin-top: 1rem;

  & > * {
    min-height: 300px;
    /* border: 1px dashed red; */
  }
}
.as {
  order: 1;
  width: 280px;
  background-color: #f0f1f1;
  padding-left: 1em;
}
.pr {
  flex: 1;
  order: 2;
  margin-left: 1rem;
  
  h2.tit {
    border-bottom: 1px solid #ccc;
    font-size: 1.3em;
    font-weight: normal;
    padding-bottom: 1rem;
  }

  .dek {
    display: flex;
    justify-content: space-between;
    color: #333;
    font-size: .9em;
    margin-bottom: 1.5em;

    select {
      border: 1px solid #bbb;
      padding: .5em;
      border-radius: 4px;
      background: transparent;
    }
  }
}

.cx-pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}
`;

export const ProductList = styled.ul`
display: flex;
flex-wrap: wrap;
list-style: none;
padding: 0;
margin: 0;

& > * {
  width: 25%;
  padding: 0 .5em;
  margin-bottom: 2em;
}
`;