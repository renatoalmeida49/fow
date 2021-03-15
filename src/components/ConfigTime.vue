<template>
    <v-row justify="center">
        <v-col cols="12" style="justify-content: center" class="justify-content-center d-flex">
            <v-dialog
                v-model="dialog"
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                        v-on="on"
                    >
                        <v-icon>mdi-cog</v-icon>
                    </v-btn>
                </template>

                <v-card>
                    <v-card-title>
                        Configurar tempo
                    </v-card-title>

                    <v-card-text>
                        <p>Ajuste o tempo do cronometro:</p>
                        <v-btn @click="increase(60)">
                            <v-icon>mdi-plus-thick</v-icon> Minutos
                        </v-btn>
                        <v-btn @click="increase(1)">
                            <v-icon>mdi-plus-thick</v-icon> Segundos
                        </v-btn>

                        <span class="text-h1">{{formattedSeconds}}</span>

                        <v-btn @click="decrease(60)">- Minutos</v-btn>
                        <v-btn @click="decrease(1)">- Segundos</v-btn>

                        <v-btn @click="newTime">Configurar timer</v-btn>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-col>
    </v-row>
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