import {MigrationInterface, QueryRunner, TableForeignKey, TableColumn} from "typeorm";

export class CreateForeignKeyInTeamInUser1587523817371 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn("user", new TableColumn({
          name: "teamid",
          type: "int"
        }));
        await queryRunner.createForeignKey("user", new TableForeignKey({
          columnNames: ["teamid"],
          referencedColumnNames: ["id"],
          referencedTableName: "team",
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn("user", "teamid");
    }

}
