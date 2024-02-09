import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('student_visit_bridge', function (table) {
    table.uuid('visit_id').primary();
    table.uuid('student_id');
    table.uuid('student_address_id');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('student_visit_bridge');
}
