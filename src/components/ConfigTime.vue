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
                        <p>Ajuste o tempo de foco:</p>
                        <v-btn @click="increase(60, 'focus')">
                            <v-icon>mdi-plus-thick</v-icon> Minutos
                        </v-btn>

                        <span class="text-h1">{{formattedFocus}}</span>

                        <v-btn @click="decrease(60, 'focus')">- Minutos</v-btn>

                    </v-card-text>

                    <v-card-text>
                        <p>Ajuste o tempo de descanso:</p>
                        <v-btn @click="increase(60, 'break')">
                            <v-icon>mdi-plus-thick</v-icon> Minutos
                        </v-btn>
                        <span class="text-h1">{{formattedBreaktime}}</span>

                        <v-btn @click="decrease(60, 'break')">- Minutos</v-btn>
                    </v-card-text>

                    <v-card-text>
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
            timeFocus: 60,
            timeBreaktime: 60
        }
    },
    computed: {
        formattedFocus() {
            return this.format(this.timeFocus)
        },
        formattedBreaktime() {
            return this.format(this.timeBreaktime)
        }
    },
    methods: {
        ...mapActions(["changeTime"]),

        format(value) {
            const minutes = Math.floor(value/ 60)
            let seconds = value % 60

            if(seconds < 10) {
                seconds = `0${seconds}`
            }

            return `${minutes}:${seconds}`
        },
        increase(value, type) {
            if (type == 'focus')
                this.timeFocus += value
            else
                this.timeBreaktime += value
        },
        decrease(value, type) {
            if (type == 'focus')
                this.timeFocus -= value
            else
                this.timeBreaktime -= value
        },
        newTime() {
            this.changeTime({focusTime: this.timeFocus, breakTime: this.timeBreaktime})
            this.dialog = false
        }
    }
}
</script>

<style>

</style>