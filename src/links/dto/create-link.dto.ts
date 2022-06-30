import { IsNotEmpty, IsString, IsOptional, IsUrl } from 'class-validator';

export class CreateLinkDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsUrl()
  url: string;
}
