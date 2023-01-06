# apollo-graphql-template
[![License][github-license]][github-license-url]

This is a simple template/boilerplate to host a GraphQL Apollo Server, written in TypeScript. Intentionally leaves out persistent storage hooks and DBO layer to be implemented by the user.

## Getting Started

1. Clone this repository
2. Run `yarn` or `yarn install` to install dependencies
3. Run `yarn start` to start the server
4. Open `http://localhost:4000` to view the GraphQL Apollo Sandbox

## Structure

Type definitions are located in `src/schema/definitions`. Mutation resolvers in `src/schema/mutators` and query resolvers in `src/schema/queries`. At the root of `src/schema` they all come together and are exported. Due to this, simply creating and making adjustments to the base exports for definitions, mutators, and queries in their respective directories should be sufficient for them to be conveyed properly.

[github-license]:  https://img.shields.io/github/license/nathanalkurdi/apollo-graphql-template
[github-license-url]: https://github.com/NathanAlkurdi/apollo-graphql-template/blob/main/LICENSE