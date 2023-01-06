export const DefaultMutator = {
    default: (parent: any, args: any, context: any, info: any) => {
        const { output } = args
        return output
    }
}

const MutationResolvers = {
    ...DefaultMutator
}

export default MutationResolvers