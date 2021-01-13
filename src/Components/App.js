import React from "react"; // 안쓰더라도, 반드시 명시해줘야함 (react 라는 scope를 명시하는 것 )
import { gql } from 'apollo-boost';
import { HashRouter as Router } from 'react-router-dom';
import Routes from "./Routes";

import {useQuery} from 'react-apollo-hooks'

import styled, {ThemeProvider} from 'styled-components';
import Theme from '../Styles/Theme';
import GlobalStyles from '../Styles/GlobalStyles';

import Header from './Header';

const QUERY = gql`
{
    isLoggedIn @client
}
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;


export default () => {
    const {  data: { isLoggedIn }} = useQuery(QUERY);

    return (
        <ThemeProvider theme={Theme}>
            <>
            <GlobalStyles />
        <Router>
         <Header/>
            <Wrapper>
                <Routes isLoggedIn={isLoggedIn}/>
            </Wrapper>

        </Router>
        </>
        </ThemeProvider>
    )
}