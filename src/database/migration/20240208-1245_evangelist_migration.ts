import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('evangelist', function (table) {
    table.uuid('id').primary();
    table.string('name');
    table.string('date_of_birth');
    table.string('contact');
    table.string('email');
    table.string('address');
    table.tinyint('teij_course');
    table.tinyint('class_location');
    table.tinyint('eee_student');
    table.uuid('address_id').unique();
    table.integer('group_id').unique();
    table.integer('course_id').unique();
    table.foreign('address_id').references('address.id');
    table.foreign('group_id').references('group.id');
    table.foreign('course_id').references('course.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('evangelist');
}
