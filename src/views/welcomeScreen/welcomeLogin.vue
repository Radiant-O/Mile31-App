<template>
  <section class="welcome choose">
      <div class="brand_logo">
          <img src="../../../public/images/logo.png" alt="" class="center">
          <p class="brand_name">MILE 31</p>
      </div>
      <div class="brand_auth">
      <!-- <p class="user_option">LogIn as Driver</p>
      <span>Or</span>
      <p class="user_option">LogIn  Up as User</p> -->

      <p><router-link class="user_option" to="/login_driver">LogIn as Driver</router-link></p>
      <span>Or</span>
      <p><router-link class="user_option" to="/login_user">LogIn as User</router-link></p>
    </div>
  </section>
</template>

<script setup>

</script>

<style>

</style>