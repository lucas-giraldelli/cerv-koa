import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('student_visit_bridge', function (table) {
    table.foreign('student_id').references('id').inTable('student');
    table.foreign('student_address_id').references('id').inTable('address');
    table.foreign('visit_id').references('id').inTable('visit');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('student_visit_bridge', function (table) {
    table.dropForeign(['student_id']);
    table.dropForeign(['student_address_id']);
    table.dropForeign(['visit_id']);
  });
}
