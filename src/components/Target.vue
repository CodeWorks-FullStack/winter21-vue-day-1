<template>
  <div class="target rounded bg-white shadow p-3">
    <div>
      <!-- to add javascript/bind to a attribute we use the ':' -->
      <img
        :src="target.imgUrl"
        :class="{ greyscale: !isAlive }"
        class="w-100"
      />
      <h1>{{ target.name }}</h1>
      <p>{{ target.health }}</p>
    </div>
    <!-- only render the element IF the condition is met -->
    <div class="d-flex justify-content-around" v-if="isAlive">
      <div v-for="a in target.attacks" :key="a.name">
        <button type="button" class="btn btn-primary" @click="attack(a.value)">
          {{ a.name }}
        </button>
      </div>
    </div>
    <div class="text-center pt-4" v-else>
      <button class="btn btn-info" @click="target.health = target.maxHealth">
        Reset
      </button>
    </div>
  </div>
</template>


<script>
import { computed, reactive, ref } from '@vue/reactivity'
export default {
  props: {
    target: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    // ref: is for local data that changes
    // const health = ref(100)

    // all elements within a reactive are editable and "reactive"
    // let target = reactive({
    //   name: 'Slappy',
    //   health: 100,
    //   maxHealth: 100,
    //   hits: 0,
    //   imgUrl: 'https://i.ytimg.com/vi/vQ7F1Zj7KJE/maxresdefault.jpg',
    //   attacks: [
    //     { name: 'slap', value: 1 },
    //     { name: 'punch', value: 5 },
    //     { name: 'dropkick', value: 10 },
    //   ]
    // })


    return {
      // variables
      // health,
      // target,
      name: 'Slappy',
      // computed (values that calulated when data they reference changes)
      isAlive: computed(() => props.target.health > 0),
      // methods
      attack(value) {
        // when editing ref within the setup you must use '.value'
        props.target.health -= value
      }


    }
  }
}
</script>


<style lang="scss" scoped>
.target {
  user-select: none;
}

img {
  height: 30vh;
}

.greyscale {
  filter: grayscale(1);
}
</style>