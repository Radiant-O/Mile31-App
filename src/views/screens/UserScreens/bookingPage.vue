<template>
  <section class="booking_page welcome">
    <MenuTopScreen />
    <div class="booking-page">
      <div class="search_book">
        <input type="text" placeholder="Search" />
        <img src="../../assets/icons/search.png" />
      </div>

      <div class="car_book">
        <img src="../../../public/images/carr.png" class="book_car" />

        <p class="car_name">TOYOTA S1</p>
        <div class="car_feat">
          <div class="car_apps">
            <img src="../../assets/icons/Gearbox.png" alt="" />
            <p>A/T</p>
          </div>
          <div class="car_apps">
            <img src="../../assets/icons/UserAccount.png" alt="" />
            <p>5</p>
          </div>
          <div class="car_apps">
            <img src="../../assets/icons/CarDoor.png" alt="" />
            <p>4</p>
          </div>
          <div class="car_apps">
            <img src="../../assets/icons/Sun.png" alt="" />
            <p>A/T</p>
          </div>
        </div>
        <div class="car_avail">
          <div class="car_avail_abt">
            <p>
              <span><img src="../../assets/icons/tick.png" /></span> Instant
              Confirmation
            </p>
            <p>
              <span><img src="../../assets/icons/tick.png" /></span> Free
              Cancelation
            </p>
          </div>
          <div class="car_avail_price">
            <p>Day/ <span>N250</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MenuTopScreen from "../../../components/menuTopScreen.vue";
</script>
