import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('attendance', function (table) {
    table.uuid('id').primary();
    table.date('date');
    table.string('description', 500);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('attendance');
}
