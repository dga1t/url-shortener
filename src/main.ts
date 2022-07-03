import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { application } from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(port);

  // ! #1
  // const configService = app.get<ConfigService>(ConfigService);
  // await app.listen(configService.get<number>('HTTP_SERVER_PORT'));

  // ! #3 - лучше было реализовать свой логгер или дополнить нестовский??
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
