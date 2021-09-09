import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { HEADER } from '../constants'

@Injectable()
export class HeaderInterceptor implements NestInterceptor {
  public async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<any> {
    const ctx = GqlExecutionContext.create(context)
    const headers = ctx.getContext().req.headers
    const type: string | undefined = headers[HEADER.TYPE]
    if (!type) {
      throw new BadRequestException()
    }

    return next.handle()
  }
}
