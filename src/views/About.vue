<template>
  <h1>About</h1>
  <button @click="addVal">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'About',
  setup() {
    const count = ref(0)
    function addVal() {
      count.value++
    }
    return { count, addVal }
  }
}
</script>