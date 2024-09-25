import { Module } from '@nestjs/common';
import { WalletsModule } from './wallets/wallets.module';

@Module({
  imports: [WalletsModule],
  controllers: [],
})
export class AppModule {}
