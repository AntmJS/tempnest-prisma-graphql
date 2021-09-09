import { Global, Module, CacheModule as NestCacheModule } from '@nestjs/common'

@Global()
@Module({
  imports: [NestCacheModule.register()],
  exports: [NestCacheModule],
})
export class CacheModule {}
