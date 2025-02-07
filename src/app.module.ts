import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { UsersModule } from './users/users.module';
import { ChatMessageModule } from './chat-message/chat-message.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [ChatModule, ChatMessageModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
