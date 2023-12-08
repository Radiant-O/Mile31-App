import { createRouter, createWebHistory } from 'vue-router'
import welcomeOne from '../views/welcomeScreen/welcomeOne.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcomeOne
    },
   {
      path: '/welcomesign',
      name: 'welcomeSign',
      component: () => import('../views/welcomeScreen/welcomeSign.vue')
    },
   {
      path: '/welcomelogin',
      name: 'welcomeLogin',
      component: () => import('../views/welcomeScreen/welcomeLogin.vue')
    },
    // Login Routes
    {
      path: '/login_user',
      name: 'loginUser',
      component: () => import('../views/authScreen/login.vue')
    },
    {
      path: '/login_driver',
      name: 'loginDriver',
      component: () => import('../views/authScreen/driver_logIn.vue')
    },
    // SignUp Routes
    {
      path: '/signup_user',
      name: 'signupUser',
      component: () => import('../views/authScreen/signup.vue')
    },
    {
      path: '/signup_driver',
      name: 'signupDriver',
      component: () => import('../views/authScreen/driver_signUp.vue')
    },
    //User Screen Routes
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/screens/UserScreens/homePage.vue')
    },
    {
      path: '/add_payment',
      name: 'addPayment',
      component: () => import('../views/screens/UserScreens/paymentPage.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/screens/UserScreens/history.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('../views/screens/UserScreens/setting.vue')
    },
    {
      path: '/nearbyYou',
      name: 'nearbyYou',
      component: () => import('../views/screens/UserScreens/nearby_you.vue')
    },
    {
      path: '/logOut',
      name: 'logOut',
      component: () => import('../views/welcomeScreen/welcomeOne.vue')
    },
    // Driver Screen
    {
      path: '/driver',
      name: 'driver',
      component: () => import('../views/screens/DriverScreen/driverHome.vue')
    },
    {
      path: '/earnings',
      name: 'earnings',
      component: () => import('../views/screens/DriverScreen/earningPage.vue')
    },
    {
      path: '/driverdashboard',
      name: 'driverdashboard',
      component: () => import('../views/screens/DriverScreen/dashboard.vue')
    },
    {
      path: '/driverprofile',
      name: 'driverprofile',
      component: () => import('../views/screens/DriverScreen/driverprofileScreen.vue')
    },
  ]
})

export default router
