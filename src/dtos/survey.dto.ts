import { IsNumber, IsString } from 'class-validator';

export class SurveyDto {
  @IsString()
  name: string;

  @IsString()
  gender: string;

  @IsString()
  job: string;

  @IsString()
  houseType: string;

  @IsString()
  wishContact: string;

  @IsString()
  phone: string;

  @IsNumber()
  buyAmountToPay: number;

  @IsNumber()
  monthAmountToPay: number;

  @IsNumber()
  startAmountToPay: number;

  @IsString()
  wishOwnHouse: string;
}
