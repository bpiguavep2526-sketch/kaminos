<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const hola = ref();

const saludo = () => {
  axios.get("hola").then(response => {
    hola.value = response.data
  }).catch(error => {
    console.log(error)
  })
}

saludo()

</script>

<template>
  <h1>EYYYYYYYYYYYY</h1>
  <p>SOS T</p>
  <p>{{ hola }}</p>
</template>
