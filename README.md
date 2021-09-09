<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## 步骤

prisma:generate:watch  监听prisma/schema.prisma文件生成prismaclient
start:dev 触发生成schema.graphql

## 异常过滤器

- BadRequestException
"errors": [
    {
      "message": "Bad Request",
      "extensions": {
        "code": "BAD_USER_INPUT",
        "response": {
          "statusCode": 400,
          "message": "Bad Request"
        }
      }
    }
  ]
- UnauthorizedException
"errors": [
    {
      "message": "Unauthorized",
      "extensions": {
        "code": "UNAUTHENTICATED",
        "response": {
          "statusCode": 401,
          "message": "Unauthorized"
        }
      }
    }
  ],
- NotFoundException
"errors": [
    {
      "message": "Not Found",
      "extensions": {
        "code": "404",
        "response": {
          "statusCode": 404,
          "message": "Not Found"
        }
      }
    }
  ],
- ForbiddenException
"errors": [
    {
      "message": "Forbidden",
      "extensions": {
        "code": "FORBIDDEN",
        "response": {
          "statusCode": 403,
          "message": "Forbidden"
        }
      }
    }
  ],
- NotAcceptableException
"errors": [
    {
      "message": "Not Acceptable",
      "extensions": {
        "code": "406",
        "response": {
          "statusCode": 406,
          "message": "Not Acceptable"
        }
      }
    }
  ],
- RequestTimeoutException
"errors": [
    {
      "message": "Request Timeout",
      "extensions": {
        "code": "408",
        "response": {
          "statusCode": 408,
          "message": "Request Timeout"
        }
      }
    }
  ],
- ConflictException
"errors": [
    {
      "message": "Conflict",
      "extensions": {
        "code": "409",
        "response": {
          "statusCode": 409,
          "message": "Conflict"
        }
      }
    }
  ],
- GoneException
"errors": [
    {
      "message": "Gone",
      "extensions": {
        "code": "410",
        "response": {
          "statusCode": 410,
          "message": "Gone"
        }
      }
    }
  ],
- HttpVersionNotSupportedException
"errors": [
    {
      "message": "HTTP Version Not Supported",
      "extensions": {
        "code": "505",
        "response": {
          "statusCode": 505,
          "message": "HTTP Version Not Supported"
        }
      }
    }
  ],
- PayloadTooLargeException
"errors": [
    {
      "message": "Payload Too Large",
      "extensions": {
        "code": "413",
        "response": {
          "statusCode": 413,
          "message": "Payload Too Large"
        }
      }
    }
  ],
- UnsupportedMediaTypeException
"errors": [
    {
      "message": "Unsupported Media Type",
      "extensions": {
        "code": "415",
        "response": {
          "statusCode": 415,
          "message": "Unsupported Media Type"
        }
      }
    }
  ],
- UnprocessableEntityException
"errors": [
    {
      "message": "Unprocessable Entity",
      "extensions": {
        "code": "422",
        "response": {
          "statusCode": 422,
          "message": "Unprocessable Entity"
        }
      }
    }
  ],
- InternalServerErrorException
"errors": [
    {
      "message": "Internal Server Error",
      "extensions": {
        "code": "500",
        "response": {
          "statusCode": 500,
          "message": "Internal Server Error"
        }
      }
    }
  ],
"errors": [
    {
      "message": "Internal Server Error Exception",
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR",
        "exception": {
          "response": {
            "code": "xxx",
            "msg": "mmm"
          },
          "status": 500,
          "name": "InternalServerErrorException"
          "message": "Internal Server Error Exception"
        }
      }
    }
  ],
- NotImplementedException
"errors": [
    {
      "message": "Not Implemented",
      "extensions": {
        "code": "501",
        "response": {
          "statusCode": 501,
          "message": "Not Implemented"
        }
      }
    }
  ],
- ImATeapotException
"errors": [
    {
      "message": "I'm a teapot",
      "extensions": {
        "code": "418",
        "response": {
          "statusCode": 418,
          "message": "I'm a teapot"
        }
      }
    }
  ],
- MethodNotAllowedException
"errors": [
    {
      "message": "Method Not Allowed",
      "extensions": {
        "code": "405",
        "response": {
          "statusCode": 405,
          "message": "Method Not Allowed"
        }
      }
    }
  ],
- BadGatewayException
"errors": [
    {
      "message": "Bad Gateway",
      "extensions": {
        "code": "502",
        "response": {
          "statusCode": 502,
          "message": "Bad Gateway"
        }
      }
    }
  ],
- ServiceUnavailableException
"errors": [
    {
      "message": "Service Unavailable",
      "extensions": {
        "code": "503",
        "response": {
          "statusCode": 503,
          "message": "Service Unavailable"
        }
      }
    }
  ],
- GatewayTimeoutException
"errors": [
    {
      "message": "Gateway Timeout",
      "extensions": {
        "code": "504",
        "response": {
          "statusCode": 504,
          "message": "Gateway Timeout"
        }
      }
    }
  ],
- PreconditionFailedException
"errors": [
    {
      "message": "Precondition Failed",
      "extensions": {
        "code": "412",
        "response": {
          "statusCode": 412,
          "message": "Precondition Failed"
        }
      }
    }
  ],
