import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
 
const ButtonTextStyled = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
`;
 
const ButonStyled = styled.button`
  display: flex;
  align-items: center;
  width: 20%;
  background: blue;
  padding: 20px 30px;
  height: 120px;
 
  ${props => props.light && css`
    background: #ccc;
 
    ${ButtonTextStyled} {
      color: #000;
    }
  `}

`;
 
const Button = (props) => {
  return (
    <ButonStyled light = {props.light}>
      <ButtonTextStyled>
        Button
      </ButtonTextStyled>
    </ButonStyled>
  )
}
Button.propTypes = {
  light: PropTypes.bool,
};
 
export default Button;