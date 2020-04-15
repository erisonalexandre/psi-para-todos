<template>
  <div>
    <navbar></navbar>
    <slot></slot>
  </div>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'DefaultLayout',
  components: {
    Navbar
  },
  mounted () {
    // animação dos inputs
    const blurInput = function () {
      var inputValue = $(this).val()
      if (inputValue === '') {
        $(this).removeClass('filled')
        $(this).parents('.form-group').removeClass('focused')
      } else {
        $(this).addClass('filled')
      }
    }

    const focusInput = function () {
      $(this).parents('.form-group').addClass('focused')
    }

    $('select').focus(focusInput).blur(blurInput)

    $('input').focus(focusInput).blur(blurInput())

    $('textarea').focus(focusInput).blur(blurInput())
  }
}
</script>
