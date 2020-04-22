import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMatchTable1587520014001 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
          name: "match",
          columns: [
              {
                name: "id",
                type: "int",
                isPrimary: true
              },
              {
                name: "date",
                type: "date"
              }
          ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("match");
    }

}
