import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.table('evangelist', function (table) {
    table.renameColumn('eee_student', 'efei_student');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('visit', function (table) {
    table.renameColumn('efei_student', 'eee_student');
  });
}
