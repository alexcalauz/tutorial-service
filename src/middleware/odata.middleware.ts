import { NestMiddleware, Inject, BadRequestException } from "@nestjs/common";
import { TutorialEntity } from "src/entities/tutorial.entity";
import { Repository } from "typeorm";
import { odataQuery } from "odata-v4-typeorm";
import { Request, Response, NextFunction } from 'express';

export class OdataMiddleware implements NestMiddleware {

  constructor(
    @Inject('TUTORIAL_REPOSITORY') private readonly tuturialRepository: Repository<TutorialEntity>
  ) {}

  use(req: Request, res: Response, next: NextFunction) {
    const settings = {
      logger: {
        error: () => {
          throw new Error('EEEE');
        }
      }
    }
    odataQuery(this.tuturialRepository, settings)(req, res, next).catch(() => {
      return res.status(400).json({
        status: 400,
        body: {
          message: ['Invalid oData params'],
        }
      });
    });
  }

}