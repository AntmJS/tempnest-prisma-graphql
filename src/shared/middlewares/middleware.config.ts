import { INestApplication } from '@nestjs/common'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { CORS_ORIGINS } from '../constants'

export const configMiddlewares = (app: INestApplication) => {
  app.use(json())
  app.use(urlencoded({ extended: true }))
  app.use(morgan('combined'))
  app.use(
    helmet({
      contentSecurityPolicy:
        process.env.NODE_ENV === 'production' ? undefined : false,
    }),
  )
  app.enableCors({
    origin: CORS_ORIGINS,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    preflightContinue: true,
    optionsSuccessStatus: 204,
  })
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
    }),
  )
}
