<template>
    <v-row fill-height justify="center" :class="{breakTime: interval, focus: !interval}">
        <v-col cols="12" style="justify-content: center" class="d-flex">
            <span class="text-h1 font-weight-black" style="color: black">{{formattedTime}}</span>
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

        <v-col cols="12">
            <ConfigTime />
        </v-col>
    </v-row>
</template>

<script>
import { mapState } from "vuex"
import ConfigTime from "@/components/ConfigTime.vue"

export default {
    name: "TheTimer",
    components: {
        ConfigTime
    },
    data() {
        return {
            timePassed: 0,
            timerInterval: null,
            time: 0,
            interval: false
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
            let context, oscillator, contextGain, x = 2

            context = new AudioContext() // Objeto para gerar o som
            oscillator = context.createOscillator() // Oscilador, o que emite a senoide
            contextGain = context.createGain() // Permite alterar a onda do som, para não corta-la, mas reduzi-la a zero gradativamente

            oscillator.connect(contextGain) // Ligamos ele ao oscilador
            contextGain.connect(context.destination) // conectamos a nossa saída de som
            oscillator.start(0)

            contextGain.gain.exponentialRampToValueAtTime(
                0.00001, context.currentTime + x
            )

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
        this.time = this.focusTime
    }
}
</script>

<style scoped>

</style>