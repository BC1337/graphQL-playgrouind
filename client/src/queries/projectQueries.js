import { gql } from "@apollo/client";
// all projects
const GET_PROJECTS = gql`
    query getProjects {
        projects {
            id
            name
            status
        }
    }

`
// single project
const GET_PROJECT = gql `
    query getProject($id: ID!) {
        project(id: $id){
            id
            name
            description
            status
            client {
                id
                name
                email
                phone
            }
        }
    }
`


export { GET_PROJECTS, GET_PROJECT}