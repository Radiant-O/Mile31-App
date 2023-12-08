<template>
  <section class="welcome choose ">
    <h3 class="create_acc">Welcome Back... </h3>
    <form class="signup" @submit.prevent>
        <div class="form_input">
            <label for="mail">Email Address</label>
            <input type="mail" placeholder="joedoe@mail.com">
        </div>

        <div class="form_input">
            <label for="name">Enter Password</label>
            <input type="password" placeholder="********">
        </div>
        <p class="forget_pass">Forget Password?</p>
        
        <button class="form_input_btn" @click="$router.push('/map')">Log In</button>
    </form>

    <div class="login_options login_options_box">
        <p class="already">Don't have an account?</p>
        <!-- <p class="form_input_btn">SIGN UP</p> -->
        <p class="form_input_btn"><router-link to="/signup_user">SignUp</router-link></p>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
