<template>
  <v-app>
    <v-app-bar
      app
      color="#FAFAFA"
      dark
    >
    <v-spacer></v-spacer>
    
    <v-img
      src="@/assets/logo.png"
      max-width="50"
    />

    <v-spacer></v-spacer>
    </v-app-bar>

    <v-main fill-height>
      <v-container
        fill-height
        :class="{breakTime: interval, focus: !interval}"
      >
      
      <TheTimer @toggle="toggle" />

      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import TheTimer from '@/components/TheTimer.vue'

export default {
  name: 'App',
  components: {
    
    TheTimer
  },

  data: () => ({
    interval: false
  }),

  methods: {
    toggle() {
      this.interval = !this.interval
    }
  }
};
</script>

<style>
.focus {
    background: #FF8A65;
}

.breakTime {
    background: #689F38;
}
</style>