import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class CreateForeignKeyMatchInPlayerScore1587524736256 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn("player_score", new TableColumn({
            name: "matchid",
            type: "int"
        }));
        await queryRunner.createForeignKey("player_score", new TableForeignKey({
            columnNames: ["matchid"],
            referencedColumnNames: ["id"],
            referencedTableName: "match",
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn("player_score", "matchid");
    }

}
