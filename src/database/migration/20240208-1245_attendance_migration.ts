import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('attendance', function (table) {
    table.uuid('id').primary();
    table.uuid('student_id');
    table.uuid('student_address_id');
    table.foreign('student_id').references('student.id');
    table.foreign('student_address_id').references('address.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('attendance');
}
