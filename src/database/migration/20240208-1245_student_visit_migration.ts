import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('student_visit_bridge', function (table) {
    table.uuid('visit_id').primary();
    table.uuid('student_id');
    table.uuid('student_address_id');
    table.foreign('student_id').references('student.id');
    table.foreign('student_address_id').references('address.id');
    table.foreign('visit_id').references('visit.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('student_visit_bridge');
}
