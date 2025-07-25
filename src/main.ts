import { NestFactory } from '@nestjs/core';
import { patchNestJsSwagger, ZodValidationPipe } from 'nestjs-zod';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors({
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization',
  });
  
  // Use Zod validation pipe instead of class-validator
  app.useGlobalPipes(new ZodValidationPipe());

  patchNestJsSwagger();
  const config = new DocumentBuilder()
    .setTitle(`Search Event API`)
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        in: 'header',
      }
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`api/${process.env.SWAGGER_SECRET}/docs`, app, document, {
    yamlDocumentUrl: `api/yaml`,
    swaggerOptions: {
      showCommonExtensions: true,
    }
  });
  const port = process.env.PORT || 2000;
  await app.listen(port);
}
bootstrap();