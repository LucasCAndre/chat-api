import { Test, TestingModule } from '@nestjs/testing';
import { ChatMessageService } from './chat-message.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ChatMessage } from './entities/chat-message.entity';

describe('ChatMessageService', () => {
  let service: ChatMessageService;

  beforeEach(async () => {
    const mockChatMessageRepository = {
      find: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChatMessageService,
        {
          provide: getRepositoryToken(ChatMessage),
          useValue: mockChatMessageRepository,
        },
      ],
    }).compile();

    service = module.get<ChatMessageService>(ChatMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
