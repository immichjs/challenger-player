<template>
  <h1 class="title">{{ message }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Title',
  props: {
    message: { type: String, required: true }
  }
})
</script>

<style lang="sass" scoped>
.title
  color: #e9e9e9
  text-align: center
  margin: 1rem 0
  padding-bottom: 1rem
  border-bottom: 1px solid #414141
  text-transform: uppercase
  letter-spacing: 0.5rem
  font-size: 1.25rem
</style>
