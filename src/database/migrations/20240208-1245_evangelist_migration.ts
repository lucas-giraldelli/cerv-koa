import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('evangelist', function (table) {
    table.uuid('id').primary();
    table.string('name');
    table.date('date_of_birth');
    table.string('contact');
    table.string('email');
    table.string('address');
    table.boolean('teij_course');
    table.boolean('local_class');
    table.boolean('eee_student');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('evangelist');
}
