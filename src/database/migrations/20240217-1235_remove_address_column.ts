import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.table('evangelist', function (table) {
    table.dropColumn('address');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('visit', function (table) {
    table.string('address');
  });
}
