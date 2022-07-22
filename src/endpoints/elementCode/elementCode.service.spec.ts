import { Test, TestingModule } from '@nestjs/testing';
import { ElementCodeService } from './elementCode.service';

describe('ElementCodeService', () => {
  let service: ElementCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElementCodeService],
    }).compile();

    service = module.get<ElementCodeService>(ElementCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
