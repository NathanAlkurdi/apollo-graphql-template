export const DefaultQuery = {
    default: (parent: any, args: any, context: any, info: any) => {
        return 'default'
    }
}

const QueryResolvers = {
    ...DefaultQuery
}

export default QueryResolvers