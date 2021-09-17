<template>
  <div id="app">
    <Challengers playersList="challengers"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Challengers from '@/components/molecules/Challengers.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Challengers
  }
});
</script>

<style lang="sass">
*
  box-sizing: border-box
  padding: 0
  margin: 0

body
  background-color: #252525
  font-family: Arial, Helvetica, sans-serif

#app
  display: flex
  flex-direction: column
  align-items: center
  gap: 1rem
</style>
