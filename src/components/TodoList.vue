<script setup lang="ts">
import type { Todo } from '@/stores/todos';
import TodoItem from './TodoItem.vue';
import { useTodos } from '@/stores/todos';

function updateTask(task: Todo) {
  task.isFinished = !task.isFinished;
}

const store = useTodos();

store.$subscribe(
  (mutation, state) => {
    console.log('Store updated:', mutation, state);
    // persist the whole state to the local storage whenever it changes
    localStorage.setItem('todos', JSON.stringify(state.todos));
  },
  { flush: 'sync' },
);
</script>
<template>
  <table class="todo-table">
    <thead>
      <tr>
        <th class="done"></th>
        <th class="description"><span class="header-text">Описание</span></th>
        <th class="status"><span class="header-text">Статус</span></th>
        <th class="date"><span class="header-text">Дата</span></th>
      </tr>
    </thead>
    <tbody>
      <TodoItem
        v-for="task in store.filteredTodos"
        :key="task.id"
        :task="task"
        @update:task="updateTask"
      ></TodoItem>
      <tr v-if="store.filteredTodos.length === 0">
        <td colspan="4" class="no-tasks">Нет задач</td>
      </tr>
    </tbody>
  </table>
</template>
<style lang="css" scoped>
.no-tasks {
  text-align: center;
  padding: 20px;
}
.todo-table {
  width: 100%;
  border-collapse: collapse;
}
th {
  padding-bottom: 16px;
  text-align: left;
}
.header-text {
  padding: 7px 20px;
  border-left: 1px solid var(--color-gray);
  display: inline-block;
}
.status,
.date {
  width: 150px;
}
.done {
  width: 80px;
}
</style>
