<template>
    <v-row justify="center">
        <v-col cols="12" style="justify-content: center" class="justify-content-center d-flex">
            <v-dialog
                v-model="dialog"
                max-width="272px"
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                        v-on="on"
                    >
                        <v-icon>mdi-cog</v-icon>
                    </v-btn>
                </template>

                <v-card>
                    <v-card-title class="justify-center">
                        Configurar
                    </v-card-title>

                    <v-card-text class="d-flex justify-center">
                        <p>Ajuste o tempo de foco e descanso:</p>
                    </v-card-text>

                    <v-card-text class="focus d-flex justify-center pt-4">
                        <v-btn @click="increase(60, 'focus')" width="100%">
                            <v-icon>mdi-numeric-positive-1</v-icon>
                        </v-btn>
                    </v-card-text>
                    <v-card-text class="focus d-flex justify-center">
                        <span class="text-h1">{{formattedFocus}}</span>
                    </v-card-text>
                    <v-card-text class="focus d-flex justify-center">
                        <v-btn @click="decrease(60, 'focus')" width="100%">
                            <v-icon>mdi-numeric-negative-1</v-icon>
                        </v-btn>
                    </v-card-text>

                    <v-card-text class="breakTime d-flex justify-center pt-4">
                        <v-btn @click="increase(60, 'break')" width="100%">
                            <v-icon>mdi-numeric-positive-1</v-icon> 
                        </v-btn>
                    </v-card-text>
                    <v-card-text class="breakTime d-flex justify-center">                    
                        <span class="text-h1">{{formattedBreaktime}}</span>
                    </v-card-text>
                    <v-card-text class="breakTime d-flex justify-center">
                        <v-btn @click="decrease(60, 'break')" width="100%">
                            <v-icon>mdi-numeric-negative-1</v-icon>
                        </v-btn>
                    </v-card-text>

                    <v-card-actions class="justify-center">
                        
                        <v-btn @click="newTime" class="mb-4">Configurar</v-btn>
                        
                    </v-card-actions>
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
            this.$emit("render")
            this.dialog = false
        }
    }
}
</script>

<style>

</style>