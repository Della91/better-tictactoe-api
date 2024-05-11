import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { UpdateInfoRequest as UpdateInfoRequestInterface } from '../interfaces';

export class UpdateInfoRequest implements UpdateInfoRequestInterface {
  @IsOptional()
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  name?: string;
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(150)
  age?: number;
  @IsOptional()
  @IsBoolean()
  married?: boolean;
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dateBirth?: Date;
}
