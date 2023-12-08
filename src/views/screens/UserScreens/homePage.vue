<template>
    <section class="welcome">
        <topScreen msg="MILE 31" />
        <img src="@/assets/imgs/fullMap.png" class="map">
        <div class="search_location">
            <div class="loc">
                <div class="loca_icon">
                    <img src="@/assets/icons/pin.png" alt="" class="loc_icon">
                    <input type="text" class="start_loc" placeholder="Lagos">
                </div>
                <div class="loca_icon">
                    <img src="@/assets/icons/fly.png" alt="" class="loc_icon">
                    <input type="text" class="end_loc" placeholder="Owerri">
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import topScreen from '../../../components/top_screen.vue';

</script>
<style scoped>
.map{
    @apply w-full
}
.loc_icon{
    @apply absolute w-[30px] pt-[0.6rem] px-2 items-center justify-center my-auto 
}

</style>