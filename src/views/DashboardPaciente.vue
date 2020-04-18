<template>
  <div class="altura-100-centro">
    <div>
      dashboard
    </div>
  </div>
</template>

<script>
import animarInputs from '../mixins/animarInputs'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  mixins: [animarInputs]
}
</script>
