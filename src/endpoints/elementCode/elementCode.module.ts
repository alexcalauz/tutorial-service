import { Module } from '@nestjs/common';
import { ElementCodeService } from './elementCode.service';
import { ElementCodeController } from './elementCode.controller';

@Module({
  imports: [],
  controllers: [ElementCodeController],
  providers: [ElementCodeService],
})
export class ElementCodeModule {}
