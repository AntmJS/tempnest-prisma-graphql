import {
  Catch,
  ArgumentsHost, // 获取客户端参数
  HttpException,
} from '@nestjs/common'
import { GqlExceptionFilter, GqlArgumentsHost } from '@nestjs/graphql'
import { Logger } from 'winston'

@Catch(HttpException)
export class GraphQLExceptionFilter implements GqlExceptionFilter {
  constructor(private readonly logger: Logger) {
    this.logger = logger
  }

  public catch(exception: HttpException, host: ArgumentsHost) {
    const res = exception.getResponse() as any
    if (exception.getStatus() === 500) {
      this.logger.error(
        `
  httpName: ${exception.name},
  httpStatus: ${exception.getStatus()},
  httpMessage: ${exception.message},
  bizCode: ${res['code']},
  bizMessage: ${res['msg']},
  bizError: ${res['error']},
  stack: ${exception.stack}
  `,
      )
    } else {
      this.logger.error(
        `
  httpName: ${exception.name},
  httpStatus: ${exception.getStatus()},
  httpMessage: ${exception.message},
  bizCode: ${res['statusCode']},
  bizMessage: ${res['message']},
  stack: ${exception.stack}
  `,
      )
    }

    GqlArgumentsHost.create(host)
    return exception
  }
}
