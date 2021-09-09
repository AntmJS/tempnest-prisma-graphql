import { HideField, ObjectType } from '@nestjs/graphql'
import { Gender } from '@/shared/enum'

@ObjectType()
export class User {
  nickName?: string | null
  gender?: Gender | null
  avatarUrl?: string | null
  @HideField()
  id?: bigint | null
}
