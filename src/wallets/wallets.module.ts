import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; 
import { UserService } from './services/user/user.service';
import { WalletService } from './services/wallet/wallet.service';
import { UsersController } from './controller/users/users.controller';
import { WalletController } from './controller/wallet/wallet.controller';

@Module({
  imports: [WalletsModule,HttpModule],
  controllers: [WalletController, UsersController],
  providers: [WalletService, UserService],
})
export class WalletsModule {}
