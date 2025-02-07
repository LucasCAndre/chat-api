import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatMessageService } from './chat-message.service';
import { ChatMessageController } from './chat-message.controller';
import { ChatMessage } from './entities/chat-message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatMessage])], // Importando o TypeOrmModule para o repositório da entidade
  controllers: [ChatMessageController],
  providers: [ChatMessageService], // Certifique-se de que o serviço está listado nos providers
})
export class ChatMessageModule {}
