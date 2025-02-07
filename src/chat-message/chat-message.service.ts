import { Injectable } from '@nestjs/common';
import { CreateChatMessageDto } from './dto/create-chat-message.dto';
import { UpdateChatMessageDto } from './dto/update-chat-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatMessage } from './entities/chat-message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChatMessageService {
  constructor(
    @InjectRepository(ChatMessage)
    private readonly chatMessageRepository: Repository<ChatMessage>,
  ) {}

  async create(createChatMessageDto: CreateChatMessageDto) {
    const newMessage = this.chatMessageRepository.create(createChatMessageDto);
    return await this.chatMessageRepository.save(newMessage);
  }

  async findAll() {
    return await this.chatMessageRepository.find();
  }

  async findOne(id: string) {
    const message = await this.chatMessageRepository.findOne({ where: { id } });
    if (!message) {
      throw new Error(`ChatMessage with ID ${id} not found`);
    }
    return message;
  }

  async update(id: string, updateChatMessageDto: UpdateChatMessageDto) {
    await this.findOne(id);
    await this.chatMessageRepository.update(id, updateChatMessageDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const message = await this.findOne(id);
    await this.chatMessageRepository.remove(message);
  }
}
