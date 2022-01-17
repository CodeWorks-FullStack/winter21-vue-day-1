<template>
  <div class="container">
    <!-- TODO extract to component   -->
    <div class="row">
      <button v-if="!showForm" class="btn btn-info" @click="showForm = true">
        Add Target
      </button>
      <div v-else class="col m-3 p-3 bg-white shadow rounded">
        <form
          class="d-flex justify-content-between"
          @submit.prevent="createTarget"
        >
          <div class="m-2">
            <label for="name" class="form-label">Name</label>
            <!-- two way data binding with v-model -->
            <input
              type="text"
              class="form-control"
              placeholder="Name..."
              v-model="newTarget.name"
            />
          </div>
          <div class="m-2">
            <label for="img-url" class="form-label">Image Url</label>
            <input
              type="text"
              class="form-control"
              placeholder="Url..."
              v-model="newTarget.imgUrl"
            />
          </div>
          <div class="m-2">
            <label for="img-url" class="form-label">Health</label>
            <input
              type="number"
              min="0"
              class="form-control"
              placeholder="Health..."
              v-model="newTarget.health"
            />
          </div>
          <div class="d-flex align-items-end">
            <button class="btn btn-warning" @click="showForm = false">
              Cancel
            </button>
            <button class="btn btn-success" type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
    <!--  -->

    <div class="row justify-content-center">
      <div
        class="col-md-6 text-center p-3 target"
        v-for="tData in targets"
        :key="tData.name"
      >
        <Target :target="tData" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from '@vue/reactivity'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { targetsService } from '../services/TargetsService'

export default {
  name: 'HomePage',
  setup() {
    const newTarget = reactive({
      name: '',
      health: 100,
      maxHealth: 100,
      imgUrl: '',
      attacks: [{ name: 'Slap', value: 1 }, { name: 'Punch', value: 5 }, { name: 'Kick', value: 10 }]
    })
    const showForm = ref(false)
    return {
      newTarget,
      showForm,
      targets: computed(() => AppState.targets),
      createTarget() {
        newTarget.maxHealth = newTarget.health
        targetsService.addTarget(newTarget)
        Pop.toast("Target Added", 'success')
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
