<template>
  <div class="columns is-multiline">
    <div id="overlay" class="column is-full is-align-items-center">
      <div id="text">
        <h1>Minerva</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit maiores,
          provident quod rem vero velit, quam cum fugit doloribus impedit quis
          eum magni tenetur voluptate ipsa dolores nemo cumque aliquid?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit maiores,
          provident quod rem vero velit, quam cum fugit doloribus impedit quis
          eum magni tenetur voluptate ipsa dolores nemo cumque aliquid? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Sit maiores,
          provident quod rem vero velit, quam cum fugit doloribus impedit quis
          eum magni tenetur voluptate ipsa dolores nemo cumque aliquid?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit maiores,
          provident quod rem vero velit, quam cum fugit doloribus impedit quis
          eum magni tenetur voluptate ipsa dolores nemo cumque aliquid?
        </p>
      </div>
      <img
        src="https://files.passeidireto.com/3c762296-9e23-4c1d-81ef-85304d675c14/3c762296-9e23-4c1d-81ef-85304d675c14.jpeg"
        alt=""
      />
      <div class="overlay"></div>
    </div>
  </div>
  <div id="top" class="columns is-multiline" :class="{ hide: login }">
    <div id="part1" class="column is-6 is-align-items-center">
      <h1 id="part1header">Estudos</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam non
        impedit, consequatur quis veritatis repellendus eum sapiente
        consequuntur amet fugit sunt eligendi reiciendis in natus. Velit,
        provident dicta. Nam, eaque.
      </p>
      <router-link to="/app/pomodoro"><CButton>Estudar</CButton></router-link>
    </div>
    <div id="part1text" class="column is-6">
      <img
        src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1656525473~exp=1656526073~hmac=4e93d0f826ba691ef9d3573ab4ad753ca2a43fa96090273dc2da79cb7be96b68&w=740"
        alt=""
      />
    </div>

    <div class="column is-6">
      <img 
        src="https://img.freepik.com/free-photo/boy-studying-university-library_23-2148844678.jpg?t=st=1656534712~exp=1656535312~hmac=42b4e9e1bac77c333bb871d90aa2eef272bfb88fb2fa2a145ef0146d97490d77&w=740"
        alt=""
      />
    </div>
    <div id="part2" class="column is-6 is-align-items-center">
      <h1>Pomodoro</h1>
      <p>
        The Pomodoro Technique is a time management method developed by
        Francesco Cirillo in the late 1980s. It uses a kitchen timer to break
        work into intervals, typically 25 minutes in length, separated by short
        breaks.
      </p>
      <p>
        Most of sprints that "Study with Me" youtube channel's most does is 50
        minutes with 10 minutes break, and this is what I practice the most,
        because make you focus on the task and relieves in a better amount of
        time.
      </p>
    </div>
    <div id="part3" class="column is-6">
      <h1 id="part3header">Feynman Method</h1>
      <p>
        The Feynman Technique is a method of learning that unleashes your
        potential and forces you to develop a deep understanding. Richard
        Feynman was a Nobel prize-winning physicist. His real superpower,
        however, was his ability to explain complicated subjects to others in
        simple terms.
      </p>
      <CButton>Acessar</CButton>
    </div>
    <div id="part3text" class="column is-6">
      <img
        src="https://img.freepik.com/free-photo/using-laptop-group-people-business-conference-modern-classroom-daytime_146671-16285.jpg?t=st=1656542884~exp=1656543484~hmac=b3572c31f2755d9ca8d32b0eee0080eb1071e2a1d65cc7eb7b9ceddca0f5fd86&w=1380"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CButton } from "@/components/index";

export default defineComponent({
  name: "HomeStudies",
  components: { CButton },
  data() {
    return {
      login: false
    };
  }
});
</script>

<style scoped>
#text {
  position: absolute;
  width: 100%;
  z-index: 2;
}
#overlay {
  height: 100%;
  padding: 0;
  margin: 2em 0;
}
.overlay {
  position: absolute;
  transition: 0.5s ease;
  height: 30em;
  width: 104%;
  background-color: rgba(0, 0, 0, 0.75);
  opacity: 1;
  top: 5.25em;
  z-index: 1;
}
#overlay img {
  height: 30em;

  background-position: top center;
  object-fit: cover;
}
#overlay h1 {
  margin: 1em 10em 0em;
  color: #fff;
}

#part1,
#part2,
#part3 {
  align-self: center;
}

#overlay p {
  margin: 2em 10em 0em;
  color: #fff;
}
.column img {
  height: 100%;
  width: 100%;
  background-position: top center;
  object-fit: cover;
}
#top {
  margin: -3.5em 0;
}
#top .column {
  padding: 0;
}
.column h1 {
  margin: 1em 0 0.5em;
  font-size: 2.75em;
}
.column p {
  margin-top: 2em;
  font-size: 1em;
}
.hide {
  height: 100vh;
}

@media (max-width: 820px) {
  .overlay {
    top: 5.25em;
  }
  #overlay h1 {
    margin: 1em 0em 0em;
    color: #fff;
  }
  #overlay p {
    margin: 2em 1em 0em;
    color: #fff;
  }
  #overlay img {
    height: 40em;
  }
  #top {
    margin: 0;
  }
  #part1,
  #part2,
  #part3 {
    display: table;
  }
  #part1header,
  #part3header {
    display: table-header-group;
  }
  #part1text,
  #part3text {
    display: table-footer-group;
  }
}
</style>
