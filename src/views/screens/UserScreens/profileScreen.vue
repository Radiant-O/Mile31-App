<template>
    <section class="welcome profile_screen" v-if="!nav">
        <div class="confirm_top">
            <img src="@/assets/icons/times-white.png" @click="toggleNav">
        </div>
        <div class="user_info">
            <p class="name">Emmanuel Emayes</p>
            <p class="mail">eemayes@mail.com</p>
        </div>
        <div class="profile_menu">
            <div class="menu">
                <img src="@/assets/icons/home.png" alt="">
                <p>Home</p>
            </div>
            <div class="menu">
                <img src="@/assets/icons/card.png" alt="">
                <p><router-link to="/add_payment">Payment Method</router-link></p>
            </div>
            <div class="menu">
                <img src="@/assets/icons/time.png" alt="">
                <p><router-link to="/history">History</router-link></p>
            </div>
            <div class="menu">
                <img src="@/assets/icons/setting.png" alt="">
                <p><router-link to="/setting">Setting</router-link></p>
            </div>
            <div class="menu">
                <img src="@/assets/icons/support.png" alt="">
                <p>Online Support</p>
            </div>
            <div class="menu">
                <img src="@/assets/icons/logout.png" alt="">
                <p>Log Out</p>
            </div>
            <div class="menu">
                <img src="@/assets/icons/appandfeat.png" alt="">
                <p>App and Features</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const nav = ref(false);

const toggleNav = () => {
    nav.value = !nav.value;
}
</script>