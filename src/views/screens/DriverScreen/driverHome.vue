<template>
    <section class="welcome">
        <DriverTopeeScreen msg="Mile 31"/>
        <img src="@/assets/imgs/fullMap.png" class="map">
    </section>
</template>


<script setup>
import DriverTopeeScreen from '../../../components/driverTopeeScreen.vue'

</script>
<style scoped>
.map{
    @apply w-full
}
.loc_icon{
    @apply absolute w-[30px] pt-[0.6rem] px-2 items-center justify-center my-auto 
}

</style>