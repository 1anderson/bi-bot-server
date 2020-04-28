import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class CreateForeignKeyUserInPlayerScore1587524534558 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn("player_score", new TableColumn({
            name: "userid",
            type: "varchar(18)"
        }));
        await queryRunner.createForeignKey("player_score", new TableForeignKey({
            columnNames: ["userid"],
            referencedColumnNames: ["steamID"],
            referencedTableName: "user",
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn("player_score", "userid");
    }

}
