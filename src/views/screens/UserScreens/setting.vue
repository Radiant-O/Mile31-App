<template>
    <section class="welcome">
        <menuTopScreen/>
        <div class="settings">
            <div class="set_menu">
                <p class="set_item">Phone Number</p>
                <p class="set_var">+2349043455443</p>
            </div>
            <div class="set_menu">
                <p class="set_item">Notification</p>
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider"></span>
                </label>
            </div>
            <div class="set_menu">
                <p class="set_item">Address</p>
                <p class="set_var">Monica St</p>
            </div>
            <div class="set_menu">
                <p class="set_item">Traffic</p>
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider"></span>
                </label>
            </div>
            <div class="set_menu">
                <p class="set_item">Language</p>
                <p class="set_var">English</p>
            </div>
        </div>
    </section>
</template>
<script setup>
import menuTopScreen from '../../../components/menuTopScreen.vue';
</script>