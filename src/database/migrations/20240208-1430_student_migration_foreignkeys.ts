import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('student', function (table) {
    table.foreign('address_id').references('id').inTable('address');
    table.foreign('level_id').references('id').inTable('level');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('student', function (table) {
    table.dropForeign(['address_id']);
    table.dropForeign(['level_id']);
  });
}
