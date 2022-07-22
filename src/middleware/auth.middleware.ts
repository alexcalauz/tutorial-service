import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const isAuthenticated = await this.isUserAuthenticated(req);

    if (isAuthenticated) {
      next();
    } else {
      return res.status(403).json({ message: 'Unauthorized' });
    }
  }

  isUserAuthenticated(req) {
    return new Promise((resolve, reject) => {
      // check req
      resolve(true);
    })
  }
}
