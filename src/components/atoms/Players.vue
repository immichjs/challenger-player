<template>
  <ul class="challenger-list">
    <li v-for="player in challengerPlayers" :key="player.summonerId" class="challenger-list-player">
      <div class="user-informations">
        <h2>{{ player.summonerName }}</h2>
        <img src="../../assets/challenger.png" width="40">
      </div>
      <div class="player-counts">
        <div class="player-counts-matches">
          <p>Vitórias: <strong class="win">{{ player.wins }}</strong></p>
          <p>Perdas: <strong class="loss">{{ player.losses }}</strong></p>
        </div>
        <h2>{{ player.leaguePoints }} PDL</h2>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    challengerPlayers: { type: Array, required: true }
  }
})
</script>

<style lang="sass" scoped>
.challenger-list
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 100%
  padding: 1rem
  gap: .5rem

  &-player
    color: #e9e9e9
    display: flex
    flex-direction: column
    background-color: #414141
    width: 28rem
    padding: 1rem
    border-radius: .25rem
    justify-content: space-between
    box-shadow: 0 0px 10px rgba(0, 0, 0, .1)
    transition: .5s
    cursor: pointer
    border-bottom: 4px solid transparent

    &:hover
      opacity: 0.8
      transform: translateX(1rem)
      border-bottom: 4px solid #e9e9e9

    .user-informations
      width: 100%
      display: flex
      justify-content: space-between

      h2
      align-self: flex-start
      margin: 0
      letter-spacing: .1rem
    
    .player-counts
      display: flex
      justify-content: space-between
      align-items: flex-end
      
      .win
        color: lightgreen
      
      .loss
        color: lightcoral

      div
        display: flex
        flex-direction: column
        gap: .25rem
      
      h2
        font-size: 1.25rem    
        text-align: right
        color: goldenrod
</style>
