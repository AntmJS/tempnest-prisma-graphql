import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { ERROR } from '@/shared/constants'
import { UpdateUserInput } from '@/resolvers/user/index.input'
import { PrismaService } from './prisma.service'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findUser(userId: bigint) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (user) {
      return user
    }
    throw new InternalServerErrorException({
      ...ERROR.NOTFOUND_USER,
      error: 'no user',
    })
  }

  async updateUser(id: bigint, data: UpdateUserInput) {
    const user = await this.prisma.user.update({
      data: data,
      where: {
        id: id,
      },
    })
    return user
  }
}
