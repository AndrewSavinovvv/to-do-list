<template>
  <div class="task-card my-style">
    <div>
      <h4>{{ model.title }}</h4>
      <p>{{ model.description }}</p>
    </div>
    <div>
      <button @click="emitOnDone" v-if="!model.status">✅</button>
      <button @click="emitOnRemove" v-else>❌</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  model: {
    type: Object,
    required: true,
    default: () => ({
      id: 0,
      title: '',
      description: '',
      status: false
    })
  }
})

const emit = defineEmits(['onDone', 'onRemove'])

const emitOnDone = () => {
  emit('onDone')
}

const emitOnRemove = () => {
  emit('onRemove')
}
</script>

<style scoped>
.task-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>