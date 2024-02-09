import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('visit', function (table) {
    table.uuid('id').primary();
    table.date('visit_date');
    table.string('observation', 300);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('visit');
}
