import { registerEnumType } from '@nestjs/graphql'
import { Gender } from '@/shared/enum'

registerEnumType(Gender, {
  name: 'Gender',
})
