<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col text-center pt-5 target" @click="slap">
        <h1>{{ name }}</h1>
        <p>{{ health }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'HomePage',
  setup() {
    // ref: is for local data that changes
    let health = ref(100)


    return {
      // variables
      health,
      name: 'Slappy',
      // computed

      // methods
      slap() {
        // when editing ref within the setup you must use '.value'
        health.value -= Math.floor(Math.random() * 10)
      }


    }
  }
}
</script>

<style scoped lang="scss">
.target {
  user-select: none;
}
</style>
