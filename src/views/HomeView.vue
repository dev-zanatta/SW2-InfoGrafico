<template>
  <main style="background-color: white; height: 100vh; width: 100vw">
    <div class="fundo">
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
      ></div>
    </div>
    <div v-if="dadosSelecionados">
      <div class="linhaAmericaSul">
        <div>Ámerica do Sul</div>
        <div>Alfabetização Ambiental : {{ dadosSelecionados.dados[0].alfabetizacao_ambiental }} </div>
        <div>Acesso à alfabetização Ambiental : {{ dadosSelecionados.dados[0].acesso_alfabetizacao_ambiental }} </div>
        <div>Investimento em Educação Ambiental : {{ dadosSelecionados.dados[0].investimento_edu_ambiental }} </div>
      </div>
      <div class="linhaAmericaNorte">
        <div>Ámerica do Norte</div>
        <div>Alfabetização Ambiental : {{ dadosSelecionados.dados[1].alfabetizacao_ambiental }} </div>
        <div>Acesso à alfabetização Ambiental : {{ dadosSelecionados.dados[1].acesso_alfabetizacao_ambiental }} </div>
        <div>Investimento em Educação Ambiental : {{ dadosSelecionados.dados[1].investimento_edu_ambiental }} </div>
      </div>
      <div class="linhaAsia">
        <div>Ásia</div>
        <div>Alfabetização Ambiental : {{ dadosSelecionados.dados[2].alfabetizacao_ambiental }} </div>
        <div>Acesso à alfabetização Ambiental : {{ dadosSelecionados.dados[2].acesso_alfabetizacao_ambiental }} </div>
        <div>Investimento em Educação Ambiental : {{ dadosSelecionados.dados[2].investimento_edu_ambiental }} </div>
      </div>
      <div class="linhaEuropa">
        <div>Europa</div>
        <div>Alfabetização Ambiental : {{ dadosSelecionados.dados[3].alfabetizacao_ambiental }} </div>
        <div>Acesso à alfabetização Ambiental : {{ dadosSelecionados.dados[3].acesso_alfabetizacao_ambiental }} </div>
        <div>Investimento em Educação Ambiental : {{ dadosSelecionados.dados[3].investimento_edu_ambiental }} </div>
      </div>
      <div class="linhaAfrica">
        <div>África</div>
        <div>Alfabetização Ambiental : {{ dadosSelecionados.dados[4].alfabetizacao_ambiental }} </div>
        <div>Acesso à alfabetização Ambiental : {{ dadosSelecionados.dados[4].acesso_alfabetizacao_ambiental }} </div>
        <div>Investimento em Educação Ambiental : {{ dadosSelecionados.dados[4].investimento_edu_ambiental }} </div>
      </div>
      <div class="linhaOceania">
        <div>Oceania</div>
        <div>Alfabetização Ambiental : {{ dadosSelecionados.dados[5].alfabetizacao_ambiental }} </div>
        <div>Acesso à alfabetização Ambiental : {{ dadosSelecionados.dados[5].acesso_alfabetizacao_ambiental }} </div>
        <div>Investimento em Educação Ambiental : {{ dadosSelecionados.dados[5].investimento_edu_ambiental }} </div>
      </div>
    </div>
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
    return dados2019;
  } else if (anoSelecionado.value === "#2020") {
    return dados2020;
  } else if (anoSelecionado.value === "#2021") {
    return dados2021;
  } else if (anoSelecionado.value === "#2022") {
    return dados2022;
  }
  return dados2022;
});
const anoSelecionado = computed(() => {
  return route.hash;
});
const miniMenu = ref(true);
const testMenu = [
  {
    name: "Ano de referência",
    icon: "fa fa-calendar",
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
];
</script>

<style>
.fundo {
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
  margin-left: 1150px;
  margin-top: 50px;
  color: black;
}

.linhaEuropa {
  width: 400px;
  height: 4px;
  background-color: black;
  margin-left: 800px;
  margin-top: -100px;
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
