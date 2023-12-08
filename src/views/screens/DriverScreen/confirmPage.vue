<template>
  <section class="welcome conf_screen">
    <DriverTopeeScreen/>
    <div class="conf_det">
      <div class="conf_img">
        <img src="/images/confirm.png" />
      </div>
      <div class="conf_text">
        <h3>Confirm ?</h3>
        <p>
          You got a ride request from Ella Manuel. <br />
          Please Confirm you got his request to pick him up. <br />
          Please go quick.
        </p>
      </div>
    </div>
    <div class="confirm_btns">
      <div class="decline_req_btn">
        <img src="@/assets/icons/decline.png" alt="" />
      </div>
      <div class="confirm_req_btn">
        <p>CONFIRM REQUEST</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import FinishPop from "../../../components/finishPop.vue";
import topScreen from "../../../components/top_screen.vue";
import DriverTopeeScreen from "../../../components/driverTopeeScreen.vue";
</script>
