<template>
    <section class="sel_pay">
        <h3 class="pay_head">Select Payment</h3>
        <div class="pay_box">
            <div class="payee">
            <img src="../assets/icons/pay_cash.png" alt="">
            <div class="cash">
                <p class="pay_type">Cash Payment</p>
                <p class="pay_mth">Default method</p>
            </div>
        </div>
            <div class="select">
                <input type="radio" id="accent" checked>
            </div>
        </div>
        <div class="pay_box">
        <div class="payee">
            <img src="../assets/icons/master_card.png" alt="">
            <div class="cash">
                <p class="pay_type">Card Payment</p>
                <p class="pay_mth">**** **** **** 4321</p>
            </div>
        </div>
            <div class="select">
                <input type="radio">
            </div>
        </div>
        <hr class="line">
        <div class="form_input">
              <label for="name" class="promo">Promo Code</label>
              <input type="text" placeholder="A1231233">
          </div>
        <p class="form_input_btn">CONFIRM TAXI</p>
    </section>
</template>