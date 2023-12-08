<template>
  <section class="welcome pay_utl">
    <MenuTopScreen />
    <div class="pay_screen">
      <div class="card_num">
        <p>Card Number</p>
        <input type="text" class="card_num_input" placeholder="**** **** **** 4322" />
      </div>
      <div class="card_details">
        <div class="card_detail_abt">
          <p>EXP</p>
          <div class="select">
            <select class="date">
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
            </select>
            <select class="month">
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
            </select>
          </div>
        </div>
        <div class="card_exp">
          <p>CVV/CVC</p>
          <input type="text" />
        </div>
      </div>
      <div class="card_holder">
        <p>Card Holder Name</p>
        <input type="text" />
      </div>

      <p class="form_input_btn add_card_btn">ADD MY CARD</p>
    </div>
  </section>
</template>

<script setup>
import MenuTopScreen from "../../../components/menuTopScreen.vue";
</script>
