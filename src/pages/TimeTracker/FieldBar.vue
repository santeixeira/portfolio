<template>
  <ListBox>
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Form for new task">
        <input
          type="text"
          class="input"
          placeholder="Nomeia a nova tarefa"
          v-model="description"
        />
      </div>
      <div class="column is-3">
        <div class="select is-primary">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
      <div class="column is-4 organize-list">
        <Temporizer @endedTime="end" />
      </div>
    </div>
  </ListBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ListBox } from "@/components/index";
import { Temporizer } from "./index";
export default defineComponent({
  name: "FieldBar",
  components: { ListBox, Temporizer },
  data () {
    return {
      description: "",
    }
  },
  methods: {
    end(timePassed: number): void {
      console.log(timePassed);
    }
  }
});
</script>

<style lang="scss" scoped>
.organize-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
