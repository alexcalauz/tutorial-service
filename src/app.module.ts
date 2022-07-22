import { Module, NestModule, MiddlewareConsumer, RequestMethod, NestMiddleware, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';
import { SharedModule } from './shared/shared.module';
import { TutorialModule } from './endpoints/tutorial/tutorial.module';
import { TutorialController } from './endpoints/tutorial/tutorial.controller';
import { TutorialService } from './endpoints/tutorial/tutorial.service';
import { AuthMiddleware } from './middleware/auth.middleware';
import { ElementCodeModule } from './endpoints/elementCode/elementCode.module';
import { ElementCodeService } from './endpoints/elementCode/elementCode.service';
import { ElementCodeController } from './endpoints/elementCode/elementCode.controller';
import { tutorialOdataProvider } from './providers/tutorialOdata.provider';
import { databaseProvider } from './providers/database.provider';
import { OdataMiddleware } from './middleware/odata.middleware';

@Module({
  imports: [
    SharedModule,
    RouterModule.register([
      {
        path: 'tutorial',
        module: TutorialModule,
      },
      {
        path: 'elementCode',
        module: ElementCodeModule,
      },
    ]),
  ],
  controllers: [TutorialController, ElementCodeController],
  providers: [AppService, TutorialService, ElementCodeService, ...tutorialOdataProvider, ...databaseProvider]
})

export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
    consumer.apply(OdataMiddleware).forRoutes({
      path: 'tutorial',
      method: RequestMethod.GET,
    },
    {
      path: 'elementCodes',
      method: RequestMethod.GET,
    });
  }
}

