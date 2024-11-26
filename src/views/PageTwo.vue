<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const leakedNodes = ref<HTMLElement[]>([])

function createNode(text: string) {
  const div = document.createElement('div')
  div.appendChild(document.createTextNode(text + ' - ' + new Date().toTimeString()))
  return div
}

function createNodes() {
  for (let i = 0; i < 1000; i++) {
    leakedNodes.value.push(createNode('Leaked:' + i))
  }
}

function clearLeakedNodes() {
  // the following loop removes the nodes from the DOM tree
  // BUT the leakedNodes array holds a reference to the nodes which prevents
  // the garbage collector from removing them, which causes detached nodes
  leakedNodes.value.forEach((node) => {
    node.remove()
  })

  // the fix is to empty the reference from the array:
  //leakedNodes.value = []
}

const onBackClick = () => {
  router.back()
}

onUnmounted(() => {
  console.log(leakedNodes.value)
})
</script>

<template>
  <h1>Page 2</h1>
  <div style="display: flex; flex-direction: column">
    <button @click="createNodes">Create Nodes</button>
    <button @click="clearLeakedNodes">Delete Nodes</button>
    <button @click="onBackClick">Back</button>

    <div>Nodes created:</div>
    <div>{{ leakedNodes.length }}</div>
  </div>
</template>

<style>
.node {
  border: 1px solid #ccc;
}
</style>
