<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-main>
      <v-container>
        <TheTimer />

        <ConfigTime />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ConfigTime from '@/components/ConfigTime.vue'
import TheTimer from '@/components/TheTimer.vue'

export default {
  name: 'App',
  components: {
    ConfigTime,
    TheTimer
  },

  data: () => ({
    //
  }),
};
</script>
