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
      
      <TheTimer @toggle="toggle" :key="componentKey"/>

      <ConfigTime @render="forceRender" />

      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import TheTimer from '@/components/TheTimer.vue'
import ConfigTime from '@/components/ConfigTime.vue'

export default {
  name: 'App',
  components: {
    ConfigTime,
    TheTimer
  },

  data: () => ({
    interval: false,
    componentKey: 0,
  }),

  methods: {
    toggle() {
      this.interval = !this.interval
    },
    forceRender() {
      this.componentKey += 1
      this.interval = false
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