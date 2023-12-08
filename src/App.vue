<template>
  <welcomeOne v-if="!welcome"/>
  <RouterView v-else/>
</template>

<script setup>
import welcomeOne from './views/welcomeScreen/welcomeOne.vue'

const welcome = true;

</script>

<style>

</style>