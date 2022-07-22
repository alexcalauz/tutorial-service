import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { createQueryBuilder, getRepository } from 'typeorm';
import { TutorialEntity } from 'src/entities/tutorial.entity';

@Injectable()
export class TutorialService {

  constructor() {
  }

  get(query) {
    // query will be used for filtering. For now .. not used
    return Observable.create(observer => {

      const tutorials = createQueryBuilder(
        'tutorial'
      )
        .select([
          't.id',
          't.description',
          't.title',
          't.order',
          't.pageCode',
          't.createdAt',
          't.updatedAt',
          'ec.id',
          'ec.code',
          'ec.pageCode',
          'ec.description',
        ])
        .from(TutorialEntity, 't')
        .leftJoin('t.elementCode', 'ec')
        .orderBy('t.id')
        .getMany();

      tutorials.then((data) => {
        observer.next(data);
      }).catch(err => {
        observer.error({ status: 500, body: err })
      });
    });

  }

  getById(id: number) {

    return Observable.create(observer => {

      const repository = getRepository(TutorialEntity);
      repository.findOne({ where: { id } }).then(response => {
        if (response) {
          observer.next(response)
        } else {
          observer.error({ status: 404, body: "" })
        }
      }).catch((err) => {
        observer.error({ status: 500, body: err })
      });

    });
  }

  create(payload) {

    return Observable.create(observer => {

      TutorialEntity.create(payload).save().then(response => {
        observer.next(response)
      }).catch((err) => {
        observer.error({ status: 500, body: err })
      });

    });

  }

  update(id, payload) {

    return Observable.create(observer => {

      const repository = getRepository(TutorialEntity);
      repository.update({ id }, payload).then(response => {
        observer.next(response)
      }).catch((err) => {
        observer.error({ status: 500, body: err })
      });

    });
  }

  bulkInsert(payload) {

    return Observable.create(observer => {

      TutorialEntity.insert(payload).then(response => {
        observer.next(response)
      }).catch((err) => {
        observer.error({ status: 500, body: err })
      });

    });
  }

  bulkUpdate(payload) {
    //in progress
    return Observable.create();
  }

  delete(payload) {

    return Observable.create(observer => {

      TutorialEntity.delete({ id: payload.id }).then(response => {
        observer.next(response)
      }).catch((err) => {
        observer.error({ status: 500, body: err })
      });

    });
  }

}
