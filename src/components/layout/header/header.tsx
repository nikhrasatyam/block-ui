import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/styleVariables';


const StyledHeader = styled.div`
  background-color: ${colors.headerBG};
  padding: 1.8rem 0 1.5rem 0;
`;
const StyledTitle = styled.h1`
  color:white;
  text-align:center;
  width: 90%;
  margin: auto;
  font-size: 1.3rem;
`;

const Header = () => (
  <StyledHeader>
    <div>
      <StyledTitle>
          Block One
      </StyledTitle>
    </div>
  </StyledHeader>
);


export default Header;
