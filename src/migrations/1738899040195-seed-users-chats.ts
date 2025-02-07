import { MigrationInterface, QueryRunner } from 'typeorm';

export class seedsUsersAndChatsTables1738899040195
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const seedsChats = queryRunner.query(`INSERT INTO chats (id, title) VALUES
        ('42ab9d0b-5d70-455e-a7ad-080fe9b33f5f', 'Family Chat');`);

    const seedsUsers = queryRunner.query(`INSERT INTO users (chat_id) VALUES
        ('42ab9d0b-5d70-455e-a7ad-080fe9b33f5f');`);

    await seedsUsers;
    await seedsChats;
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(``);
    await queryRunner.query(``);
  }
}
