import { TodoOutput, TodosApi } from "../api/todo";

const todosApi = new TodosApi(undefined, import.meta.env.VITE_API_BASE_URL);

export const getTodos = async (): Promise<TodoOutput[]> => {
  const response = await todosApi.findAll();
  return response.data;
};

export const getTodo = async (id: string): Promise<TodoOutput> => {
  const response = await todosApi.findOne({ id });
  return response.data;
};

export const createTodo = async (
  title: string,
  description: string
): Promise<TodoOutput> => {
  const response = await todosApi.create({
    createTodo: {
      title,
      description,
      isDone: false,
    },
  });
  return response.data;
};

export const updateTodo = async (
  id: string,
  title: string,
  description: string
): Promise<TodoOutput> => {
  const response = await todosApi.update({
    id,
    updateTodo: {
      title,
      description,
    },
  });
  return response.data;
};

export const toggleTodo = async (id: string): Promise<TodoOutput> => {
  const response = await todosApi.toggleStatus({ id });
  return response.data;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await todosApi._delete({ id });
};
