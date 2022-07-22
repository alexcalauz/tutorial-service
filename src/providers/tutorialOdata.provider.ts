import { Connection } from 'typeorm';
import { TutorialEntity } from 'src/entities/tutorial.entity';

export const tutorialOdataProvider = [
  {
    provide: 'TUTORIAL_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(TutorialEntity),
    inject: ['DATABASE_CONNECTION'],
  }
];