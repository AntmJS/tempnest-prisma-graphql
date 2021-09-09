import { Module } from '@nestjs/common'
import { UserService } from '@/services/user.service'
import { UsersResolver } from './index.resolver'

@Module({
  providers: [UsersResolver, UserService],
})
export class UserModule {}
