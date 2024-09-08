<template>
  <main>
    <TaskInput @onAddTask="addTask"></TaskInput>
    <ul class="task-list my-list">
      <li v-for="item in taskList" :key="item.id">
        <TaskCard @onRemove="removeTask(item.id)" @onDone="setDoneTask(item.id)" :model="item"></TaskCard>
      </li>
    </ul>
  </main>
</template>

<script setup>
import TaskInput from './components/TaskInput.vue'
import TaskCard from './components/TaskCard.vue'
import { useTaskStore } from '/src/taskStore.js'

const taskStore = useTaskStore()

const taskList = taskStore.taskList
const addTask = ({ title, description }) => taskStore.addTask(title, description)
const setDoneTask = (id) => taskStore.setDoneTask(id)
const removeTask = (id) => taskStore.removeTask(id)
</script>


<style scoped>
.task-list {
  list-style: none;
}
</style>