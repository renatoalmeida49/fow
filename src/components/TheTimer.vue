<template>
    <v-row fill-height justify="center">
        <v-col cols="12" style="justify-content: center" class="d-flex">
            <span id="time" class="text-h1 text-md-h1 font-weight-black" style="color: black">
                {{formattedTime}}
            </span>
        </v-col>
        
        <v-col cols="12" style="justify-content: center" class="d-flex">
            <v-btn
                @click="startTimer"
                class="mx-1"
                :elevation="9"
            >
                <v-icon>mdi-play</v-icon>
            </v-btn>
            <v-btn
                @click="pause"
                class="mx-1"
                :elevation="9"
            >
                <v-icon>mdi-pause</v-icon>
            </v-btn>
            <v-btn
                @click="reset"
                class="mx-1"
                :elevation="9"
            >
                <v-icon>mdi-restart</v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
import { mapState } from "vuex"

import * as Tone from 'tone'

export default {
    name: "TheTimer",
    components: {
        
    },
    data() {
        return {
            timePassed: 0,
            timerInterval: null,
            time: 0,
            interval: false,

            sound: null,
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
        reset() {
            this.timePassed = 0
        },
        toggle() {
            this.sound.triggerAttackRelease("C4", "8n")

            this.interval = !this.interval
            this.$emit('toggle', this.interval)

            this.reset()

            if(!this.interval)
                this.time = this.focusTime
            else
                this.time = this.breakTime
        },
        startTimer() {
            this.timerInterval = setInterval(() => {
                if (this.timePassed == this.time) {
                    clearInterval(this.timerInterval)
                    this.toggle()
                } else {
                    this.timePassed++
                }
            }, 1000)
        },
        pause() {
            clearInterval(this.timerInterval)
        },
    },    
    created() {
        this.sound = new Tone.Synth().toDestination()
        this.time = this.focusTime
    }
}
</script>

<style scoped>
#time {
    font-size: 8rem;
}
</style>