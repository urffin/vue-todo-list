<template>
  <button class="add-task-modal" aria-label="Добавить задачу" @click="open = true">
    <IconPlus />
  </button>

  <Teleport to="body">
    <div class="modal" v-if="open" @click.self="open = false">
      <form @submit.prevent="addTask" class="add-task-form">
        <div class="modal-header">
          <h2 class="title">Создать новую задачу</h2>
          <button type="button" aria-label="Закрыть" class="close-button" @click="close">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="22" height="22" rx="5" fill="#314B99" />
              <path
                d="M8 8L11 11M14 14L11 11M11 11L14 8M11 11L8 14"
                stroke="white"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <label for="new-task">Описание</label>
          <input
            id="new-task"
            v-model="newTask"
            type="text"
            class="text"
            placeholder="Введите описание"
            autocomplete="off"
            required
            autofocus
          />
        </div>
        <div class="modal-footer">
          <button
            type="submit"
            aria-label="Создать"
            :disabled="newTask.trim().length == 0"
            class="add-btn text"
          >
            Создать
          </button>
        </div>
      </form>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, Teleport } from 'vue';
import IconPlus from './icons/IconPlus.vue';
import { useTodos } from '@/stores/todos';
const newTask = ref('');
const open = ref(false);

const store = useTodos();

function addTask() {
  const task = newTask.value.trim();
  if (task) {
    store.addTodo(task);
    close();
  }
}

function close() {
  open.value = false;
  newTask.value = '';
}
</script>

<style scoped>
.title {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 18px;
  line-height: 132%;
  letter-spacing: 0%;
}
.modal {
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.add-task-modal {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
.add-task-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 1px solid var(--color-modal-border);
  padding: 40px;
  box-shadow: 0px 25px 50px -12px #00000040;
  border-radius: 6px;
  min-width: 400px;
}
.modal-body {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

#new-task {
  width: 100%;
  padding: 11px 16px;
  border: 1px solid var(--color-modal-border);
  border-radius: 8px;
}
.close-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
.modal-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.add-btn {
  background-color: var(--color-modal-button-bg);
  color: var(--color-modal-button);
  padding: 12px 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
}

.add-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
