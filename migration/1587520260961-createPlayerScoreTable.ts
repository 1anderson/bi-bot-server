import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePlayerScoreTable1587520260961 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
          name: 'player_score',
          columns: [
              {
                name: "id",
                type: "int",
                isPrimary: true
              },
              {
                name: "kill",
                type: "smallint"
              },
              {
                name: "death",
                type: "smallint"
              },
              {
                name: "hs",
                type: "smallint"
              },
              {
                name: "mvp",
                type: "smallint"
              },
              {
                name: "assist",
                type: "smallint"
              }
          ]
        }),true)
    }
    
    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('player_score');
    }

}
