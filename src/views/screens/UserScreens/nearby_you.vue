<template>
<section class="welcome">
    <topScreen msg="NEARBY YOU"/>
    <div class="nearby">
        <p class="nearby_head">Nearby You</p>
        <driverCard />
    </div>
</section>
</template>
<script setup>
import topScreen from '../../../components/top_screen.vue';
import driverCard from '../../../components/driver_card.vue';
</script>