import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('address', function (table) {
    table.uuid('id').primary();
    table.string('street');
    table.string('number');
    table.string('neighborhood');
    table.string('complement');
    table.string('zip_code');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('address');
}
