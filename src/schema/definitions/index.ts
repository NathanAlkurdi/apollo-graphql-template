const DefaultQuery = `
    default: String
`

const DefaultMutation = `
    default(output: String!): String!
`

export const QueryDefinitions = `#graphql
    ${DefaultQuery}
`

export const MutationDefinitions = `#graphql
    ${DefaultMutation}
`
