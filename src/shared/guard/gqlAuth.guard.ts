import type { IRequestUser } from './gqlAuth.interface'
import {
  Injectable,
  ExecutionContext,
  CanActivate,
  // CACHE_MANAGER,
  UnauthorizedException,
} from '@nestjs/common'
// import { Cache } from 'cache-manager'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Reflector } from '@nestjs/core'
import { IS_PUBLIC_KEY } from '../decorators/public.decorator'

@Injectable()
export class GqlAuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector, // @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const user: IRequestUser = {
        hasLogin: false,
      }
      const req = this.getRequest(context)
      const isPublic = this.reflector.getAllAndOverride<boolean>(
        IS_PUBLIC_KEY,
        [context.getHandler(), context.getClass()],
      )
      if (isPublic) {
        req.user = user
        return true
      }

      // 下面逻辑根据token判断是否登录，如果是return true 否则throw new Error()
      user.id = 1n
      user.hasLogin = true
      // resolver通过@UserDecorator() user: IRequestUser,可以取到
      req.user = user
      return true
    } catch (e) {
      throw new UnauthorizedException('请重新登录')
    }
  }

  public getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req
  }
}
