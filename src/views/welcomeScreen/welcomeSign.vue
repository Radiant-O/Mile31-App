<template>
    <section class="welcome choose">
        <div class="brand_logo">
            <img src="../../../public/images/logo.png" alt="" class="center">
            <p class="brand_name">MILE 31</p>
        </div>
        <div class="brand_auth">
        <p><router-link class="user_option" to="/signup_driver">SignUp as Driver</router-link></p>
        <span>Or</span>
        <p><router-link class="user_option" to="/signup_user">SignUp as User</router-link></p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style>
  
  </style>