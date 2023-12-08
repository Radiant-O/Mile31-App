<template>
  <section class="div_top_sc">
    <div class="div_top_scr">
      <img @click="toggleNav" src="../assets/icons/icon-hamburger.svg" alt="" />
      <p class="dash_sc"> {{ msg }}</p>
    </div>

    <NavScreen v-if="nav" />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import NavScreen from '../views/screens/DriverScreen/navScreen.vue';


defineProps({
  msg: {
    type: String,
    required: true
  }
})

const nav = ref(false);

const toggleNav = () => {
    nav.value = !nav.value;
}

</script>

