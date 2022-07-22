import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';
import { SharedModule } from './shared/shared.module';
import { ValidationPipe } from '@nestjs/common';
// import { BadRequestExceptionFilter } from './exceptionFilters/badRequestException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      disableErrorMessages:
        process.env.NODE_ENV === 'PRODUCTION' ? true : false,
    }),
  );

  // app.useGlobalFilters(new BadRequestExceptionFilter());
  useContainer(app.select(SharedModule), { fallbackOnErrors: true });
  await app.listen(3000);
}
bootstrap();
