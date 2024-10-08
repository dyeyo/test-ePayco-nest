import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Billetera virtual')
    .setDescription('Documentación de la API de billetara virtual')
    .setVersion('1.0')
    .addTag('Billetera virtual')  
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
