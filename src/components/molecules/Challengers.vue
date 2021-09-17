<template>
  <div class="hello">
    <Title message="Challenger List #BR" />
    <Players :challengerPlayers="challengers" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex'

import Players from '../atoms/Players.vue'
import Title from '../atoms/TitleContent.vue'

export default Vue.extend({
  name: 'Challengers',
  async created () {
    this.requestChallengerPlayers()
  },
  computed: {
    ...mapGetters('challengers', ['challengers'])
  },
  methods: {
    ...mapActions('challengers', ['requestChallengerPlayers'])
  },
  components: {
    Players,
    Title,
  }
});
</script>

<style scoped lang="sass">
</style>
