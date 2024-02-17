import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.table('evangelist', function (table) {
    table.renameColumn('efei_student', 'student');
    table.string('student_course_id');
    table.foreign('student_course_id').references('id').inTable('course');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('evangelist', function (table) {
    table.renameColumn('student', 'efei_student');
    table.dropColumn('student_course_id');
  });
}
