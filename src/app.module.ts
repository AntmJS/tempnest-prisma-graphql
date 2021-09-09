import { GraphQLModule } from '@nestjs/graphql'
import { Module, Logger } from '@nestjs/common'
import { APP_PIPE, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { ConfigModule, ConfigService } from '@nestjs/config'
// import { DateScalar } from './graphql/scalars/date.scalar'
import config from './shared/configs/config'
import { GraphqlConfig } from './shared/configs/config.interface'
import { GraphQLValidationPipe } from './shared/pipes/GraphQLValidation.pipe'
import { GqlAuthGuard } from './shared/guard/gqlAuth.guard'
import { UserModule } from './resolvers/user/index.module'
import { PrismaModule } from './resolvers/global/prisma.module'
import { CacheModule } from './resolvers/global/cache.module'
import { WinstonLogModule } from './resolvers/global/log.module'
import { HeaderInterceptor } from './shared/interceptors/header.interceptor'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `env/${process.env.API_ENV || 'real'}.env`,
      load: [config],
    }),
    GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const graphqlConfig = configService.get<GraphqlConfig>('graphql')
        return {
          installSubscriptionHandlers: true,
          buildSchemaOptions: {
            numberScalarMode: 'integer',
          },
          sortSchema: graphqlConfig!.sortSchema,
          autoSchemaFile: graphqlConfig!.schemaDestination,
          debug: graphqlConfig!.debug,
          playground: graphqlConfig!.playgroundEnabled,
          context: ({ req }: any) => ({ req }),
          formatError(error) {
            const { message, extensions, path } = error
            if (extensions?.['exception']?.['status'] === 500) {
              return {
                message: extensions?.['exception']?.['message'] || message,
                path: path,
                extensions: {
                  code: extensions?.['code'],
                  status: extensions?.['exception']?.['status'],
                  biz: {
                    code: extensions?.['exception']?.['response']?.['code'],
                    message: extensions?.['exception']?.['response']?.['msg'],
                  },
                },
              }
            } else {
              return {
                message: extensions?.['response']?.['message'] || message,
                path: path,
                extensions: {
                  code: extensions?.['code'],
                  status: extensions?.['response']?.['statusCode'],
                },
              }
            }
          },
        }
      },
      inject: [ConfigService],
    }),
    WinstonLogModule,
    CacheModule,
    PrismaModule,
    UserModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: GraphQLValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: HeaderInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: GqlAuthGuard,
    },
    Logger,
    // DateScalar,
  ],
})
export class AppModule {}
