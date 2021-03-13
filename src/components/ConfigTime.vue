<template>
    <v-dialog
        v-model="dialog"
    >
        <template v-slot:activator="{ on }">
            <v-btn
                v-on="on"
            >
                Configurar tempo
            </v-btn>
        </template>

        <v-card>
            <v-card-title>
                Configurar tempo
            </v-card-title>

            <v-card-text>
                <p>Ajuste o tempo do cronometro:</p>
                <v-btn @click="increase(60)">+ Minutos</v-btn>
                <v-btn @click="increase(1)">+ Segundos</v-btn>

                <p>{{formattedSeconds}}</p>

                <v-btn @click="decrease(60)">- Minutos</v-btn>
                <v-btn @click="decrease(1)">- Segundos</v-btn>

                <v-btn @click="newTime">Configurar timer</v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapActions } from "vuex"

export default {
    name: "ConfigTime",
    data() {
        return {
            dialog: false,
            time: 60
        }
    },
    computed: {
        formattedSeconds() {
            const minutes = Math.floor(this.time / 60)
            let seconds = this.time % 60

            if(seconds < 10) {
                seconds = `0${seconds}`
            }

            return `${minutes}:${seconds}`
        }
    },
    methods: {
        ...mapActions(["changeTime"]),

        increase(value) {
            this.time += value
        },
        decrease(value) {
            switch(value) {
                case 1:
                    if(this.time > 0)
                        this.time--
                    break;
                case 60:
                    if(this.time > 60)
                        this.time -= 60
                    break;
            }
        },
        newTime() {
            this.changeTime(this.time)
            this.dialog = false
        }
    }
}
</script>

<style>

</style>