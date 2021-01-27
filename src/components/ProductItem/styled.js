import styled from 'styled-components';

export const Area = styled.li`
display: flex;
flex-direction: column;
min-height: 372px;

& > a {
  position: relative;
  color: #333;
  text-decoration: none;
}
.et-promo {
  position: absolute;
  top: 10px;
  right: 10px;
  display: block;
  background: repeating-linear-gradient(180deg, #2aa730, #72bf18, #2aa730);
  color: white;
  width: 2.8em;
  height: 2.8em;
  border-radius: 50%;
  text-align: center;
  line-height: 2.8;
  font-size: .9em;
}

.iw {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 1px 1px 5px rgb(0 0 0 / 10%);
  border: 1px solid #f3f3f3;
  padding: .5em;
  transition: box-shadow .5s;

  &:hover {
    box-shadow: 1px 1px 5px rgb(0 0 0 / 30%);
  }

  & > div {
    flex: 1;
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    flex: none;
    height: 278px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    overflow: hidden;

    img {
      visibility: hidden;
    }
  }
}

.product-title h3 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 2.3em;
  overflow: hidden;
  font-weight: normal;
  font-size: 1em;
}
.product-rating {
  color: #ccc;
}
.product-sale {
  display: flex;
  flex-direction: column;

  span { display: block }

  .p-fic {
    height: 1em;
    text-decoration: line-through;
    color: #666;
  }
  .valor {
    font-size: 1.3em;
    font-weight: 700;
    margin-bottom: .5em;
  }

  & span:last-child {
    color: #888;
    font-size: .9em;
  }
}
`;