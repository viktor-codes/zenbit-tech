import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [
    UsersModule,
    AuthModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
