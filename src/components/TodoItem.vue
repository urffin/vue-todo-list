<script setup lang="ts">
import { defineProps } from 'vue';
import type { Todo } from '@/stores/todos';
import { computed } from 'vue';
import IconStatus from './icons/IconStatus.vue';

const props = defineProps<{
  task: Todo;
}>();

const emit = defineEmits<{
  (e: 'update:task', task: Todo): void;
}>();

const formattedDate = computed(() => {
  return props.task.date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
});

const formattedStatus = computed(() => {
  return props.task.isFinished ? 'Выполнено' : 'В работе';
});

function finishTask() {
  emit('update:task', props.task);
}
</script>
<template>
  <tr>
    <td class="action">
      <button class="btn" @click="finishTask"><IconStatus :is-finished="task.isFinished" /></button>
    </td>
    <td>{{ task.text }}</td>
    <td :class="task.isFinished ? 'done' : 'inwork'">{{ formattedStatus }}</td>
    <td>{{ formattedDate }}</td>
  </tr>
</template>
<style lang="css" scoped>
.btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
.action {
  padding: 20px 20px 0 40px;
  text-align: right;
}
.done {
  color: var(--color-text-accent);
}
.inwork {
  color: var(--color-text-secondary);
}
td {
  padding: 20px;
}
tr:not(:last-child) {
  border-bottom: 1px solid var(--color-light-gray);
}
tr:hover {
  background-color: var(--color-background-hover);
  box-shadow: 0px 4px 4px 0px #00000040;
}
</style>
