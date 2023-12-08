<template>
  <section class="welcome">
      <p class="welcome_header">MILE 31</p>
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      
      <img class="wlc_car" src="/images/car.svg" alt="">
    <div class="below_screen">
        <p class="below_top">
            Welcome to MILE 31
        </p>
        <p class="below_cont">
            We offer easy and most convinent rides for you
        </p>

        <div class="below_btns">
            <!-- <button @click="welcomeSignUp" class="below_sign">Sign Up</button>
            <button @click="welcomeLogin" class="below_sign">Sign In</button> -->

            <router-link to="/welcomesign" class="below_sign">Sign Up</router-link>
            <router-link to="/welcomelogin" class="below_sign">Sign In</router-link>
        </div>
    </div>
  </section>
</template>

<script setup>
import welcomeLogin from './welcomeLogin.vue';
import welcomeSign from './welcomeSign.vue';

</script>

<style>

</style>