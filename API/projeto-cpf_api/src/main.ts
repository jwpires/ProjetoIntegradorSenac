import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ //validação paralela pela API
      transform: true, // irá capturar o Json e transformar em um objeto
      whitelist: true, // Só irá aceitar o que foi especificado no objeto com as informações @IsString, @IsEmail e outros.
      forbidNonWhitelisted: true, //Retornará o erro ao usuário, caso não tenha sido respeitada a configuração dos tipos de inserção via API
    })
  );
  await app.listen(3000);
}
bootstrap();
