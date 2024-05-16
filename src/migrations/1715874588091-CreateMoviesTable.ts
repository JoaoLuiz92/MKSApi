import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMoviesTable implements MigrationInterface {
  name = 'CreateMoviesTable';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "movie" ("id" SERIAL NOT NULL, 
      "title" character varying NOT NULL, 
      "description" character varying NOT NULL, 
      "director" character varying NOT NULL, 
      "releaseDate" character varying NOT NULL,
       CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "movie"`);
  }
}
