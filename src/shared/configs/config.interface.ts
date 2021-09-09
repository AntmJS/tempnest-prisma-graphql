export interface Config {
  graphql: GraphqlConfig
  security: SecurityConfig
}

export interface GraphqlConfig {
  playgroundEnabled: boolean
  debug: boolean
  schemaDestination: string
  sortSchema: boolean
}

export interface SecurityConfig {
  expiresIn: number
}
