import styled from 'styled-components';

export const Button = styled.button`
  margin-left: auto;
  padding: ${props => props.padding};
  color: #fff;
  background-color: ${props => props.bgColor};
  box-shadow: none;
  transition: all 0.5s ease;

  :hover {
    color: #fff;
    background-color: ${props => props.bgHover};
  }

  :focus {
    box-shadow: none;
  }
`;
