import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserCreation1580566312707 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                },
                {
                    name: "login",
                    type: "varchar(30)",
                },
                {
                    name: "password",
                    type: "varchar(255)",
                },
                {
                    name: "email",
                    type: "varchar(255)",
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
                }

                
            ]

        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("user", true);
    }

}
