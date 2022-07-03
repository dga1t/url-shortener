import { IsNotEmpty, IsString, IsOptional, IsUrl } from 'class-validator';

export class CreateLinkDto {
  @IsOptional()
  @IsString()
  // ! #7
  name: string;

  @IsNotEmpty()
  @IsUrl()
  url: string;
}
