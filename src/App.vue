<script setup lang="ts">
import AddTask from './components/AddTask.vue';
import TodoFilter from './components/TodoFilter.vue';
import TodoList from './components/TodoList.vue';
</script>

<template>
  <header>
    <h1 class="title">To do list</h1>
    <AddTask />
  </header>

  <TodoFilter />
  <main>
    <TodoList />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  padding-left: 40px;
}

.title {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 24px;
  line-height: 132%;
  letter-spacing: 0;
}
</style>
