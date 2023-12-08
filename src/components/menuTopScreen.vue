<template>
    <div class="nav">
        <img @click="$router.push('/map')" src="../assets/icons/back_arrow.png" alt="" class="nav_icon">
        <p class="nav_menu_name">History</p>
        <img src="../assets/icons/notify.png" alt="" class="notify nav_icon">
    </div>
</template>

<style scoped>
.nav{
    @apply flex justify-between items-center px-6 pt-5 pb-8
}
.nav_menu_name{
    @apply text-white text-lg font-normal 
}
</style>