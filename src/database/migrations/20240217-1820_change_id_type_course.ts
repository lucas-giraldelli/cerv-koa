import { Knex } from 'knex';

export async function up(knex: Knex) {
  await knex.schema.dropTableIfExists('course');
  await knex.schema.createTable('course', function (table) {
    table.string('id', 36).primary();
    table.string('name', 255);
    table.tinyint('type');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('course');
}
