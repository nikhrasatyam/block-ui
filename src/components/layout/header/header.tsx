import React from 'react';
import styled from 'styled-components';
import { colors, fontSizes } from '../../styles/styleVariables';

const StyledHeader = styled.div`
  background-color: ${colors.headerBG};
  padding: 1.8rem 0 1.5rem 0;
`;
const StyledTitle = styled.h1`
  color:${colors.headerText};
  text-align:center;
  font-size: ${fontSizes.medium};
`;

const Header = () => (
  <StyledHeader>
    <StyledTitle>
        Block One
    </StyledTitle>
  </StyledHeader>
);


export default Header;
