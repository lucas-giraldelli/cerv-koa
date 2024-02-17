import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.table('course', function (table) {
    table.string('type');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('course', function (table) {
    table.dropColumn('type');
  });
}
