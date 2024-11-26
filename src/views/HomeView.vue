<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const onPage1Click = () => {
  router.push('/page1')
}

const onPage2Click = () => {
  router.push('/page2')
}
</script>

<template>
  <h1>Home</h1>
  <div style="display: flex; flex-direction: column">
    <button @click="onPage1Click">Page 1</button>
    <button @click="onPage2Click">Page 2</button>
  </div>
</template>
