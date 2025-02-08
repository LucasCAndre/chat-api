import { Test, TestingModule } from '@nestjs/testing';
import { ChatMessageController } from './chat-message.controller';
import { ChatMessageService } from './chat-message.service';
import { CreateChatMessageDto } from './dto/create-chat-message.dto';
import { UpdateChatMessageDto } from './dto/update-chat-message.dto';

describe('ChatMessageController', () => {
  let controller: ChatMessageController;
  let service: ChatMessageService;

  const mockChatMessageService = {
    create: jest.fn((dto) => ({ id: '1', ...dto })),
    findAll: jest.fn(() => [{ id: '1', message: 'Hello' }]),
    findOne: jest.fn((id) => ({ id, message: 'Hello' })),
    update: jest.fn((id, dto) => ({ id, ...dto })),
    remove: jest.fn((id) => ({ id })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatMessageController],
      providers: [
        {
          provide: ChatMessageService,
          useValue: mockChatMessageService,
        },
      ],
    }).compile();

    controller = module.get<ChatMessageController>(ChatMessageController);
    service = module.get<ChatMessageService>(ChatMessageService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a message', async () => {
    const dto: CreateChatMessageDto = {
      chatId: 'chat_uuid',
      userId: 'user_uui',
      message: 'Hello',
    };
    expect(await controller.create(dto)).toEqual({ id: '1', ...dto });
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('should return all messages', async () => {
    expect(await controller.findAll()).toEqual([{ id: '1', message: 'Hello' }]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a single message', async () => {
    expect(await controller.findOne('1')).toEqual({
      id: '1',
      message: 'Hello',
    });
    expect(service.findOne).toHaveBeenCalledWith('1');
  });

  it('should update a message', async () => {
    const dto: UpdateChatMessageDto = { message: 'Updated message' };
    expect(await controller.update('1', dto)).toEqual({ id: '1', ...dto });
    expect(service.update).toHaveBeenCalledWith('1', dto);
  });

  it('should remove a message', async () => {
    expect(await controller.remove('1')).toEqual({ id: '1' });
    expect(service.remove).toHaveBeenCalledWith('1');
  });
});
