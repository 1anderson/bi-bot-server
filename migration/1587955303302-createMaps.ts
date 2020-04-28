import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateMaps1587955303302 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        queryRunner.query(`INSERT INTO map (name) VALUES ('mirage'),('dust'),('inferno'),('nuke'),('train'),('overpass'),('cache'),('vertigo');`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        queryRunner.query(`DELETE FROM map;`)
    }

}
