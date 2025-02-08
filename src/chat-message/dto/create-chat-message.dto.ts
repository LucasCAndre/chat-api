import { IsUUID, IsString, IsOptional } from 'class-validator';

export class CreateChatMessageDto {
  @IsUUID()
  chatId: string;

  @IsUUID()
  userId: string;

  @IsString()
  message: string;

  @IsUUID()
  @IsOptional()
  replyTo?: string;
}
