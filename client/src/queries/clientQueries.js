import { gql } from '@apollo/client';

// apollo client version of a get request fetcing data the same way as in graphiqls server
const GET_CLIENTS = gql`
    query getClients {
        clients {
            id
            name
            email
            phone
        }
    }
`

export { GET_CLIENTS };