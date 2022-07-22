import { Module } from '@nestjs/common';
import { IsInDbConstraint } from 'src/dto/customValidators/isInDb.validator';
import { SharedService } from './shared.service';

@Module({
  providers: [
    IsInDbConstraint,
    SharedService,
  ],
  exports: [SharedService],
})
export class SharedModule {}
