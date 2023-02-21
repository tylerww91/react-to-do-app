import { checkError, client } from './client.js';

export async function getTodos() {
  const response = await client.from('todos').select();

  return checkError(response);
}

export async function completeTodo(id) {
  const response = await client.from('todos').update({ complete: true }).eq('id', id).single();

  return checkError(response);
}

export async function createTodo(description) {
  const response = await client.from('todos').insert({ description }).single();

  return checkError(response);
}
