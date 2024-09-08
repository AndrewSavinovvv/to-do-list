import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTaskStore = defineStore('taskStore', () => {
    const taskList = ref([
        { id: 0, title: '', description: '', status: false }
    ])

    const addTask = (title, description) => {
        const lastId = taskList.value.length ? taskList.value[taskList.value.length - 1].id : 0
        taskList.value.push({ id: lastId + 1, title, description, status: false })
    }

    const setDoneTask = (id) => {
        const task = taskList.value.find(task => task.id === id)
        if (task) {
            task.status = true
        }
    }

    const removeTask = (id) => {
        taskList.value = taskList.value.filter(task => task.id !== id)
    }

    return {
        taskList,
        addTask,
        setDoneTask,
        removeTask
    }
})