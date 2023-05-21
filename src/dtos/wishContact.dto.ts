import { IsString } from 'class-validator';

export class WishContactDto {
  @IsString()
  wishContact: string;
}
