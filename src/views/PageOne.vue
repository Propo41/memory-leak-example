<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const poems: any[] = []
const count = ref(0)

const onBackClick = () => {
  router.back()
}

const doSomething = () => {
  const largeArray = new Array(1000000).fill('Humpty dumpty')
  poems.push(largeArray)
  console.log(largeArray)
  count.value++
}
</script>

<template>
  <h1>Page 1</h1>
  <div style="display: flex; flex-direction: column">
    <button @click="onBackClick">Back</button>
    <button style="color: red" @click="() => doSomething()">Do something</button>

    <div>Do something count: {{ count }}</div>
  </div>
</template>
