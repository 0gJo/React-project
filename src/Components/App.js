import React from "react"; // 안쓰더라도, 반드시 명시해줘야함 (react 라는 scope를 명시하는 것 )
import { gql } from 'apollo-boost';
import Router from "./Router";

import {useQuery} from 'react-apollo-hooks'

const QUERY = gql`
{
    isLoggedIn @client
}
`;


export default () => {
    const {  data: { isLoggedIn }} = useQuery(QUERY);

    return (
        // <div>
        //     <h2>React APP</h2>
        // </div>
        <Router isLoggedIn={isLoggedIn} />

    )
}