import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMapTable1587516070384 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: "map",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'     
          },
          {
            name: "name",
            type: "varchar(30)",
            isUnique: true
          }
        ]
      }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("map");
    }

}
