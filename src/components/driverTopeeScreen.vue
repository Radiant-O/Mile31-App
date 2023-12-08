<template>
    <div class="nav">
        <img @click="toggleNav" src="../assets/icons/icon-hamburger.svg" alt="" class="nav_icon"/>
        <p class="nav_name">{{ msg }}</p>
        <img src="../assets/icons/notify.png" alt="" class="notify nav_icon">
    </div>
  
    <NavScreen v-if="nav"/>
    
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

<style scoped>
.nav{
    @apply flex justify-between items-center px-6 pt-5 pb-8
}
.nav_name{
    @apply text-white text-lg font-semibold 
}
</style>