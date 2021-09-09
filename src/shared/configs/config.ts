import { Config } from './config.interface'

const config: Config = {
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: '../temptaro-apollo-graphql/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: 7 * 24 * 60 * 60,
  },
}

export default (): Config => config
