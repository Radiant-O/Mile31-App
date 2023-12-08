<template>
  <section class="welcome history">
    <!-- <menuTopScreen /> -->
    <topScreen msg="History"/>
    <div class="history_cont">
      <p class="history_day">31/10/2022</p>
        <HistoryCard/>
    </div>
  </section>
</template>

<script setup>
import HistoryCard from "../../../components/historyCard.vue";
// import menuTopScreen from "../../../components/menuTopScreen.vue";
import topScreen from "../../../components/top_screen.vue";
</script>
