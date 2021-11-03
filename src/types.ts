export interface Todo {
  id: string;
  title: string;
  done: boolean;
  created_at: string;
  updated_at: string;
}

export interface TodoType {
  todo: Todo;
}

