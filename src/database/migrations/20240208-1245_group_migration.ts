import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('group', function (table) {
    table.increments('id').primary();
    table.string('title');
    table.string('description', 500);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('group');
}
