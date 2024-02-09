import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('level', function (table) {
    table.uuid('id').primary();
    table.integer('number');
    table.string('class');
    table.uuid('evangelist_id');
    table.uuid('attendance_id');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('level');
}
