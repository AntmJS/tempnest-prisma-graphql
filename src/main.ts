import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { configLog } from './resolvers/global/log.config'
import { configMiddlewares } from './shared/middlewares/middleware.config'
import '@/graphql/enums/register'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  configMiddlewares(app)
  configLog(app)

  const configService = app.get(ConfigService)
  const appPort = configService.get<string>('APP_PORT')

  await app.listen(appPort || 3000, () => {
    console.log(
      `🚀 Server ready at: http://localhost:${appPort || 3000}/graphql`,
    )
  })
}
bootstrap()
