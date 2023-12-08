<template>
  <section class="welcome">
    <h3 class="create_acc">Create An Account</h3>
  <form class="signup" @submit.prevent>
    <div class="form_input">
      <label for="name">Name</label>
      <input type="text" placeholder="John Doe" />
    </div>
    <div class="form_input">
      <label for="mail">Email Address</label>
      <input type="mail" placeholder="joedoe@mail.com" />
    </div>
    <div class="form_input">
      <label for="pass">Enter Password</label>
      <input type="password" placeholder="********" />
    </div>
    <div class="form_input">
      <label for="pass">Confirm Password</label>
      <input type="password" placeholder="********" />
    </div>

    <div class="form_input">
      <label for="doc">Upload your driver lincense</label>
      <input type="file" />
      <div class="img_preview">
        <!-- <img class="preview" /> -->
      </div>
    </div>

    <div class="form_input">
      <label for="natin">Nationality</label>
      <input type="text" placeholder="Nigeria" />
    </div>

    <div class="form_input">
      <label for="state">Select your state</label>
      <select v-model="selectedState" placeholder="Select State" class="text-black">
        <option placeholder="Select State" class="text-black" v-for="state in states" :key="state.key" :value="state.key">{{ state.value }}</option>
      </select>
    </div>

    <div class="form_input">
      <label for="state">Select your Local Govt.</label>
      <select v-model="selectedLGA" placeholder="Select State" class="text-black">
        <option class="text-black" v-for="lga in lgas" :key="lga.key" :value="lga.key">{{ lga.value }}</option>
      </select>
    </div>

    <div class="form_input">
        <label for="video">Upload Vechicle Video</label>
        <input type="file"/>
    </div>

    <button class="form_input_btn" @click="$router.push('/driver')">Log In</button>

  </form>
  <div class="login_options">
        <p class="already">Already have an account?</p>
        <!-- <p class="form_input_btn">SIGN IN</p> -->
        <p class="form_input_btn"><router-link to="/login_driver">SignIn</router-link></p>
    </div>
</section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import stateLgas from "../../assets/datas/state-and-lgas.json"



const selectedState = ref("");

const selectedLGA = ref("");

const states = computed(() => {
    return stateLgas
        .map((state) => {
            return {
                key: state.state.toLowerCase(),
                value: state.state,
            };
        })
        .sort((a, b) => (a.key > b.key ? 1 : -1));
});

const lgas = computed(() => {
    if (selectedState.value) {
        const state = stateLgas.find((state) => state.state.toLowerCase() === selectedState.value);
        return [...(<string[]>state?.lgas)].map((lga) => {
            return {
                key: lga.toLowerCase(),
                value: lga,
            };
        });
    } else {
        return [];
    }
});
// Change Selected LGA to "" when the selectedState is changed
watch(selectedState, () => (selectedLGA.value = ""));
</script>

<style></style>
