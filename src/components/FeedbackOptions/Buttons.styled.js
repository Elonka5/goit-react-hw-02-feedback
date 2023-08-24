import styled from 'styled-components';

export const ButtonsStyled = styled.button`
  margin: 10px;
  max-width: 160px;
  padding: 10px 20px;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgb(14, 14, 26);
  color: rgb(234, 234, 234);
  font-weight: 400;
  transition: 0.6s;
  box-shadow: 0px 0px 20px #1f4c65;
  -webkit-box-reflect: below 10px
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));

  &:active {
    scale: 0.92;
  }

  &:hover,
  :focus {
    background: rgb(2, 29, 78);
    background: linear-gradient(
      270deg,
      rgba(2, 29, 78, 0.681) 0%,
      rgba(31, 215, 232, 0.873) 60%
    );
    color: rgb(4, 4, 38);

    svg {
      fill: #9e0202;
    }
  }
`;