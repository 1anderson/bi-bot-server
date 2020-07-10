import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1587515991123 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment' 
                },
                {
                    name: "login",
                    type: "varchar(30)",
                    isUnique: true
                },
                {
                    name: "password",
                    type: "varchar(255)",
                },
                {
                    name: "email",
                    type: "varchar(255)",
                    isUnique: true
                },
                {
                    name: "activeAccount",
                    type: "boolean",
                    default: false
                },
                {
                    name: "passwordReminderToken",
                    type: "varchar(255)",
                    isNullable: true
                },
                {
                    name: "confirmEmailToken",
                    type: "varchar(255)",
                    isNullable: false
                },
                {
                    name: "steamID",
                    type: "varchar(18)",
                    isNullable: false,
                    isUnique: true
                }
            ]

        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("user", true);
    }

}
