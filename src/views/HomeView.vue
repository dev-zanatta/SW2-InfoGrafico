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
  </main>
</template>

<style>
.teste {
  background-image: url('../img/fundo.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 70%;
  height: 700%;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}
</style>

<script setup>
  import { ref } from 'vue'

const collapsed = ref(false)
const miniMenu = ref(false)

const testMenu = [
  {
    name: 'Tipo do infográfico',
    icon: { text: 'home' , class: 'material-icons-outlined' },
    children: [
      {
        href: '/#1',
        name: 'Grau de sei la o que',
        icon: { class: 'material-icons-outlined'},
      },
      {
        href: '/#2',
        name: 'Grau de cornisse'
      }
    ],
  },
  {
    name: 'Ano de referência',
    icon: { text: 'Ano', class: 'material-icons-outlined' },
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
    icon: { text: 'So', class: 'material-icons-outlined' },
  },
]
</script>
