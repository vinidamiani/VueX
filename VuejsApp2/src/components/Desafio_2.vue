<template>
    <div>
        <ul>
            <li v-for="(nota,index) in notas" :key="index">{{nota}}</li>
        </ul>
        <input type="text" v-model="titulo" @keypress.enter="salvar" />
    </div>
</template>

<script>
    import { ref } from "vue";

    export default {
        setup() {

            const notas = ref([]);

            const titulo = ref("");

            function salvar() {
                notas.value.push(titulo.value)
                titulo.value = "";
            }

            return {
                notas,
                titulo,
                salvar
            };
        }
    };
</script>

<style scoped>
</style>