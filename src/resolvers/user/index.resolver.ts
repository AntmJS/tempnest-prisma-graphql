import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UserService } from '@/services/user.service'
// import { PublicDecorator } from '@/shared/decorators/public.decorator'
import { UserDecorator } from '@/shared/decorators/user.decorator'
import type { IRequestUser } from '@/shared/guard/gqlAuth.interface'
import { UpdateUserInput } from './index.input'
import { User } from './index.model'

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  // @PublicDecorator() 这个代表不需要登录
  @Query(() => User)
  async findUser(@UserDecorator() user: IRequestUser): Promise<User> {
    return await this.userService.findUser(user.id!)
  }

  @Mutation(() => User)
  async updateUser(
    @UserDecorator() user: IRequestUser,
    @Args('data') updateUser: UpdateUserInput,
  ): Promise<User> {
    return await this.userService.updateUser(user.id!, updateUser)
  }
}
