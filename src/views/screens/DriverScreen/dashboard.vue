<template>
  <section class="dashboard_screen sxdsa">
    <DriveTopScreen />

    <EarningBox/>
    <div class="dash_wallet_card">
      <div class="wallet_balance">
        <div class="wal_bal_abt">
          <p class="wal_bal_head">Wallet Balance</p>
          <p class="wal_bal_amt">N2389.00</p>
        </div>
          <p class="wal_withdrawl_btn">Withdrawl</p>
        
      </div>
      <hr />
      <div class="wall_hist">
        <p>
          View Payment History
        </p>
       <img src="../../../assets/icons/nxt.png" alt="">
      </div>
    </div>
    <div class="dash_wallet_card">
      <div class="wallet_balance">
        <div>
          <p class="wal_bal_head">Ongoing Trip</p>
          <div class="trip_goin_info">
            <img src="../../../assets/icons/driver.png" alt="">
            <p>Meagan Terry</p>
          </div>
        </div>
        <div>
          <p class="wal_withdrawl_btn">Navigation</p>
        </div>
      </div>
      <hr />
      <div class="wall_hist trip_info_das">
        <p>
          Upcoming Trips (5)
        </p>
       <img src="../../../assets/icons/nxt.png" alt="">
      </div>
    </div>
    <div class="dash_wallet_card">
        <p class="wal_bal_head trip_head">Previous Trip</p>
        <div class="trip_map">
            <img src="../../../assets/icons/mapp.png" alt="">
        </div>
      <hr />
      <div class="wall_hist">
        <div class="wall_hist_infoo">
       <img src="../../../assets/icons/driver.png" alt="">
        <p><span></span>Jonne Drey</p>
        </div>
       <p class="ammt">
          Total : $500
        </p>
      </div>
    </div>
    
  </section>
</template>

<script setup>
import DriveTopScreen from "../../../components/drive_top_screen.vue";
import EarningBox from "../../../components/earning_box.vue";
</script>
