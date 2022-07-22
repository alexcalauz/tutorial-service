import { IsNotEmpty, IsNumber, IsEmpty, IsString, IsOptional, IsEnum } from 'class-validator';
import { IsInDb } from 'src/dto/customValidators/isInDb.validator';
import { TutorialEntity } from 'src/entities/tutorial.entity';
import { ElementCodeEntity } from 'src/entities/elementCode.entity';
import { PageCode } from 'src/shared/enums';

export class CreateTutorialDto {

  @IsEmpty({ message: 'Id should not be present' })
  id: number;

  @IsNotEmpty({ message: 'Missing element code' })
  @IsNumber({}, { message: 'Non number element code' })
  @IsInDb({ entity: ElementCodeEntity, fieldName: 'id'}, { message: 'Element code not found' })
  elementCode: number;

  @IsOptional()
  @IsNumber({}, { message: 'Non numeric order' })
  order: number;

  @IsNotEmpty({ message: 'Missing title' })
  @IsString({ message: 'Non string title' })
  title: string;

  @IsNotEmpty({ message: 'Missing description' })
  @IsString({ message: 'Non string description' })
  description: string;

  @IsNotEmpty({ message: 'Missing page code' })
  @IsString({ message: 'Non string page code' })
  @IsEnum(PageCode)
  pageCode: string;
}

export class BulkUpdateTutorialDto {

  @IsNotEmpty({ message: 'Id should be present' })
  @IsNumber({}, { message: 'Non numeric id' })
  id: number;

  @IsOptional()
  @IsNumber({}, { message: 'Non number element code' })
  @IsInDb({ entity: ElementCodeEntity, fieldName: 'id'}, { message: 'Element code not found' })
  elementCode: number;

  @IsOptional()
  @IsNumber({}, { message: 'Non numeric order' })
  order: number;

  @IsOptional()
  @IsString({ message: 'Non string title' })
  title: string;

  @IsOptional()
  @IsString({ message: 'Non string description' })
  description: string;

  @IsOptional()
  @IsString({ message: 'Non string page code' })
  @IsEnum(PageCode)
  pageCode: string;

}

export class UpdateTutorialDto {

  @IsEmpty({ message: 'Id should not be present' })
  id: number;

  @IsOptional()
  @IsNumber({}, { message: 'Non number element code' })
  @IsInDb({ entity: ElementCodeEntity, fieldName: 'id'}, { message: 'Element code not found' })
  elementCode: number;

  @IsOptional()
  @IsNumber({}, { message: 'Non numeric order' })
  order: number;

  @IsOptional()
  @IsString({ message: 'Non string title' })
  title: string;

  @IsOptional()
  @IsString({ message: 'Non string description' })
  description: string;

  @IsOptional()
  @IsString({ message: 'Non string page code' })
  @IsEnum(PageCode)
  pageCode: string;
}

export class DeleteTutorialDto {
  @IsNumber({}, { message: 'Id should be a number' })
  @IsNotEmpty({ message: 'Id should be present' })
  @IsInDb({ entity: TutorialEntity, fieldName: 'id'}, { message: 'Element code not found' })
  id: number;

}
