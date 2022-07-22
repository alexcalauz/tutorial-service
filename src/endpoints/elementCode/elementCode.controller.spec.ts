import { Test, TestingModule } from '@nestjs/testing';
import { ElementCodeController } from './elementCode.controller';

describe('TutorialController', () => {
  let controller: ElementCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElementCodeController],
    }).compile();

    controller = module.get<ElementCodeController>(ElementCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
