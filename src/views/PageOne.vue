<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const onBackClick = () => {
  router.back()
}

const callMe = () => {
  const largeArray = new Array(1000000).fill('Humpty dumpty')
  console.log(largeArray)
}
</script>

<template>
  <h1>Page 1</h1>
  <div style="display: flex; flex-direction: column">
    <button @click="onBackClick">Back</button>
    <button style="color: red" @click="() => callMe()">Call me</button>
  </div>
</template>
