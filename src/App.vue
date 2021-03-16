<template>
  <v-app>
    <v-app-bar
      app
      color="#FFCCBC"
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
      <v-container fill-height>
      
      <TheTimer />

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
    //
  }),
};
</script>
