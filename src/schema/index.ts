import { MutationDefinitions, QueryDefinitions } from './definitions/index.js'
import MutationResolvers from './mutators/index.js'
import QueryResolvers from './queries/index.js'

export const typeDefs = `#graphql
    type Mutation {
        ${MutationDefinitions}
    }
    type Query {
        ${QueryDefinitions}
    }    
`

export const resolvers = {
    Mutation: {
        ...MutationResolvers
    },
    Query: {
        ...QueryResolvers
    }
}