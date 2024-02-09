import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('evangelist', function (table) {
    table.foreign('address_id').references('id').inTable('address');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('evangelist', function (table) {
    table.dropForeign(['address_id']);
  });
}
