import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformIntercepter } from './transform.interceptor';

async function bootstrap() {
  const logger = new Logger()
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalInterceptors(new TransformIntercepter())
  const port = process.env.PORT
  await app.listen(port);
  logger.log(`Application run port ${port}`)
}
bootstrap();
