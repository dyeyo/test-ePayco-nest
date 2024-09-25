import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletsModule } from './wallets/wallets.module';

@Module({
  imports: [WalletsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
