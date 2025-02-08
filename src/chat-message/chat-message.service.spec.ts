import { Test, TestingModule } from '@nestjs/testing';
import { ChatMessageService } from './chat-message.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ChatMessage } from './entities/chat-message.entity';
import { Repository } from 'typeorm';

describe('ChatMessageService', () => {
  let service: ChatMessageService;
  let repository: Repository<ChatMessage>;

  const mockChatMessageRepository = {
    find: jest.fn().mockResolvedValue([]),
    findOne: jest.fn(),
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest
      .fn()
      .mockImplementation((message) =>
        Promise.resolve({ id: 'uuid', ...message }),
      ),
    update: jest.fn().mockResolvedValue({}),
    remove: jest.fn().mockResolvedValue({}),
  };

  beforeEach(async () => {
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
    repository = module.get<Repository<ChatMessage>>(
      getRepositoryToken(ChatMessage),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a chat message', async () => {
    const dto = { chatId: 'chat_uuid', userId: 'user_uuid', message: 'Hello!' };
    await expect(service.create(dto)).resolves.toEqual({ id: 'uuid', ...dto });
    expect(repository.create).toHaveBeenCalledWith(dto);
    expect(repository.save).toHaveBeenCalled();
  });

  it('should return all chat messages', async () => {
    await expect(service.findAll()).resolves.toEqual([]);
    expect(repository.find).toHaveBeenCalled();
  });

  it('should return a chat message by id', async () => {
    const chatMessage = {
      id: 'uuid',
      chatId: 'chat_uuid',
      userId: 'user_uuid',
      message: 'Hello!',
    };
    repository.findOne = jest.fn().mockResolvedValue(chatMessage);

    await expect(service.findOne('uuid')).resolves.toEqual(chatMessage);
    expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 'uuid' } });
  });

  it('should throw an error if chat message not found', async () => {
    repository.findOne = jest.fn().mockResolvedValue(null);
    await expect(service.findOne('invalid-uuid')).rejects.toThrow(
      'ChatMessage with ID invalid-uuid not found',
    );
  });

  it('should update a chat message', async () => {
    const dto = { message: 'Updated message' };
    repository.findOne = jest
      .fn()
      .mockResolvedValue({ id: 'uuid', message: 'Old message' });
    repository.update = jest.fn().mockResolvedValue({});

    await expect(service.update('uuid', dto)).resolves.toEqual({
      id: 'uuid',
      message: 'Old message',
    });
    expect(repository.update).toHaveBeenCalledWith('uuid', dto);
  });

  it('should remove a chat message', async () => {
    const chatMessage = {
      id: 'uuid',
      chatId: 'chat_uuid',
      userId: 'user_uuid',
      message: 'Hello!',
    };
    repository.findOne = jest.fn().mockResolvedValue(chatMessage);

    await expect(service.remove('uuid')).resolves.toBeUndefined();
    expect(repository.remove).toHaveBeenCalledWith(chatMessage);
  });
});
