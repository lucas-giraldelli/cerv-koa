import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('level', function (table) {
    table.foreign('evangelist_id').references('id').inTable('evangelist');
    table.foreign('attendance_id').references('id').inTable('attendance');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('level', function (table) {
    table.dropForeign(['evangelist_id']);
    table.dropForeign(['attendance_id']);
  });
}
