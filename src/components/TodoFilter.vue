<template>
  <div class="todo-filter">
    <label for="filter-input" class="text-filter">
      <IconLens />
      <input
        id="filter-input"
        aria-label="Поиск по задачам"
        class="filter-input text"
        autocomplete="off"
        type="text"
        v-model="stores.filterText"
        placeholder="Поиск по задачам..."
        @input="stores.filterText = ($event.target as HTMLInputElement)?.value"
    </label>
    <div class="sort-options">
      <label for="sort-select">Сортировать по:</label>
      <select id="sort-select" v-model="stores.sortBy" class="text">
        <option value="none">Не сортировать</option>
        <option v-for="option in sortOptions" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodos } from '@/stores/todos';
import IconLens from './icons/IconLens.vue';

const stores = useTodos();

const sortOptions = [
  { label: 'Описание', value: 'text' },
  { label: 'Статус', value: 'status' },
  { label: 'Дата', value: 'date' },
];
</script>

<style scoped>
.sort-options {
  display: flex;
  align-items: center;
  gap: 8px;
}

#sort-select {
  border: none;
  appearance: none;
  background-image: url('/arrow.svg');
  background-repeat: no-repeat;
  background-position: right 5px center;
  background-size: 14px 8px;
  padding-right: 25px;
}
.todo-filter {
  display: flex;
  gap: 16px;
  justify-content: space-between;
  padding-left: 40px;
}
.filter-input {
  width: 100%;
  padding: 8px;
  border: none;
}
.filter-input::placeholder {
  color: var(--color-gray);
}
.text-filter {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-grow: 1;
}
</style>
