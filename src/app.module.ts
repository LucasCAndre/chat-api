import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { ChatMessageModule } from './chat-message/chat-message.module';

@Module({
  imports: [ChatModule, ChatMessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
