import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {

  getShared() {
    return 'test';
  }

}
