import { MigrationInterface, QueryRunner } from "typeorm"

export class User implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE user(
              id             serial,
              name           VARCHAR(250)  UNIQUE,
              email          VARCHAR(250)  UNIQUE,
              password       VARCHAR(250) 
           );`,
        )
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE user;`,
        ) // reverts things made in "up" method
    }
}