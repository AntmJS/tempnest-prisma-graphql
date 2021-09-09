import { InputType } from '@nestjs/graphql'
import { IsString, IsOptional, IsEnum } from 'class-validator'
import { Gender } from '@/shared/enum'

@InputType()
export class UpdateUserInput {
  @IsOptional()
  @IsString({ message: '入参不符合要求' })
  nickName?: string

  @IsOptional()
  @IsEnum(Gender, { message: '入参不符合要求' })
  gender?: Gender

  @IsOptional()
  @IsString({ message: '入参不符合要求' })
  avatarUrl?: string
}
