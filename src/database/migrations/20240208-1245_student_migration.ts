import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('student', function (table) {
    table.uuid('id').primary();
    table.string('name');
    table.date('date_of_birth');
    table.string('guardian');
    table.string('guardian_tel');
    table.string('mother');
    table.string('father');
    table.string('guardian_relationship');
    table.string('allergy');
    table.uuid('address_id');
    table.uuid('level_id');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('student');
}
