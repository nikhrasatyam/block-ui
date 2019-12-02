import React from 'react';
import styled from 'styled-components';
import Routes from './routes';
import BlockService from './components/service/BlockService';
import ErrorHandler from './components/errorHandler/errorHandler';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import { spacing } from './components/styles/styleVariables';
import Loader from './components/loader/loader';
import Alert from './components/alert/alert';
import './App.css';

const StyledContainer = styled.div`
padding:${spacing.medium}
`;
const App = () => (
  <div className="App">
    <BlockService />
    <Header />
    <Loader />
    <ErrorHandler>
      <StyledContainer>
        <Alert />
        <Routes />
      </StyledContainer>
    </ErrorHandler>
    <Footer />
  </div>
);

export default App;
