<template>
  <div class="task-input my-list">
    <input v-model="title" placeholder="Title" type="text">
    <input v-model="description" placeholder="Description" type="text">
    <button @click="onAddTask">Add task</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const title = ref('')
const description = ref('')

const emit = defineEmits(['onAddTask'])

const onAddTask = () => {
  if (title.value === '' || description.value === '') {
    alert('Добавь больше информации!')
    return
  }
  emit('onAddTask', { title: title.value, description: description.value })
}
</script>

<style scoped>
.task-input {
  margin: 10px 0;
}
</style>
<style scoped>
.task-input {
  margin: 10px 0;
}
</style>