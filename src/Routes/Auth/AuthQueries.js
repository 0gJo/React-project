import {gql} from 'apollo-boost';


export const CONFIRM_SECRET = gql`
    mutation confirmSecret($user_id: String!, $user_pw: String!){
        confirmSecret(user_id: $user_id, user_pw: $user_pw)
}
`;

export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;