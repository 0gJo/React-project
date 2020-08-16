import React from "react"; // 안쓰더라도, 반드시 명시해줘야함 (react 라는 scope를 명시하는 것 )
import {useMutation} from 'react-apollo-hooks';
import {gql} from 'apollo-boost';

const QUERY = gql`
mutation logUserOut {
    logUserOut @client
}
`;


export default () => {
    const [localLogOut] = useMutation(QUERY);
    
    const onClick = e => {
        localLogOut();
    }
    return (
    <div>
        <h2>Home</h2>
        <button onClick={onClick}>로그아웃</button>
    </div>
    )
}