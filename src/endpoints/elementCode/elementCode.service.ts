import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { createQueryBuilder } from 'typeorm';
import { ElementCodeEntity } from 'src/entities/elementCode.entity';

@Injectable()
export class ElementCodeService {

  constructor() {
  }

  get(query) {
    // query will be used for filtering. For now .. not used
    return Observable.create(observer => {

      const elementCodes = createQueryBuilder(
        'elementCode'
      )
        .select([
          'e.id',
          'e.code',
          'e.pageCode',
          'e.description',
        ])
        .from(ElementCodeEntity, 'e')
        .orderBy('e.id DESC')
        .getMany();

      elementCodes.then((data) => {
        observer.next(data);
      }).catch(err => {
        observer.error({ status: 500, body: err })
      });

    });

  }

  getByPageCode(pageCode: string) {
    // query will be used for filtering. For now .. not used
    return Observable.create(observer => {

      const elementCodes = createQueryBuilder(
        'elementCode'
      )
        .select([
          'e.id',
          'e.code',
          'e.pageCode',
          'e.description',
        ])
        .from(ElementCodeEntity, 'e')
        .where(`e.pageCode = '${pageCode}'`)
        .orderBy('e.id')
        .getMany();

      elementCodes.then((data) => {
        observer.next(data);
      }).catch(err => {
        observer.error({ status: 500, body: err })
      });
    })
  }

}
