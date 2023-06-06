<template>
  <main style="background-color: white; height: 100vh; width: 100vw">

    <div class="teste">
      <VueAwesomeSideBar
          v-model:miniMenu="miniMenu"
          v-model:collapsed="collapsed"
          :menu="testMenu"
          vueRouterEnabel
        ></VueAwesomeSideBar>
      {{ collapsed }} aaaaaaaaaa
    </div>
  </main>
</template>
<script setup>
  import { ref, watch } from 'vue'

const collapsed = ref(false)
const miniMenu = ref(true)
const testMenu = [
  {
    name: 'Tipo do infográfico',
    children: [
      {
        href: '/#1',
        name: 'Grau de sei la o que',
      },
      {
        href: '/#2',
        name: 'Grau de cornisse',
      }
    ],
  },
  {
    name: 'Ano de referência',
    children: [
      {
        href: '/#3',
        name: '2023',
      },
      {
        href: '/#4',
        name: '2022',
      },
      {
        href: '/#5',
        name: '2021',
      },
      {
        href: '/#6',
        name: '2020',
      },
    ]
  },
  {
    name: 'Sobre',
  },
]
watch(collapsed, (val) => {
  if (val) {
    console.log(val)
  }
})

watch(miniMenu, (val) => {
  if (val) {
    console.log(val)
  }
})

</script>

<style>
.teste {
  background-image: url('../img/fundo.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 70%;
  height: 90%;
  margin-left: 400px;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}
</style>