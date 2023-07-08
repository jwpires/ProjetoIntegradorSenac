import { ValidationPipe } from '@nestjs/common';
import { Module } from '@nestjs/common/decorators';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
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

  app.enableCors({
    origin: '*', // Defina a origem permitida (ou '*' para permitir todas as origens)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Defina os métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Defina os cabeçalhos permitidos
    preflightContinue: false,
  });

  useContainer(app.select(AppModule),{fallbackOnErrors:true});
  
  await app.listen(3000);
}
bootstrap();
