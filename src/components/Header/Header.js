import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
 
const HeaderTitleStyled = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: #fff;
`;
 
const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  background: #744c9d;
  padding: 20px 30px;
  height: 120px;
 
  ${props => props.light && css`
    background: #ccc;
 
    ${HeaderTitleStyled} {
      color: #000;
    }
  `}

`;
 
const Header = (props) => {
  return (
    <HeaderStyled light = {props.light}>
      <HeaderTitleStyled>
        Gatsby Project + Storybook
      </HeaderTitleStyled>
    </HeaderStyled>
  )
}
 
Header.propTypes = {
  light: PropTypes.bool,
};
 
export default Header;