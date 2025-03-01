import axios from "axios";

const API_URL = "http://localhost:3025/todos";

export interface Todo {
  _id: string;
  title: string;
  description: string;
  isDone: boolean;
}

export const getTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getTodo = async (id: string): Promise<Todo> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createTodo = async (
  title: string,
  description: string
): Promise<Todo> => {
  const response = await axios.post(API_URL, { title, description });
  return response.data;
};

export const updateTodo = async (
  id: string,
  title: string,
  description: string
): Promise<Todo> => {
  const response = await axios.patch(`${API_URL}/${id}`, {
    title,
    description,
  });
  return response.data;
};

export const toggleTodo = async (id: string): Promise<Todo> => {
  const response = await axios.patch(`${API_URL}/${id}/toggle`);
  return response.data;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
