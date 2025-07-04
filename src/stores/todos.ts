import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export interface Todo {
  text: string;
  id: number;
  isFinished: boolean;
  date: Date;
}

export const useTodos = defineStore('todos', () => {
  const todosFromStorage = localStorage.getItem('todos');
  const parsedTodos = todosFromStorage
    ? JSON.parse(todosFromStorage, (key, val) => (key == 'date' ? new Date(val) : val))
    : [];
  const todos = ref<Todo[]>(parsedTodos);
  const sortBy = ref<'none' | 'text' | 'status' | 'date'>('none');
  const nextId = ref(parsedTodos.length);
  const filterText = ref('');

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      text,
      id: nextId.value++,
      isFinished: false,
      date: new Date(),
    };
    todos.value.push(newTodo);
  };

  const sortedTodos = computed(() => {
    switch (sortBy.value) {
      case 'text':
        return [...todos.value].sort((a, b) => a.text.localeCompare(b.text));
      case 'status':
        return [...todos.value].sort((a, b) => Number(a.isFinished) - Number(b.isFinished));
      case 'date':
        return [...todos.value].sort((a, b) => a.date.getTime() - b.date.getTime());
      default:
        return todos.value;
    }
  });
  const filteredTodos = computed(() => {
    if (!filterText.value) {
      return sortedTodos.value;
    }
    // Filter todos based on the filterText
    // Convert both todo text and filterText to lowercase for case-insensitive comparison
    return sortedTodos.value.filter((todo) =>
      todo.text.toLowerCase().includes(filterText.value.toLowerCase()),
    );
  });

  return {
    todos,
    sortedTodos,
    filteredTodos,
    sortBy,
    filterText,
    addTodo,
  };
});
