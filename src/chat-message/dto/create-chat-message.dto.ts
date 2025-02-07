import { IsUUID, IsString, IsOptional } from 'class-validator';

export class CreateChatMessageDto {
  @IsUUID()
  chat_id: string;

  @IsUUID()
  user_id: string;

  @IsString()
  message: string;

  @IsUUID()
  @IsOptional()
  reply_to?: string;
}
