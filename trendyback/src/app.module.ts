import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './modules/products/product';
import { UserModule } from './modules/users/user';
import { OrderModule } from './modules/orders/order';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI || ''),
    ProductModule,
    UserModule,
    OrderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
