declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'production' | 'development'
    API_ENV: 'stable' | 'real' | 'pre' | 'dev'
  }
}

declare namespace Normal {
  type IAnyObject = Record<string, any>
}
