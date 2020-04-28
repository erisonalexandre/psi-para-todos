import bearer from '@websanova/vue-auth/drivers/auth/bearer'
import axios from '@websanova/vue-auth/drivers/http/axios.1.x'
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x'

const config = {
  auth: bearer,
  http: axios,
  router: router,
  tokenDefaultKey: 'jwt-auth',
  rolesKey: 'perfil',

  // API endpoints used in Vue Auth.
  registerData: {
    url: 'auth/user',
    method: 'POST',
    redirect: '/login'
  },
  loginData: {
    url: 'auth/login',
    method: 'POST',
    redirect: '',
    fetchUser: true
  },
  logoutData: {
    url: 'auth/logout',
    method: 'POST',
    redirect: '/',
    makeRequest: false
  },
  fetchData: {
    url: 'auth/user',
    method: 'POST',
    enabled: true
  },
  refreshData: {
    url: 'auth/refresh',
    method: 'GET',
    enabled: true,
    interval: 30
  }
}
export default config
