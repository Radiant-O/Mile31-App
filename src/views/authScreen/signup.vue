<template>
  <section class=" welcome choose">
    <h3 class="create_acc">Create An Account</h3>
    
    <form action="" class="signup">
        <div class="form_input">
            <label for="name">Name</label>
            <input type="text" placeholder="John Doe">
        </div>
        <div class="form_input">
            <label for="mail">Email Address</label>
            <input type="mail" placeholder="joedoe@mail.com">
        </div>
        <div class="form_input">
            <label for="name">Enter Password</label>
            <input type="password" placeholder="********">
        </div>
        <div class="form_input">
            <label for="name">Confirm Password</label>
            <input type="password" placeholder="********">
        </div>

        <button class="form_input_btn" type="submit" @click="$router.push('/driver')" >SIGN UP</button>
    </form>

    <div class="login_options login_options_box">
        <p class="already">Already have an account?</p>
        <!-- <p class="form_input_btn">SIGN IN</p> -->
        <p class="form_input_btn"><router-link to="/login_user">Sign In</router-link></p>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>