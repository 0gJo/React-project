import React from "react"; // 안쓰더라도, 반드시 명시해줘야함 (react 라는 scope를 명시하는 것 )
import { gql } from 'apollo-boost';
import Router from "./Router";
import {ThemeProvider} from 'styled-components';

import {useQuery} from 'react-apollo-hooks'

import Theme from '../Styles/Theme';

import Header from './Header';

const QUERY = gql`
{
    isLoggedIn @client
}
`;


export default () => {
    const {  data: { isLoggedIn }} = useQuery(QUERY);

    return (
        <ThemeProvider theme={Theme}>
        {isLoggedIn && <Header />}   
        <Router isLoggedIn={isLoggedIn} />
        </ThemeProvider>
    )
}