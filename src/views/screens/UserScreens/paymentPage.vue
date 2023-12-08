<template>
    <section class="welcome">
        <menuTopScreen/>
        <div class="payment_page">
        <div class="payment_type">
            <div class="payee_type">
                <img src="@/assets/icons/pay_cash.png" alt="">
                <div class="pay_abt">
                    <p class="pay_abt_type">Cash Payment</p>
                    <p class="pay_abt_mth">Default method</p>
                </div>
            </div>
            <div class="payee_type">
                <img src="@/assets/icons/master_card.png" alt="">
                <div class="pay_abt">
                    <p class="pay_abt_type">Card Payment</p>
                    <p class="pay_abt_mth">**** **** **** 4345</p>
                </div>
            </div>
        </div>
        <p class="add_card">Add New Card</p>

        <div class="recent">
            <p class="rec_act">Recent Activity</p>
            <div class="hist_card">
            <HistoryCard/>
        </div>
        </div>
    </div>

    </section>
</template>

<script setup>
import HistoryCard from '../../../components/historyCard.vue';
import menuTopScreen from '../../../components/menuTopScreen.vue';
</script>