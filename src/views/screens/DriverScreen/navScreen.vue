<template>
    <section class="welcome profile_screen" v-if="!nav">
        <div class="confirm_top">
            <img src="@/assets/icons/times-white.png" @click="toggleNav">
        </div>
        <div class="user_info">
            <p class="name">Emmanuel Emayes</p>
            <p class="mail">Toyota (EDF-234-AB)</p>
        </div>
        <div class="profile_menu">
            <div class="menu">
                <img src="@/assets/icons/home.png" alt="">
                <p><router-link to="/history">Home</router-link></p>
            </div>
            <!-- <div class="menu">
                <img src="../../assets/icons/card.png" alt="">
                <p><router-link to="/add_payment">Payment Method</router-link></p>
            </div> -->
            <div class="menu">
                <img src="@/assets/icons/time.png" alt="">
                <p><router-link to="/driverdashboard">History</router-link></p>
            </div>
            <div class="menu">
                <img src="@/assets/icons/setting.png" alt="">
                <p><router-link to="/driverprofile">Setting</router-link></p>
            </div>
            <div class="menu">
                <img src="@/assets/icons/support.png" alt="">
                <p><router-link to="/setting">Online Support</router-link></p>
            </div>
            <div class="menu">
                <img src="@/assets/icons/earn.png" alt="">
                <p><router-link to="/driverdashboard">Dashboard</router-link></p>
            </div>
            <div class="menu">
                <img src="@/assets/icons/appandfeat.png" alt="">
                <p><router-link to="/earnings">Earnings</router-link></p>
            </div>
            <div class="menu">
                <img src="@/assets/icons/logout.png" alt="">
                <p><router-link to="/setting">Setting</router-link></p>
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