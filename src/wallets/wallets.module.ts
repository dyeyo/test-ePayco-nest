import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; 
import { WalletController } from './controller/wallet.controller';
import { WalletService } from './services/wallet.service';
import { UserService } from './services/user/user.service';
import { UsersController } from './controller/users/users.controller';

@Module({
  imports: [WalletsModule,HttpModule],
  controllers: [WalletController, UsersController],
  providers: [WalletService, UserService],
})
export class WalletsModule {}
