<template>
  <div>
      <p>{{formattedTime}}</p>
      <button @click="startTimer">Iniciar</button>
      <button @click="pause">Pausar</button>
      <button @click="reset">Reset</button>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    name: "TheTimer",
    data() {
        return {
            timePassed: 0,
            timerInterval: null
        }
    },
    computed: {
        ...mapState(["time"]),
        
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
        }
    }
}
</script>

<style>

</style>