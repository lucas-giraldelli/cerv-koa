import { v4 as uuidv4 } from 'uuid';
import { Knex } from 'knex';

const courses = [
  { id: uuidv4(), name: 'Noções Básicas da Doutrina Espírita', type: 0 },
  { id: uuidv4(), name: 'Nosso Lar', type: 0 },
  { id: uuidv4(), name: 'Passe', type: 0 },
  { id: uuidv4(), name: 'Corrente Magnética', type: 0 },
  { id: uuidv4(), name: 'Vibração', type: 0 },
  { id: uuidv4(), name: 'Noções Básicas da Evangelização Infantil', type: 1 },
  { id: uuidv4(), name: 'Trabalhando com a Criança', type: 1 },
  { id: uuidv4(), name: 'Reforma Íntima', type: 1 },
  { id: uuidv4(), name: 'Deixar Vir a Mim as Criancinhas', type: 1 },
  { id: uuidv4(), name: 'A Criança Sob um Novo Prisma', type: 1 },
  { id: uuidv4(), name: 'Intermediário: Memórias de um Suicida', type: 1 },
  { id: uuidv4(), name: 'A Caminho da Luz', type: 1 },
  { id: uuidv4(), name: 'O Bom Samaritano Infantil', type: 1 },
  { id: uuidv4(), name: 'Direção', type: 1 },
  { id: uuidv4(), name: 'Libertação', type: 1 },
  { id: uuidv4(), name: 'Tormento da Obsessão', type: 1 }
];

export async function seed(knex: Knex): Promise<void> {
  await knex('course').del();
  await knex('course').insert(courses);
}
