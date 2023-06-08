<template>
  <main style="background-color: white; height: 100vh; width: 100vw">
    <div class="teste">
      <VueAwesomeSideBar
        v-model:miniMenu="miniMenu"
        :menu="testMenu"
        vueRouterEnabel
        checkButtonActive
      ></VueAwesomeSideBar>
      <div
        :key="anoSelecionado"
        style="
          background-color: rgba(1, 1, 1, 0);
          width: 200px;
          height: 100px;
          color: black;
          font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        "
      >
        {{ dadosSelecionados.titulo }}
      </div>
    </div>
    <div class="linhaAmericaSul">
      Ámerica do Sul
    </div>
    <div class="linhaAmericaNorte">Ámerica do Norte</div>
    <div class="linhaAsia">Ásia</div>
    <div class="linhaEuropa">Europa</div>
    <div class="linhaAfrica">África</div>
    <div class="linhaOceania">Oceania</div>
  </main>
</template>
<script setup>
import { ref, computed } from "vue";
import infos2019 from "/src/database/2019.js";
import infos2020 from "/src/database/2020.js";
import infos2021 from "/src/database/2021.js";
import infos2022 from "/src/database/2022.js";
import { useRoute } from "vue-router";

const route = useRoute();
const dados2019 = infos2019;
const dados2020 = infos2020;
const dados2021 = infos2021;
const dados2022 = infos2022;
const dadosSelecionados = computed(() => {
  if (anoSelecionado.value === "#2019") {
    console.log("2019");
    return dados2019;
  } else if (anoSelecionado.value === "#2020") {
    console.log("2020");
    return dados2020;
  } else if (anoSelecionado.value === "#2021") {
    console.log("2021");
    return dados2021;
  } else if (anoSelecionado.value === "#2022") {
    console.log("2022");
    return dados2022;
  }
});
const anoSelecionado = computed(() => {
  return route.hash;
});
const miniMenu = ref(true);
const testMenu = [
  {
    name: "Ano de referência",
    children: [
      {
        href: "/#2022",
        name: "2022",
      },
      {
        href: "/#2021",
        name: "2021",
      },
      {
        href: "/#2020",
        name: "2020",
      },
      {
        href: "/#2019",
        name: "2019",
      },
    ],
  },
  {
    name: "Sobre",
  },
];
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
  margin-left: 400px;
  margin-top: -230px;
  color: black;
}

.linhaAmericaNorte {
  width: 400px;
  height: 4px;
  background-color: black;
  margin-left: 200px;
  margin-top: -400px;
  color: black;
}

.linhaAsia {
  width: 400px;
  height: 4px;
  background-color: black;
  margin-left: 1000px;
  margin-top: 30px;
  color: black;
}

.linhaEuropa {
  width: 400px;
  height: 4px;
  background-color: black;
  margin-left: 800px;
  margin-top: -50px;
  color: black;
}

.linhaAfrica {
  width: 400px;
  height: 4px;
  background-color: black;
  margin-left: 750px;
  margin-top: 300px;
  color: black;
}

.linhaOceania {
  width: 400px;
  height: 4px;
  background-color: black;
  margin-left: 1200px;
  margin-top: 150px;
  color: black;
}
</style>
