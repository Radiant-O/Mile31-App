<template>
    <section class="driver_profile sxdsa">
        <DriveTopScreen/>
        <div class="driver_profile_abt">
            <div class="dri_pro_abt">
            <img src="../../../assets/icons/driver.png" alt="">
            <div class="driv_info">
                <p class="driv_info_name">Richard Beeck</p>
                <p class="driv_info_car">Toyota Camry</p>
            </div>
        </div>
            <p class="driv_info_btn">Edit</p>
        </div>
        <div class="driver_profile_det">
            <div class="each_detail">
                <img src="../../../assets/icons/driver_phone.png" alt="">
                <p>+2347012343212</p>
            </div>
            <hr/>
            <div class="each_detail">
                <img src="../../../assets/icons/mail.png" alt="">
                <p>drivermail@mymail.com</p>
            </div>
            <hr/>
            <div class="each_detail">
                <img src="../../../assets/icons/loc_drive.png" alt="">
                <p>22, Express St, OgunState</p>
            </div>
            <hr/>
            <div class="each_detail">
                <img src="../../../assets/icons/feat_comp.png" alt="">
                <p>Logistics Only</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import DriveTopScreen from '../../../components/drive_top_screen.vue';

</script>