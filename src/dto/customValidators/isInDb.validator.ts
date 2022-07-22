
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable, Catch, BadRequestException, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { getRepository } from 'typeorm';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsInDbConstraint implements ValidatorConstraintInterface {
  constructor() {}
  validate(value, args: ValidationArguments): Promise<boolean> {
    return new Promise((resolve, reject) => {

      const constraints = (args.constraints as any);
      const repository = getRepository(constraints.entity);
      const where = {};
      where[constraints.fieldName] = value;
      repository.findOne({ where }).then(response => {
        if (response) {
          resolve(true);
        } else {
          resolve(false);
        }
      }).catch(() => {
        reject()
      });
    })
  }
}

export function IsInDb(constraints: any, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints,
      validator: IsInDbConstraint,
    });
  };
}