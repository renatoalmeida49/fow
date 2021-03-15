<template>
  <div>
      <v-row justify="center">
          <v-col cols="12" style="justify-content: center" class="justify-content-center d-flex">
              <span class="text-h1">{{formattedTime}}</span>
          </v-col>
      </v-row>
      <v-row justify="center" class="mb-4">
        <v-col cols="12" style="justify-content: center" class="justify-content-center d-flex">
            <v-btn @click="startTimer">
                <v-icon>mdi-play</v-icon>
            </v-btn>
            <v-btn @click="pause">
                <v-icon>mdi-pause</v-icon>
            </v-btn>
            <v-btn @click="reset">
                <v-icon>mdi-restart</v-icon>
            </v-btn>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    name: "TheTimer",
    data() {
        return {
            timePassed: 0,
            timerInterval: null,
            time: 0
        }
    },
    computed: {
        ...mapState(["focusTime", "breakTime"]),
        
        timeLeft() {
            return this.time - this.timePassed
        },
        formattedTime() {
            const timeLeft = this.timeLeft

            const minutes = Math.floor(timeLeft / 60)
            let seconds = timeLeft % 60

            if (seconds < 10)
                seconds = `0${seconds}`

            return `${minutes}:${seconds}`
        }
    },
    methods: {
        startTimer() {
            this.timerInterval = setInterval(() => {
                if (this.timePassed == this.time) {
                    clearInterval(this.timerInterval)
                    this.startBreaktime()
                } else {
                    this.timePassed++
                }

                console.log("Running")
            }, 1000)
        },
        pause() {
            clearInterval(this.timerInterval)
        },
        reset() {
            this.timePassed = 0
        },
        startBreaktime() {
            this.time = this.breakTime
            this.reset()

            this.timerInterval = setInterval(() => {
                if (this.timePassed == this.time) {
                    clearInterval(this.timerInterval)
                } else {
                    this.timePassed++
                }
            }, 1000)
        }
    },
    created() {
        this.time = this.focusTime
    }
}
</script>

<style>

</style>