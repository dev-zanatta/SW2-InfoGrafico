<template>
  <main style="background-color: white; height: 100vh; width: 100vw">
    <div class="teste">
      <VueAwesomeSideBar
        v-model:miniMenu="miniMenu"
        v-model:collapsed="collapsed"
        :menu="testMenu"
        vueRouterEnabel
      ></VueAwesomeSideBar>
    </div>

    <div class="linhaAmericaSul">
      Ámerica do Sul
      {{ dados2019.titulo }}
    </div>
    <div class="linhaAmericaNorte">
      Ámerica do Norte
    </div>
    <div class="linhaAsia">
      Ásia
    </div>
    <div class="linhaEuropa">
      Europa
    </div>
    <div class="linhaAfrica">
      África
    </div>
    <div class="linhaOceania">
      Oceania
    </div>
  </main>
</template>
<script setup>
import { ref, watch } from "vue";
import infos2019 from "/src/database/2019.js";
import infos2020 from "/src/database/2019.js";
import infos2021 from "/src/database/2019.js";
import infos2022 from "/src/database/2019.js";

const dados2019 = infos2019;
const dados2020 = infos2020;
const dados2021 = infos2021;
const dados2022 = infos2022;
const collapsed = ref(false);
const miniMenu = ref(true);
const testMenu = [
  {
    name: "Ano de referência",
    children: [
      {
        href: "/#3",
        name: "2022",
      },
      {
        href: "/#4",
        name: "2021",
      },
      {
        href: "/#5",
        name: "2020",
      },
      {
        href: "/#6",
        name: "2019",
      },
    ],
  },
  {
    name: "Sobre",
  },
];
watch(collapsed, (val) => {
  if (val) {
    console.log(val);
  }
});

watch(miniMenu, (val) => {
  if (val) {
    console.log(val);
  }
});
</script>

<style>
.teste {
  background-image: url("../img/fundo.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 1920px;
  height: 900px;
  margin-left: 400px;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}

.linhaAmericaSul {
  width: 400px;
  height: 4px;
  background-color: black;
  margin-left: 20vw;
  margin-top: -230px;
  color: black;
}

.linhaAmericaNorte {
  width: 400px;
  height: 4px;
  background-color: black;
  margin-left: 10vw;
  margin-top: -400px;
  color: black;
}

.linhaAsia {
  width: 400px;
  height: 4px;
  background-color: black;
  margin-left: 55vw;
  margin-top: 30px;
  color: black;
}

.linhaEuropa {
  width: 400px;
  height: 4px;
  background-color: black;
  margin-left: 42vw;
  margin-top: -50px;
  color: black;
}

.linhaAfrica {
  width: 400px;
  height: 4px;
  background-color: black;
  margin-left: 40vw;
  margin-top: 300px;
  color: black;
}

.linhaOceania {
  width: 400px;
  height: 4px;
  background-color: black;
  margin-left: 64vw;
  margin-top: 150px;
  color: black;
}
</style>
