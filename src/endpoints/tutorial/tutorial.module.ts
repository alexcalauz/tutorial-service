import { Module } from '@nestjs/common';
import { TutorialService } from './tutorial.service';
import { SharedModule } from 'src/shared/shared.module';
import { TutorialController } from './tutorial.controller';

@Module({
  imports: [],
  controllers: [TutorialController],
  providers: [TutorialService],
})
export class TutorialModule {}
