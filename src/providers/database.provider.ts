import { createConnection } from 'typeorm';
import { TutorialEntity } from 'src/entities/tutorial.entity';
import { ElementCodeEntity } from 'src/entities/elementCode.entity'
import { ConnectionConfig } from 'src/config';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      ...ConnectionConfig,
      type: 'mysql',
      entities: [TutorialEntity, ElementCodeEntity],
      synchronize: true,
    }),
  },
];
