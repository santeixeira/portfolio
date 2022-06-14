<template>
  <ListBox>
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Form for new task">
        <input type="text" class="input" placeholder="Nomeia a nova tarefa" />
      </div>
      <div class="column is-4 organize-list">
        <Cronometer :timeSeconds="timeSeconds" />
        <button class="button" @click="startCount">
          <span class="icon">
            <i :class="icon"></i>
          </span>
          <span>{{ text }}</span>
        </button>
      </div>
    </div>
  </ListBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ListBox, ListContent, Cronometer } from "@/components/index";
export default defineComponent({
  name: "FieldBar",
  components: { ListBox, Cronometer },

  data() {
    return {
      timeSeconds: 0,
      cronometer: 0,
      timeCondition: true,
      icon: "fas fa-play",
      text: "play"
    };
  },
  methods: {
    startCount() {
      if (this.timeCondition == true) {
        this.cronometer = setInterval(() => {
          this.timeSeconds++;
        }, 1000);
        this.timeCondition = false;
        this.icon = "fas fa-stop";
        this.text = "stop";
      } else {
        clearInterval(this.cronometer);
        this.icon = "fas fa-play";
        this.text = "play";
        this.timeCondition = true;
      }
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
