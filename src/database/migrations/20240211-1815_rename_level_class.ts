import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.table('level', function (table) {
    table.renameColumn('class', 'class_name');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('visit', function (table) {
    table.renameColumn('class_name', 'class');
  });
}
