import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Users } from '../../users/entities/user.entity';
import { ChatMessage } from '../../chat-message/entities/chat-message.entity';

export enum ChatType {
  PRIVATE = 'private',
  GROUP = 'group',
}

@Entity('chats')
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: ChatType })
  type: ChatType;

  @Column({ type: 'varchar', nullable: true })
  name?: string;

  @OneToMany(() => Users, (user) => user.chat)
  users: Users[];

  @OneToMany(() => ChatMessage, (message) => message.chat)
  messages: ChatMessage[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
